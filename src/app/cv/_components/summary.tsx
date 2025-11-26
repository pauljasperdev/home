export function Summary({ summary }: { summary: string }) {
  return (
    <section className="avoid-break flex flex-col gap-1 print:gap-0.5">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Professional Summary
      </h2>
      <p className="text-justify text-sm leading-relaxed print:text-[9px] print:leading-tight">
        {summary}
      </p>
    </section>
  );
}
