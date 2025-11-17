import Section from "./section";

const Inpro = () => {
  type Project = {
    title: string;
    description: string;
    technologies: string;
  };

  type Position = { title: string; date: string; projects: Project[] };
  type WorkExperience = {
    company: string;
    link: string;
    positions: Position[];
  }[];

  const inproProjects: WorkExperience = [
    {
      company: "University of Applied Science Münster",
      link: "https://www.fh-muenster.de/de/studiengaenge/chemical-engineering-master",
      positions: [
        {
          title: "Master of Science",
          date: "09/2017 - 04/2020",
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
          title: "Bachelor of Science",
          date: "09/2013 - 08/2017",
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
        <div className="flex min-h-[70vh] w-full max-w-[90%] flex-col">
          {inproProjects.map((company) => (
            <div key={company.company} className="mb-8">
              <h2 className="mb-6 text-left text-4xl text-zinc-300">
                <a href={company.link} target="_blank">
                  {company.company}
                </a>
              </h2>
              {company.positions.map((position) => (
                <div key={position.title} className="mb-6">
                  <h3 className="mb-4 text-3xl text-zinc-300">
                    <div className="flex w-full flex-col justify-between">
                      <span className="text-2xl">{position.title}</span>
                      <span className="text-base font-extralight leading-relaxed text-zinc-300">
                        {position.date}
                      </span>
                    </div>
                  </h3>
                  {position.projects.map((project) => (
                    <div key={project.title} className="py-4 pl-4">
                      <div className="flex flex-col items-center space-y-2 px-8 py-1 sm:items-start sm:px-0">
                        <h4 className="text-left text-lg text-zinc-300">
                          {project.title}
                        </h4>
                        <p className="text-base leading-relaxed text-zinc-400 sm:w-[90%]">
                          {project.description}
                        </p>
                      </div>
                      <div className="group flex w-full items-center justify-center font-mono text-base text-zinc-300 sm:items-start sm:justify-normal">
                        {project.technologies}
                      </div>
                    </div>
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

export default Inpro;
