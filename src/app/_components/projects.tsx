import { sideProjects } from "~/lib/cv-data";
import { Project, Section } from "./section";

export default function Projects() {
  return (
    <Section
      title={"Side Projects"}
      content={
        <div className="flex min-h-[70vh] w-full max-w-full flex-col sm:max-w-[90%]">
          {sideProjects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      }
    />
  );
}
