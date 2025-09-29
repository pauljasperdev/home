import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Section from "./section";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardTitle } from "~/components/ui/card";

const Inpro = () => {
  const inproProjects = [
    {
      title: "Rule Mining",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
      technologies: "Nextjs, TypeScript, Python, AWS, SST, SQL, GenAI",
      date: "since 01/2025",
    },
    {
      title: "Factory Chatbot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
      technologies: "Nuxt, TypeScript, Python, Langchain, AWS, CDK, SQL, GenAI",
      date: "01/2024 - 12/2024",
    },
    {
      title: "Text2Tech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
      technologies: "React, TypeScript",
      date: "since 10/2023",
    },
    {
      title: "Virtual Process Chain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
      technologies: "C++, Qt, cmake",
      date: "08/2020 - 10/2023",
    },
    {
      title: "hypro",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
      date: "08/2020 - 07/2022",
      technologies: "C++, Python, Qt, cmake",
    },
  ];

  return (
    <Section
      title={
        <>
          Software Engineer at{" "}
          <a href="https://www.inpro.de/" target="_blank">
            inpro
          </a>
        </>
      }
      description={
        <>
          At inpro, a joint venture between Volkswagen and Siemens, the focus is
          on building industrial software solutions. The work revolves around
          rapidly developing PoCs and prototypes to test and iterate on ideas
          quickly. I was part of interdisciplinary teams where being proficient
          across the stack was essential, from frontend to backend, and even
          down to maintaining and scaling the infrastructure.
        </>
      }
      date="since 08/2020"
      content={
        <div className="flex min-h-[70vh] w-full max-w-[70%] flex-col">
          {inproProjects.map((project) => (
            <div className="py-4">
              <div className="flex flex-col items-center space-y-2 px-8 sm:items-start sm:px-0">
                <h3 className="text-left text-xl text-zinc-300">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400 sm:w-[90%]">
                  {project.description}
                </p>
              </div>
              <div className="group flex w-full items-center justify-center font-extralight text-zinc-400 sm:items-start sm:justify-normal">
                {project.technologies}
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Inpro;
