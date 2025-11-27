"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { Mail, Github, MapPin } from "lucide-react";
import Blueskyicon from "./Blueskyicon";
import Link from "next/link";
import { DownloadButton } from "./download-button";

const Welcome = () => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center px-4 sm:justify-start sm:px-0">
        <div className="flex flex-col items-center justify-center space-y-4 sm:items-start sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl">
            Hi, I&apos;m Paul.
          </h1>
          <div className="flex w-full flex-col items-start justify-start space-y-4">
            <h2 className="text-center text-2xl font-light sm:text-left sm:text-4xl md:text-5xl">
              Solutions Architect, Full-Stack Engineer and Design Thinker
            </h2>
            <span className="flex items-center gap-1">
              <MapPin className="size-3" /> Oldenburg, Germany
            </span>
            <div className="flex gap-2 pt-8">
              <Button
                variant="link2"
                size="sm"
                className="w-20 rounded-full"
                asChild
              >
                <Link
                  href="https://github.com/pauljasperdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-extralight"
                >
                  <Github className="size-6" />
                </Link>
              </Button>
              <Button
                variant="link2"
                size="sm"
                className="w-20 rounded-full"
                asChild
              >
                <Link
                  href="https://bsky.app/profile/pauljasper.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-extralight"
                >
                  <Blueskyicon className="size-6" />
                  {/* pauljasper.dev */}
                </Link>
              </Button>
              <Button
                variant="link2"
                size="sm"
                className="w-20 rounded-full"
                asChild
              >
                <Link
                  href="mailto:Paul-Jasper%20Sahr%20<mail@pauljasper.dev>?subject=Hello%20Paul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-extralight"
                >
                  <Mail className="size-6" />
                  {/* mail@pauljasper.dev */}
                </Link>
              </Button>
              <DownloadButton />
            </div>
          </div>
        </div>
        {/* <Image
        className="rounded-full"
        src="/favicon.ico"
        alt="Paul Jasper"
        width={200}
        height={200}
      /> */}
      </div>
    </>
  );
};

export default Welcome;
