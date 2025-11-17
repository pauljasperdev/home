import Section from "./section";

const Inpro = () => {
  type Project = {
    title: string;
    description: string;
    technologies: string;
  };
  type WorkExperience = { title: string; begin: string; projects: Project[] }[];
  const inproProjects: WorkExperience = [
    {
      title: "Senion Solutions Architect & Full Stack Engineer",
      begin: "01/2025",
      projects: [
        {
          title: "Rule Mining",
          description:
            "Led development of a web app to extract technical rules from unstructured documents using Next.js and Python. \
            Made key technical decisions and designed the system architecture. \
            Built serverless infrastructure on AWS with SST. \
            Set up automated testing and deployment pipelines in GitLab. \
            Conducted code reviews and mentored a team of 2 developers. \
            Worked closely with the non-technical project manager to ensure the project vision was met.",
          technologies:
            "Nextjs, TypeScript, Python, AWS, SST, SQL, Drizzle, tRPC, TanStack Query, better-auth, GenAI",
        },
      ],
    },
    {
      title: "Developer",
      begin: "09/2022",
      projects: [
        {
          title: "Factory Chatbot",
          description:
            "Built a shop-floor chatbot with Nuxt frontend and Python backend with RAG. \
            Created a data ingestion pipeline to index and embed documents for retrieval. \
            Developed an internal web app for testing and benchmarking the RAG system. \
            Deployed infrastructure to AWS with CDK and set up CI/CD pipelines in GitLab.",
          technologies:
            "Nuxt, TypeScript, Python, Langchain, AWS, CDK, SQL, Drizzle, tRPC, better-auth, GenAI, RAG",
        },
        {
          title: "Text2Tech",
          description:
            "Built the frontend for a technology monitoring demonstrator that uses deep learning to extract information from automotive industry texts. \
            The system automatically identifies technologies, companies, and their relationships from German and English sources. \
            This was part of a research project funded by the German Federal Ministry of Education and Research.",
          technologies: "React, TypeScript, GenAI",
        },
      ],
    },
    {
      title: "Junior Developer",
      begin: "08/2020",
      projects: [
        {
          title: "Virtual Process Chain",
          description:
            "Developed a C++ desktop application for data transfer between CAD/CAE systems. \
            Created Python bindings for the library and integrated computer vision for scan mapping. \
            Served as Scrum Master for the development team.",
          technologies:
            "C++, Qt, cmake, Python, Mesh & Scan Data, Scrum Master",
        },
        {
          title: "hypro",
          description:
            "Built a Cadmould data input module for importing injection molding simulation data. \
            Developed data mapping to transfer fiber orientation information from Cadmould simulations to Abaqus mesh. \
            Created result evaluation in Python. \
            Attended project meetings to present progress and findings. \
            Served as Scrum Master for the development team.",
          technologies: "C++, Python, Qt, cmake, Scrum Master",
        },
      ],
    },
  ];

  return (
    <Section
      title={
        <>
          <a href="https://www.inpro.de/" target="_blank">
            inpro
          </a>
        </>
      }
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
          {inproProjects.map((section) => (
            <div key={section.title} className="mb-6">
              <h2 className="mb-4 text-2xl text-zinc-300">
                <div className="flex w-full flex-col justify-between">
                  <span>{section.title}</span>
                  <p className="text-sm font-extralight leading-relaxed text-zinc-300">
                    {"since " + section.begin}
                  </p>
                </div>
              </h2>
              {section.projects.map((project) => (
                <div key={project.title} className="py-4 pl-4">
                  <div className="flex flex-col items-center space-y-2 px-8 py-1 sm:items-start sm:px-0">
                    <h3 className="text-left text-lg text-zinc-300">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 sm:w-[90%]">
                      {project.description}
                    </p>
                  </div>
                  <div className="group flex w-full items-center justify-center font-mono text-sm text-zinc-300 sm:items-start sm:justify-normal">
                    {project.technologies}
                  </div>
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
