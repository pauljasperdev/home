import { ArrowUpRight } from "lucide-react";
import { type SideProjectType } from "~/app/_components/section";

export function Projects({ projects }: { projects: SideProjectType[] }) {
  return (
    <section className="flex flex-col gap-2 print:gap-0.5">
      <h2 className="border-b border-black text-lg font-bold uppercase tracking-wider print:text-sm">
        Projects
      </h2>
      <div className="flex flex-col gap-2 pt-2 print:gap-2">
        <ul className="list-outside list-disc pl-4 pt-0 print:pl-3">
          {projects.map((project, index) => (
            <li
              key={index}
              className="avoid-break pb-2 pl-1 text-sm leading-tight last:pb-0 print:pb-1 print:pl-0 print:text-[9px] print:leading-[1.1]"
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
                <span className="mt-0.5 block text-xs italic text-gray-600 print:text-[8px]">
                  Tech: {project.technologies}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
