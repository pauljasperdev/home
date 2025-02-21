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
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="group flex h-96 flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
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
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden group-hover:flex" />
        <CarouselNext className="hidden group-hover:flex" />
      </Carousel>
    </div>
  );
};

export default Section;
