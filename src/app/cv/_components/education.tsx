import { type StepsType } from "~/app/_components/section";

export function Education({ education }: { education: StepsType }) {
  return (
    <section className="flex flex-col gap-2 print:gap-1">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Education
      </h2>
      <div className="flex flex-col gap-2 print:gap-1">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col gap-4 pt-2 print:gap-2">
            {edu.positions.map((pos, posIndex) => (
              <div
                key={posIndex}
                className="avoid-break flex flex-col gap-0.5 last:pb-0 print:gap-0.5"
              >
                <div className="flex items-baseline justify-between print:leading-none">
                  <div className="text-base font-bold leading-none print:text-[10px]">
                    {edu.company}
                  </div>
                  <div className="text-sm font-medium leading-none print:text-[9px]">
                    {pos.date}
                  </div>
                </div>
                <div className="flex items-baseline justify-between print:-mt-0.5 print:leading-none">
                  <div className="text-sm italic leading-none print:text-[9px]">
                    {pos.title}
                  </div>
                </div>
                {pos.projects.length > 0 && (
                  <ul className="list-outside list-disc pl-4 pt-0.5 print:pl-3">
                    {pos.projects.map((proj, pIndex) => (
                      <li
                        key={pIndex}
                        className="pb-0.5 pl-1 text-sm leading-tight last:pb-0 print:text-[9px] print:leading-[1.1]"
                      >
                        {proj.title && (
                          <span className="mr-1 font-semibold">
                            {proj.title}:
                          </span>
                        )}
                        {proj.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
