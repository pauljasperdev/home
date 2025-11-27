import { type CertificateType } from "~/app/_components/section";

export function Certifications({
  certifications,
}: {
  certifications: CertificateType[];
}) {
  return (
    <section className="avoid-break flex flex-col gap-2 print:gap-2">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Certifications
      </h2>

      <div className="flex flex-col gap-0.5">
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 print:gap-y-0">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex justify-between text-sm print:my-0 print:text-[9px] print:leading-none"
            >
              <span>{cert.title}</span>
              <span className="self-center text-xs italic text-gray-600 print:text-[8px]">
                {cert.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
