import { educationSteps, certifications } from "~/lib/cv-data";
import { Certificate, Project, Section, Title } from "./section";

export default function Education() {
  return (
    <Section
      title={"Education"}
      description={<></>}
      content={
        <div className="flex min-h-[70vh] w-full max-w-full flex-col sm:max-w-[90%]">
          {educationSteps.map((company) => (
            <div key={company.company} className="mb-8">
              {company.positions.map((position) => (
                <div key={position.title} className="mb-6">
                  <Title
                    title={position.title}
                    date={position.date}
                    company={company.company}
                    companyLink={company.link}
                  />
                  {position.projects.map((project) => (
                    <Project
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
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
}

export function Certifications() {
  return (
    <Section
      title={"Certifications"}
      description={<></>}
      content={
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {certifications.map((certification) => (
            <Certificate
              key={certification.title}
              title={certification.title}
              description={certification.description}
              date={certification.date}
            />
          ))}
        </div>
      }
    />
  );
}
