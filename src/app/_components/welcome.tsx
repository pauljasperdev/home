import React from "react";
import { Button } from "~/components/ui/button";
import Xicon from "./Xicon";

const Welcome = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <div className="flex flex-col items-start justify-center space-y-8">
        <h1 className="text-5xl">Welcome Traveller</h1>
        <div className="flex w-full flex-col items-start justify-start space-y-4">
          <h2 className="text-3xl font-light">{"I'm Paul Jasper."}</h2>

          <Button
            variant="link2"
            size="sm"
            className="rounded-full [&_svg]:!size-6"
            asChild
          >
            <a
              href="https://twitter.com/pauljasperdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-extralight"
            >
              <Xicon />
              pauljasperdev
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
