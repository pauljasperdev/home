"use client";

import { useRef } from "react";
import { Download } from "lucide-react";
import { Button } from "~/components/ui/button";

export function DownloadButton() {
  const printFrameRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    const frame = printFrameRef.current;
    if (frame?.contentWindow) {
      const originalTitle = document.title;
      document.title = "Paul-Jasper_Sahr_CV";
      frame.contentWindow.print();
      document.title = originalTitle;
    }
  };

  return (
    <>
      <Button
        variant="link2"
        size="sm"
        className="w-20 rounded-full"
        onClick={handlePrint}
      >
        <span className="flex items-center gap-1 text-lg font-extralight">
          CV <Download className="size-6" />
        </span>
      </Button>
      <iframe
        ref={printFrameRef}
        src="/cv"
        className="fixed h-0 w-0 opacity-0"
        title="CV Print Frame"
        aria-hidden="true"
      />
    </>
  );
}
