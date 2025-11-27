import {
  type StepsType,
  type CertificateType,
  type SideProjectType,
} from "~/app/_components/section";

export const experienceSteps: StepsType = [
  {
    company: "inpro",
    link: "https://www.inpro.de/",
    description:
      "At inpro, a joint venture between Volkswagen and Siemens, I developed production software and prototypes for industrial applications. I worked on experimental projects with new technologies to assess their viability for deployment at scale. I worked as a Developer, Scrum Master, and Design Thinker.",
    positions: [
      {
        title: "Senior Solutions Architect & Full Stack Engineer",
        date: "since 01/2025",
        projects: [
          {
            title: "Rule Mining",
            description:
              "Led development of a web app to extract technical rules from unstructured documents using Next.js and Python. Made key technical decisions and designed the system architecture. Built serverless infrastructure on AWS with SST. Set up automated testing and deployment pipelines in GitLab. Conducted code reviews and mentored a team of 2 developers. Worked closely with the non-technical project manager to ensure the project vision was met.",
            technologies:
              "Nextjs, TypeScript, Python, AWS, SST, SQL, Drizzle, tRPC, TanStack Query, better-auth, Docker, GenAI",
          },
        ],
      },
      {
        title: "Developer",
        date: "09/2022 - 12/2024",
        projects: [
          {
            title: "Factory Chatbot",
            description:
              "Built a shop-floor chatbot with Nuxt frontend and Python backend with RAG. Created a data ingestion pipeline to index and embed documents for retrieval. Developed an internal web app for testing and benchmarking the RAG system. Deployed infrastructure to AWS with CDK and set up CI/CD pipelines in GitLab.",
            technologies:
              "Nuxt, TypeScript, Python, Langchain, AWS, CDK, SQL, Drizzle, tRPC, better-auth, Docker, GenAI, RAG",
          },
          {
            title: "Text2Tech",
            link: "https://www.text2tech.de/",
            description:
              "Built the frontend for a technology monitoring demonstrator that uses deep learning to extract information from automotive industry texts. The system automatically identifies technologies, companies, and their relationships from German and English sources. This was part of a research project funded by the German Federal Ministry of Education and Research.",
            technologies: "React, TypeScript, Docker, GenAI",
          },
        ],
      },
      {
        title: "Junior Developer",
        date: "08/2020 - 08/2022",
        projects: [
          {
            title: "Virtual Process Chain",
            description:
              "Developed a C++ desktop application for data transfer between CAD/CAE systems. Created Python bindings for the library and integrated computer vision for scan mapping. Served as Scrum Master for the development team.",
            technologies:
              "C++, Qt, cmake, Python, Mesh & Scan Data, Scrum Master",
          },
          {
            title: "hypro",
            link: "https://edocs.tib.eu/files/e01fb24/1903522218.pdf",
            description:
              "Built a Cadmould data input module for importing injection molding simulation data. Developed data mapping to transfer fiber orientation information from Cadmould simulations to Abaqus mesh. Created result evaluation in Python. Attended project meetings to present progress and findings. Served as Scrum Master for the development team.",
            technologies: "C++, Python, Qt, cmake, Scrum Master",
          },
        ],
      },
    ],
  },
];

export const educationSteps: StepsType = [
  {
    company: "University of Applied Science Münster",
    link: "https://www.fh-muenster.de/de/studiengaenge/chemical-engineering-master",
    description:
      "I studied Chemical Engineering at the University of Applied Science Münster. During my master studies focused on simulation and programming. During my master thesis I extended a CFD solver to simulate viscoelastic fluids.",
    positions: [
      {
        title: "M.Sc. Chemical Engineering",
        date: "2016 - 2020",
        projects: [
          {
            title: "Master Thesis Student",
            description:
              "At University of Berlin, I developed and implemented a viscoelastic fluid model in OpenFOAM's C++ codebase to simulate free-rising bubbles. Modified the bubbleInterTrackFoam solver by implementing an extra stress tensor and adapting the viscoelasticModel library. Performed pseudo-2D and 3D simulations to validate the implementation and optimize numerical parameters. I created visualizations and graphs with Python.",
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

export const certifications: CertificateType[] = [
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

export const professionalSummary =
  "Experienced Solutions Architect and Full Stack Engineer with a strong background in software development, cloud infrastructure (AWS), and industrial applications. Proven track record in leading technical teams, designing scalable architectures, and implementing innovative solutions using modern technologies like Next.js, Python, and Generative AI. Passionate about bridging the gap between complex technical requirements and business value.";

export const technicalSkills = {
  languages: "TypeScript, Python, C++, React, Next.js, Nuxt, Node.js, SQL.",
  cloud: "AWS (Solutions Architect Associate), SST, CDK, Docker, GitLab CI/CD.",
  dataAI: "GenAI, RAG, Langchain, Numerical Simulation, CFD.",
};

export const sideProjects: SideProjectType[] = [
  {
    title: "Real Estate Calculator iOS App",
    description:
      "Building an iOS app the simplfies real estate calculations. Making it more accessible to everyone.",
    technologies:
      "Expo, TypeScript, React Native, Hono, Drizzle, tRPC, TanStack Query, SST, Tailwind CSS, ",
    link: "https://github.com/pauljasperdev/immo",
  },
];

export const cvData = {
  experience: experienceSteps,
  education: educationSteps,
  certifications: certifications,
  professionalSummary,
  technicalSkills,
  sideProjects,
};
