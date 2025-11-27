import { experienceSteps } from "~/lib/cv-data";
import { Company, Project, Section, Title } from "./section";

const Experience = () => {
  return (
    <Section
      title={<>Experience</>}
      content={
        <div className="flex w-full max-w-full flex-col sm:max-w-[90%]">
          {experienceSteps.map((company) => (
            <div key={company.company} className="mb-8">
              <Company
                title={company.company}
                link={company.link}
                description={company.description}
              />
              {company.positions.map((position) => (
                <div key={position.title} className="mb-6">
                  <Title title={position.title} date={position.date} />
                  {position.projects.map((project) => (
                    <Project
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      link={project.link}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Experience;
