"use client";
import Welcome from "./_components/welcome";
import Section from "./_components/section";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

  return (
    <main ref={containerRef} className="infinite-scroll">
      <div ref={contentRef} className="content-block">
        <Welcome />
        <Section
          title="About"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia."
          date="2012 - 2018"
        />
        <Section
          title="Projects"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum consectetur amet blanditiis dolorem quo expedita accusamus corporis deserunt, repudiandae perspiciatis optio dignissimos."
          date="2018 - 2020"
        />
        <Section
          title="Contact"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos dolores expedita voluptatibus nam repellendus minus temporibus accusantium, deserunt perspiciatis beatae adipisci mollitia."
          date="2020 - Present"
        />
        <Welcome />
      </div>
    </main>
  );
}
