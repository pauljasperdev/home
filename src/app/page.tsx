"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Welcome from "./_components/welcome";
import Section from "./_components/section";
import { useEffect, useRef, useState } from "react";
import Inpro from "./_components/inpro";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const [welcomeLeft, setWelcomeLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // Get the height of one complete cycle (all components before the repeated Welcome)
    const cycleHeight = Array.from(content.children)
      .slice(0, -1) // Exclude the last Welcome component
      .reduce((total, element) => {
        return total + element.getBoundingClientRect().height;
      }, 0);

    let scrollPosition = 0;
    content.style.transform = `translateY(${-scrollPosition}px)`;

    let ticking = false;

    const updatePosition = () => {
      if (!container || !content) return;

      // Normalize scroll position using cycleHeight instead of contentHeight
      if (scrollPosition < 0) {
        scrollPosition = cycleHeight + (scrollPosition % cycleHeight);
      } else if (scrollPosition > cycleHeight) {
        scrollPosition = scrollPosition % cycleHeight;
      }

      content.style.transform = `translateY(${-scrollPosition}px)`;
      ticking = false;
    };

    const handleWheel = (e: WheelEvent) => {
      scrollPosition += e.deltaY;

      if (!ticking) {
        requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  useEffect(() => {
    // Add welcome position calculation
    const updateWelcomePosition = () => {
      if (welcomeRef.current) {
        const rect = welcomeRef.current.getBoundingClientRect();
        setWelcomeLeft(rect.left);
      }
    };

    updateWelcomePosition();
    window.addEventListener("resize", updateWelcomePosition);
    return () => window.removeEventListener("resize", updateWelcomePosition);
  }, []);

  return (
    <main ref={containerRef} className="infinite-scroll">
      <div ref={contentRef} className="content-block">
        <Welcome ref={welcomeRef} />
        <div
          style={{ paddingLeft: `${welcomeLeft}px` }}
          className="flex flex-col gap-56 pr-28"
        >
          <Inpro />
          <Section
            title="Indie Hacking"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum consectetur amet blanditiis dolorem quo expedita accusamus corporis deserunt, repudiandae perspiciatis optio dignissimos."
            date="2018 - 2020"
            content={
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{1}</span>
                </CardContent>
              </Card>
            }
          />

          <Section
            title="University"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia."
            date="2020 - Present"
            content={
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">
                    {"masterthesis"}
                  </span>
                </CardContent>
              </Card>
            }
          />
        </div>
        <Welcome />
      </div>
    </main>
  );
}
