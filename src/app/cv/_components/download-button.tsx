"use client";

import { Printer } from "lucide-react";
import { Button } from "~/components/ui/button";

export function DownloadButton() {
  return (
    <div className="no-print fixed right-8 top-8 z-50">
      <Button
        onClick={() => window.print()}
        className="rounded-full border-2 border-black bg-black px-6 text-white shadow-xl hover:bg-white hover:text-black print:hidden"
        size="lg"
      >
        <Printer className="mr-2 size-5" />
        Download PDF
      </Button>
    </div>
  );
}

