---
title: "SST + Effect: Making Cloud Apps That AI Agents Can Actually Run"
description: "How to architect SST applications with Effect-TS so coding agents can build infrastructure AND test locally, no AWS credentials, no SSO shells."
date: 2026-02-18
tags: ["sst", "effect-ts", "ai-agents", "local-development"]
draft: true
---

My agent can write code. It can read my codebase, understand the domain, propose changes, and implement them. What it can't do is _run_ the application. My app needs AWS credentials. It needs an SSO login. It needs a deployed stage somewhere in the cloud before `sst dev` will even start. The feedback loop is broken before it begins.

I don't give my agents access to an SSO shell. Here's why they don't need one.

There's a setup that gives agents full access to both infrastructure-as-code and a locally-runnable application. It combines SST for infrastructure with Effect-TS for service abstraction. The result: an agent can read and modify cloud resource definitions, start the app locally with a single command, and verify behavior through a browser, without ever touching AWS.

## SST: Infrastructure as TypeScript

SST turns cloud infrastructure into TypeScript. Not YAML, not JSON templates, not a console full of dropdowns. TypeScript sitting in your repo, next to your application code.

This matters for agents because an agent that can read TypeScript can read your infrastructure. It can see that you have an S3 bucket, understand what IAM policies govern it, and add a new resource by writing more TypeScript. The cognitive context is the same language, the same repo, the same mental model. There's no separate DSL to learn, no context switch between "infrastructure mode" and "application mode."

```typescript
// infra/storage.ts
const bucket = new sst.aws.Bucket("Documents");

new aws.iam.UserPolicy("DocumentsPolicy", {
  user: writerUser.name,
  policy: bucket.arn.apply((arn) =>
    JSON.stringify({
      Statement: [
        { Effect: "Allow", Action: ["s3:PutObject"], Resource: [`${arn}/*`] },
      ],
    }),
  ),
});
```

One line to declare the bucket, a few more to attach a policy. An agent can add a new bucket, modify permissions, or wire up a Lambda function by editing this file. Changes deploy with `sst deploy`. The infrastructure lives in the same repo as the application, versioned together, readable by the same tools.

## Don't Let SST Into Your Application Code

SST ships a convenience SDK: `import { Resource } from "sst"`. It lets you reference deployed resource names directly. `Resource.Documents.name` gives you the bucket name without any configuration. Sounds great.

The problem is coupling. Code that imports from `"sst"` can only run inside `sst dev` or after `sst deploy`. Take it outside that context and it fails. Your agent would need `sst dev` running, which means AWS credentials, SSO auth, a deployed stage. You're back where you started.

The fix is to use environment variables as the bridge. SST can populate any env var you define when it deploys. When running locally, you provide defaults yourself. Your application code reads `process.env.BUCKET_NAME` and it never knows SST exists.

```typescript
// local-defaults.ts, committed to the repo
const localDefaults = {
  BUCKET_NAME: "local-storage",
  DATABASE_URL: "postgresql://localhost:5432/myapp",
  QUEUE_URL: "http://localhost:9324/queue/default",
};

if (process.env.LOCAL === "1") {
  for (const [key, value] of Object.entries(localDefaults)) {
    process.env[key] ??= value;
  }
}
```

Import this at the top of your entry point and every `Effect.Config.string("BUCKET_NAME")` call works whether you're in production or running locally. Zero SST imports in application code. This is the boundary that makes local execution possible. The file is committed to the repo, so agents can read it, modify it, and add new defaults when they add new infrastructure.

## Effect: Services as Swappable Implementations

This is where the architecture gets interesting. Effect-TS gives you a way to express dependencies as interfaces and swap implementations at the composition root. Two concepts to understand clearly.

A **service** is an interface. It describes what something does, not how. In Effect, you define it with `Context.Tag`. It's the thing your business logic depends on. "I need something I can write files to" is the service. Your business logic calls `Bucket.write(key, data)` and doesn't care what happens next. It doesn't know if there's an S3 bucket on the other end or a folder on disk.

A **layer** is an implementation. It provides the how. You can have multiple layers for the same service. Your business logic doesn't pick the layer, the composition root does, at startup. This is the key insight: the decision of which implementation to use is pushed to the edges of the system, not buried in business logic.

Here's what a service definition looks like:

```typescript
import * as Effect from "effect";

interface BucketShape {
  readonly write: (key: string, data: string) => Effect.Effect<void, Error>;
}

export class Bucket extends Effect.Context.Tag("Bucket")<
  Bucket,
  BucketShape
>() {}
```

The production layer talks to AWS S3. The local layer writes to the filesystem. Same interface, completely different backends:

```typescript
export const BucketLive = Effect.Layer.effect(
  Bucket,
  Effect.gen(function* () {
    const bucketName = yield* Effect.Config.string("BUCKET_NAME");
    const s3 = new S3Client({});
    return Bucket.of({
      write: (key, data) =>
        Effect.tryPromise(() =>
          s3.send(
            new PutObjectCommand({ Bucket: bucketName, Key: key, Body: data }),
          ),
        ),
    });
  }),
);

export const BucketLocal = Effect.Layer.effect(
  Bucket,
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    return Bucket.of({
      write: (key, data) =>
        Effect.gen(function* () {
          yield* fs.makeDirectory(path.dirname(key), { recursive: true });
          yield* fs.writeFileString(key, data);
        }),
    });
  }),
).pipe(Effect.Layer.provide(NodeFileSystem.layer));
```

Then one line at the composition root switches between them based on the env var:

```typescript
export const BucketLayer = Effect.Layer.suspend(() =>
  process.env.LOCAL === "1" ? BucketLocal : BucketLive,
);
```

`Layer.suspend` evaluates lazily. It reads the env var at runtime, not at import time, so the decision happens after your local defaults have been populated. The right layer gets wired in automatically.

Think of it as dependency injection with compile-time guarantees. The tag is the interface, the layer is the implementation. Your business logic depends on the tag and it never knows which layer it gets.

This isn't just for S3. HTTP clients, third-party APIs, databases, email services, queues, any external dependency can be a service with a local layer. The pattern scales to your entire dependency graph. See [effect.website](https://effect.website) for the full depth of what's possible.

## The Payoff: Agents With a Full Feedback Loop

With SST for infrastructure and Effect for service abstraction, the agent workflow looks like this.

First, the agent reads `infra/*.ts` to understand what cloud resources exist. It modifies them to add a new bucket, change a Lambda's memory, or wire up a new queue. No console, no YAML, no separate tooling. Just TypeScript in the same repo it's already reading.

Second, the agent runs the local dev command with `LOCAL=1` set. The app starts with local layers active. No AWS credentials needed. No deployed stage. The application boots against local defaults: a local database, a local filesystem, a local queue emulator.

Third, the agent uses Playwright MCP to open a browser, interact with the UI, take screenshots, and verify behavior. Claude Code runs shell commands and starts the dev server. Playwright MCP gives browser automation and screenshot verification. The agent can do full visual QA, end-to-end, without ever touching AWS.

The agent doesn't need credentials. It doesn't need a deployed stage. It runs your real application code with your real business logic, just backed by local service implementations instead of cloud ones. The code path is identical. The only difference is what's on the other end of the service interface.

This architecture treats the cloud as optional during development. Agents iterate fast, verify locally, and hand off to CI/CD which deploys to the real infrastructure. The goal isn't to avoid the cloud. It's to make the cloud optional during the feedback loop that matters most, so the agents doing the work aren't blocked waiting for credentials they'll never have.
