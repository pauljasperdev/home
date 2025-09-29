"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import Welcome from "./_components/welcome";
import Section from "./_components/section";
import { useEffect, useRef } from "react";
import Inpro from "./_components/inpro";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let scrollPosition = 0;
    let cycleHeight = 0;
    let ticking = false;

    const getCycleHeight = () => {
      const children = Array.from(content.children);
      const half = Math.floor(children.length / 2);
      let total = 0;
      for (let i = 0; i < half; i++) {
        const el = children[i] as HTMLElement;
        total += el.getBoundingClientRect().height;
      }
      return total;
    };

    const updateTransform = () => {
      if (!content || cycleHeight <= 0) {
        ticking = false;
        return;
      }
      // Normalize into [0, cycleHeight)
      scrollPosition =
        ((scrollPosition % cycleHeight) + cycleHeight) % cycleHeight;
      content.style.transform = `translateY(${-scrollPosition}px)`;
      ticking = false;
    };

    const recalcHeights = () => {
      const prev = cycleHeight;
      const next = getCycleHeight();
      if (next <= 0) return;
      if (prev === 0) {
        cycleHeight = next;
      } else {
        const normalized = ((scrollPosition % prev) + prev) % prev;
        const ratio = normalized / prev;
        cycleHeight = next;
        scrollPosition = ratio * cycleHeight;
      }
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    // Initial measurement
    recalcHeights();

    const handleWheel = (e: WheelEvent) => {
      scrollPosition += e.deltaY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    let lastTouchY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? 0;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0]?.clientY ?? 0;
      const dy = lastTouchY - currentY; // match wheel: positive dy scrolls down
      lastTouchY = currentY;
      scrollPosition += dy;
      e.preventDefault();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: true });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    const ro = new ResizeObserver(() => {
      recalcHeights();
    });
    ro.observe(content);

    const handleWindowResize = () => recalcHeights();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      container.removeEventListener("wheel", handleWheel as any);
      container.removeEventListener("touchstart", handleTouchStart as any);
      container.removeEventListener("touchmove", handleTouchMove as any);
      window.removeEventListener("resize", handleWindowResize);
      ro.disconnect();
    };
  }, []);

  return (
    <main ref={containerRef} className="infinite-scroll">
      <div ref={contentRef} className="content-block gap-96 p-56">
        {/* Cycle 1 */}
        <Welcome />
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
                <span className="text-4xl font-semibold">{"masterthesis"}</span>
              </CardContent>
            </Card>
          }
        />

        {/* Cycle 2 (duplicate) */}
        <Welcome />
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
                <span className="text-4xl font-semibold">{"masterthesis"}</span>
              </CardContent>
            </Card>
          }
        />
      </div>
    </main>
  );
}
