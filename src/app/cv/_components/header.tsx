import { MapPin, Mail, Globe, ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-col gap-1 pb-2 text-center print:gap-0.5 print:pb-1">
      <h1 className="text-3xl font-bold uppercase tracking-wide print:text-2xl">
        Paul-Jasper Sahr
      </h1>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-sm print:text-[10px]">
        <span className="flex items-center gap-1">
          <MapPin className="size-3" /> Oldenburg, Germany
        </span>
        <a
          href="mailto:mail@pauljasper.dev"
          className="flex items-center gap-1 hover:underline"
        >
          <Mail className="size-3" /> mail@pauljasper.dev
        </a>
        <a
          href="https://pauljasper.dev"
          className="flex items-center gap-1 hover:underline"
        >
          <Globe className="size-3" /> pauljasper.dev
          <ArrowUpRight className="size-3 -translate-y-0.5 text-gray-500 opacity-50 print:hidden" />
        </a>
      </div>
    </header>
  );
}
