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

    const welcomeHeight =
      content.firstElementChild?.getBoundingClientRect().height ?? 0;
    let scrollPosition = 0;
    content.style.transform = `translateY(${-scrollPosition}px)`;

    let ticking = false;

    const updatePosition = () => {
      if (!container || !content) return;
      const { height } = content.getBoundingClientRect();
      const contentHeight = height - welcomeHeight; // Total height minus one Welcome section

      // Normalize scroll position
      if (scrollPosition < 0) {
        scrollPosition = contentHeight + (scrollPosition % contentHeight);
      } else if (scrollPosition > contentHeight) {
        scrollPosition = scrollPosition % contentHeight;
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
        <Section title="About" description="About me" />
        <Section title="Projects" description="Projects I've worked on" />
        <Section title="Contact" description="Contact me" />
        <Welcome />
      </div>
    </main>
  );
}
