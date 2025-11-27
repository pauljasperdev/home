"use client";

import Welcome from "./_components/welcome";
import { useEffect, useRef } from "react";
import Experience from "./_components/experience";
import Education, { Certifications } from "./_components/education";
import Projects from "./_components/projects";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let cycleHeight = 0;

    const getCycleHeight = () => {
      const children = Array.from(content.children);
      const third = Math.floor(children.length / 3);
      if (third === 0) return 0;

      // Measure distance between the first original item and its duplicate
      // This accounts for all heights, margins, and gaps automatically
      const firstOriginal = children[0] as HTMLElement;
      const firstDuplicate = children[third] as HTMLElement;

      return Math.abs(
        firstDuplicate.getBoundingClientRect().top -
          firstOriginal.getBoundingClientRect().top,
      );
    };

    const handleScroll = () => {
      // If scrolled to the top (start of Cycle 1), jump to start of Cycle 2
      if (container.scrollTop < 5) {
        container.scrollTop += cycleHeight;
      }
      // If scrolled to the start of Cycle 3, jump back to start of Cycle 2
      else if (container.scrollTop >= cycleHeight * 2 - 5) {
        container.scrollTop -= cycleHeight;
      }
    };

    const recalcHeights = () => {
      cycleHeight = getCycleHeight();
    };

    // Initial measurement
    recalcHeights();

    // Start in the middle cycle to allow upward scrolling
    if (cycleHeight > 0) {
      container.scrollTop = cycleHeight;
    }

    const ro = new ResizeObserver(() => {
      recalcHeights();
      // Adjust scroll if we were at the top (which would block upward scroll)
      if (container.scrollTop === 0 && cycleHeight > 0) {
        container.scrollTop = cycleHeight;
      }
    });
    ro.observe(content);

    const handleWindowResize = () => recalcHeights();

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
      ro.disconnect();
    };
  }, []);

  return (
    <main ref={containerRef} className="infinite-scroll">
      <div
        ref={contentRef}
        className="content-block gap-24 p-8 sm:gap-48 sm:p-24 md:gap-96 md:p-56"
      >
        {/* Cycle 1 */}
        <Welcome />
        <Experience />
        <Certifications />
        <Education />
        <Projects />

        {/* Cycle 2 (duplicate) */}
        <Welcome />
        <Experience />
        <Certifications />
        <Education />
        <Projects />

        {/* Cycle 3 (duplicate) */}
        <Welcome />
        <Experience />
        <Certifications />
        <Education />
        <Projects />
      </div>
    </main>
  );
}
