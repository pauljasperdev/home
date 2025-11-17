import React from "react";
import { Button } from "~/components/ui/button";
import Xicon from "./Xicon";
import { Mail } from "lucide-react";
import Blueskyicon from "./Blueskyicon";

const Welcome = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <div className="flex flex-col items-start justify-center space-y-8">
        <h1 className="text-5xl">Welcome Traveller</h1>
        <div className="flex w-full flex-col items-start justify-start space-y-4">
          <h2 className="text-3xl font-light">{"I'm Paul Jasper."}</h2>

          <div className="flex gap-2">
            <Button
              variant="link2"
              size="sm"
              className="w-20 rounded-full"
              asChild
            >
              <a
                href="https://bsky.app/profile/pauljasper.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-extralight"
              >
                <Blueskyicon className="size-6" />
                {/* pauljasper.dev */}
              </a>
            </Button>
            <Button
              variant="link2"
              size="sm"
              className="w-20 rounded-full"
              asChild
            >
              <a
                href="mailto:Paul-Jasper%20Sahr%20<mail@pauljasper.dev>?subject=Hello%20Paul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-extralight"
              >
                <Mail className="size-6" />
                {/* mail@pauljasper.dev */}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
