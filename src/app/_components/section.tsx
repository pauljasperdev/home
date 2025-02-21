import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const Section = ({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <div className="flex h-96 w-full flex-col">
      <div className="flex flex-col items-center space-y-2 px-8 sm:items-start sm:px-[7%]">
        <h2 className="text-left text-2xl">{title}</h2>
        <p className="text-sm leading-relaxed text-zinc-300 sm:w-2/3">
          {description}
        </p>
        <p className="text-sm font-extralight leading-relaxed text-zinc-400">
          {date}
        </p>
      </div>
      <div className="group flex w-full items-center justify-center">
        <Carousel
          className="w-full max-w-[90%]"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:group-hover:flex" />
          <CarouselNext className="hidden sm:group-hover:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default Section;
