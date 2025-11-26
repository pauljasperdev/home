import { type CertificateType } from "~/app/_components/section";

type TechnicalSkills = {
  languages: string;
  cloud: string;
  dataAI: string;
};

export function Skills({
  skills,
  certifications,
}: {
  skills: TechnicalSkills;
  certifications: CertificateType[];
}) {
  return (
    <section className="avoid-break flex flex-col gap-2 print:gap-4">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Certifications & Skills
      </h2>

      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-bold uppercase text-gray-700 print:text-[9px]">
          Technical Skills
        </h3>
        <div className="text-sm leading-relaxed print:text-[9px] print:leading-tight">
          <span className="font-semibold">Languages & Frameworks:</span>{" "}
          {skills.languages}
          <br />
          <span className="font-semibold">Cloud & DevOps:</span> {skills.cloud}
          <br />
          <span className="font-semibold">Data & AI:</span> {skills.dataAI}
          <br />
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <h3 className="text-sm font-bold uppercase text-gray-700 print:text-[9px]">
          Certifications
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 print:gap-y-0">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex justify-between text-sm print:text-[9px]"
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
