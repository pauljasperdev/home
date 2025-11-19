export type ProjectType = {
  title: string;
  description: string;
  technologies: string;
};

export type PositionType = {
  title: string;
  date: string;
  projects: ProjectType[];
};
export type StepsType = {
  company: string;
  link: string;
  positions: PositionType[];
}[];

export type CertificateType = {
  title: string;
  description: string;
  date: string;
};

export function Section({
  title,
  description,
  date,
  content,
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  date: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[70vh] w-full flex-col gap-4 pb-[200px]">
      <div className="flex flex-col items-center space-y-2 px-8 sm:items-start sm:px-0">
        <h2 className="py-4 text-left text-4xl text-zinc-300 sm:text-6xl md:text-8xl">
          {title}
        </h2>
        <p className="text-md leading-relaxed text-zinc-400 sm:w-[90%]">
          {description}
        </p>
        <p className="text-md font-extralight leading-relaxed text-zinc-400">
          {date}
        </p>
      </div>
      <div className="group flex w-full items-center justify-center sm:items-start sm:justify-normal">
        {content}
      </div>
    </div>
  );
}

export function Title({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex w-full flex-col justify-between">
      <h3 className="text-2xl text-zinc-300 sm:text-4xl">{title}</h3>
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
}: {
  title: string;
  description: string;
  technologies: string;
}) {
  return (
    <div className="py-4 pl-0">
      <div className="flex flex-col items-center space-y-2 px-4 py-1 sm:items-start sm:px-0">
        <h4 className="text-left text-base text-zinc-300 sm:text-lg">
          {title}
        </h4>
        <p className="w-full text-sm leading-relaxed text-zinc-400 sm:w-[90%] sm:text-base">
          {description}
        </p>
      </div>
      <div className="group flex w-full items-center justify-start px-4 font-mono text-xs text-zinc-300 sm:items-start sm:justify-normal sm:px-0 sm:text-sm md:text-base">
        {technologies}
      </div>
    </div>
  );
}
export function Company({ title, link }: { title: string; link: string }) {
  return (
    <div className="mb-8">
      <h2 className="mb-6 text-left text-2xl text-zinc-300 sm:text-6xl">
        <a href={link} target="_blank">
          {title}
        </a>
      </h2>
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
      <div className="flex flex-col items-center space-y-2 px-4 py-1 sm:items-start sm:px-0">
        <h4 className="text-left text-base text-zinc-300 sm:text-lg">
          {title}
        </h4>
        <p className="w-full text-sm leading-relaxed text-zinc-400 sm:w-[90%] sm:text-base">
          {description}
        </p>
      </div>
      <div className="group flex w-full items-center justify-start px-4 text-xs text-zinc-300 sm:items-start sm:justify-normal sm:px-0 sm:text-sm md:text-base">
        {date}
      </div>
    </div>
  );
}
