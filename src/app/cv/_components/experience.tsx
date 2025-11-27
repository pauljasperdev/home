import { ArrowUpRight } from "lucide-react";
import { type StepsType } from "~/app/_components/section";

export function Experience({ experience }: { experience: StepsType }) {
  return (
    <section className="flex flex-col gap-2 print:gap-0.5">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Professional Experience
      </h2>
      <div className="flex flex-col gap-6 print:gap-4">
        {experience.map((exp, index) => (
          <div key={index} className="flex flex-col gap-6 pt-2 print:gap-4">
            {exp.positions.map((pos, posIndex) => (
              <div
                key={posIndex}
                className="avoid-break flex flex-col gap-1 print:gap-1"
              >
                <div className="flex flex-col gap-0.5 print:gap-0">
                  <div className="flex items-baseline justify-between print:leading-none">
                    <div className="text-base font-bold leading-none print:text-[10px]">
                      {pos.title}
                    </div>
                    <div className="whitespace-nowrap text-sm font-medium leading-none print:text-[9px]">
                      {pos.date}
                    </div>
                  </div>
                  <div className="flex items-baseline justify-between print:-mt-0.5 print:leading-none">
                    <div className="text-sm font-semibold italic leading-none print:text-[9px]">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.company}
                          <ArrowUpRight className="ml-0.5 inline-block size-3 -translate-y-1 text-gray-500 opacity-50 print:hidden" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </div>
                    <div className="text-xs text-gray-600 print:block print:text-[8px]">
                      Berlin, Germany
                    </div>
                  </div>
                </div>

                <ul className="list-outside list-disc pl-4 pt-1.5 print:pl-3 print:pt-0">
                  {pos.projects.map((project, projIndex) => (
                    <li
                      key={projIndex}
                      className="pb-2 pl-1 text-sm leading-tight last:pb-0 print:pb-0 print:pl-0 print:text-[9px] print:leading-[1.1]"
                    >
                      <span className="mr-1 font-semibold">
                        {project.link ? (
                          <a
                            href={project.link}
                            className="hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.title}
                            <ArrowUpRight className="ml-0.5 inline-block size-3 -translate-y-1 text-gray-500 opacity-50 print:hidden" />
                          </a>
                        ) : (
                          project.title
                        )}
                        :
                      </span>
                      {Array.isArray(project.description) ? (
                        <ul className="mt-1 list-disc pl-4">
                          {project.description.map((desc, i) => (
                            <li key={i} className="pl-1">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        project.description
                      )}
                      {project.technologies && (
                        <span className="mt-0 block text-xs italic text-gray-600 print:text-[8px]">
                          Tech: {project.technologies}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
