import { ArrowUpRight } from "lucide-react";

export type ProjectType = {
  title: string;
  description: string | string[];
  technologies: string;
  link?: string;
};

export type SideProjectType = {
  title: string;
  description: string | string[];
  technologies: string;
  link: string;
};

export type PositionType = {
  title: string;
  date: string;
  projects: ProjectType[];
};
export type StepsType = {
  company: string;
  link: string;
  description?: string;
  positions: PositionType[];
}[];

export type CertificateType = {
  title: string;
  description: string;
  date: string;
};

export function Section({
  title,
  content,
}: {
  title: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70vh] w-full flex-col gap-4 pb-[200px]">
      <div className="flex flex-col items-start space-y-2 px-0 sm:items-start sm:px-0">
        <h2 className="-ml-[2px] py-4 text-left text-4xl text-zinc-300 sm:-ml-[4px] sm:text-6xl md:-ml-[6px] md:text-8xl">
          {title}
        </h2>
      </div>
      <div className="group flex w-full items-start justify-start sm:items-start sm:justify-normal">
        {content}
      </div>
    </div>
  );
}

export function Title({
  title,
  date,
  company,
  companyLink,
}: {
  title: string;
  date: string;
  company?: string;
  companyLink?: string;
}) {
  return (
    <div className="flex w-full flex-col justify-between">
      <h3 className="text-2xl text-zinc-300 sm:text-4xl">{title}</h3>
      {company && (
        <h4 className="text-lg text-zinc-400 sm:text-xl">
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200"
            >
              {company}
              <ArrowUpRight className="ml-0.5 inline-block size-3 -translate-y-1 text-zinc-500 opacity-50" />
            </a>
          ) : (
            company
          )}
        </h4>
      )}
      <span className="text-sm font-extralight leading-relaxed text-zinc-300 sm:text-base">
        {date}
      </span>
    </div>
  );
}
export function Project({
  title,
  description,
  technologies,
  link,
}: {
  title: string;
  description: string | string[];
  technologies: string;
  link?: string;
}) {
  return (
    <div className="py-4 pl-0">
      <div className="flex flex-col items-start space-y-2 px-0 py-1 sm:items-start sm:px-0">
        <h4 className="text-left text-base text-zinc-300 sm:text-lg">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-200"
            >
              {title}
              <ArrowUpRight className="ml-0.5 inline-block size-3 -translate-y-1 text-zinc-500 opacity-50" />
            </a>
          ) : (
            title
          )}
        </h4>
        {Array.isArray(description) ? (
          <ul className="w-full list-disc pl-4 text-left text-sm leading-relaxed text-zinc-400 sm:w-[90%] sm:text-base">
            {description.map((item, index) => (
              <li key={index} className="pl-1">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="w-full text-left text-sm leading-relaxed text-zinc-400 sm:w-[90%] sm:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="group flex w-full items-center justify-start px-0 font-mono text-xs text-zinc-300 sm:items-start sm:justify-normal sm:px-0 sm:text-sm md:text-base">
        {technologies}
      </div>
    </div>
  );
}
export function Company({
  title,
  link,
  description,
}: {
  title: string;
  link: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-6 text-left text-4xl text-zinc-300 sm:text-6xl">
        <a href={link} target="_blank" className="flex items-center gap-2">
          {title}
          <ArrowUpRight className="size-6 -translate-y-2 text-zinc-500 opacity-50" />
        </a>
      </h2>
      {description && (
        <p className="text-md mb-6 leading-relaxed text-zinc-400 sm:w-[90%]">
          {description}
        </p>
      )}
    </div>
  );
}

export function Certificate({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <div className="py-4 pl-0">
      <div className="flex flex-col items-start space-y-2 px-0 py-1 sm:items-start sm:px-0">
        <h4 className="text-left text-base text-zinc-300 sm:text-lg">
          {title}
        </h4>
        <p className="w-full text-left text-sm leading-relaxed text-zinc-400 sm:w-[90%] sm:text-base">
          {description}
        </p>
      </div>
      <div className="group flex w-full items-center justify-start px-0 text-xs text-zinc-300 sm:items-start sm:justify-normal sm:px-0 sm:text-sm md:text-base">
        {date}
      </div>
    </div>
  );
}
