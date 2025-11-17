import React from "react";
import { Button } from "~/components/ui/button";
import { Mail } from "lucide-react";
import Blueskyicon from "./Blueskyicon";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex min-h-screen items-center justify-start px-4 sm:items-start sm:px-0">
      <div className="flex flex-col items-start justify-center space-y-4 sm:space-y-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl">Welcome Traveller</h1>
        <div className="flex w-full flex-col items-start justify-start space-y-4">
          <h2 className="text-2xl font-light sm:text-4xl md:text-5xl">
            {"I'm Paul Jasper."}
          </h2>

          <div className="flex gap-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
