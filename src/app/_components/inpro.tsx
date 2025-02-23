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
    },
    {
      title: "Factory Chatbot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
    },
    {
      title: "Text2Tech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
    },
    {
      title: "Virtual Process Chain",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
    },
    {
      title: "hypro",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia.",
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
        <Carousel
          className="w-full max-w-[90%]"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {inproProjects.map((project, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardTitle className="p-6">{project.title}</CardTitle>

                  <CardContent className="text-sm font-extralight">
                    {project.description}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
      }
    />
  );
};

export default Inpro;
