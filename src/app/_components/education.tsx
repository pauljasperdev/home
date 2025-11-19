import {
  Certificate,
  CertificateType,
  Company,
  Project,
  Section,
  StepsType,
  Title,
} from "./section";

export default function Education() {
  const educationSteps: StepsType = [
    {
      company: "University of Applied Science Münster",
      link: "https://www.fh-muenster.de/de/studiengaenge/chemical-engineering-master",
      positions: [
        {
          title: "M.Sc. Chemical Engineering",
          date: "2016 - 2020",
          projects: [
            {
              title: "Master Thesis Student",
              description:
                "At University of Berlin, I developed and implemented a viscoelastic fluid model in OpenFOAM's C++ codebase to simulate free-rising bubbles. \
                Modified the bubbleInterTrackFoam solver by implementing an extra stress tensor and adapting the viscoelasticModel library. \
                Performed pseudo-2D and 3D simulations to validate the implementation and optimize numerical parameters. \
                I created visualizations and graphs with Python.",
              technologies: "C++, OpenFOAM, Python, CFD, Numerical Simulation",
            },
            {
              title: "Research Trainee",
              description: "6 month traineeship at Universidad de Cadiz.",
              technologies: "Python, Ansys, CFD, Numerical Simulation",
            },
            {
              title: "Research Assistant",
              description: "At the University of Applied Science Münster.",
              technologies: "Python, MATLAB",
            },
          ],
        },
        {
          title: "B.Sc. Chemical Engineering",
          date: "2012 - 2015",
          projects: [],
        },
      ],
    },
  ];

  return (
    <Section
      title={"Education"}
      description={
        <>
          At inpro, a joint venture between Volkswagen and Siemens, I developed
          production software and prototypes for industrial applications. I
          worked on experimental projects with new technologies to assess their
          viability for deployment at scale. I worked as a Developer, Scrum
          Master, and Design Thinker.
        </>
      }
      date=""
      content={
        <div className="flex min-h-[70vh] w-full max-w-full flex-col sm:max-w-[90%]">
          {educationSteps.map((company) => (
            <div key={company.company} className="mb-8">
              <Company title={company.company} link={company.link} />
              {company.positions.map((position) => (
                <div key={position.title} className="mb-6">
                  <Title title={position.title} date={position.date} />
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
  const certifications: CertificateType[] = [
    {
      title: "AWS Certified Solutions Architect - Associate",
      description: "Amazon Web Services (AWS)",
      date: "2025",
    },
    {
      title: "Git Advanced Topics",
      description: "GROSSWEBER Groß, Weber & Partner",
      date: "2023",
    },
    {
      title: "Professional Scrum Master I",
      description: "Scrum.org",
      date: "2023",
    },
    {
      title: "Clean Code C++",
      description: "GROSSWEBER Groß, Weber & Partner",
      date: "2022",
    },
    {
      title: "Design Thinking Practitioner",
      description: "launchlabs Berlin",
      date: "2021",
    },
    {
      title: "Improving Deep Neural Networks",
      description: "Coursera",
      date: "2020",
    },
    {
      title: "Neural Networks and Deep Learning",
      description: "Coursera",
      date: "2020",
    },
    {
      title: "Machine Learning",
      description: "Coursera",
      date: "2020",
    },
  ];

  return (
    <Section
      title={"Certifications"}
      description={<></>}
      date=""
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
