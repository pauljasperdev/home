"use client";

import Welcome from "./_components/welcome";
import { useEffect, useRef } from "react";
import Experience from "./_components/experience";
import Education, { Certifications } from "./_components/education";

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

    const wheelListenerOptions: AddEventListenerOptions = { passive: true };
    const touchStartListenerOptions: AddEventListenerOptions = {
      passive: true,
    };
    const touchMoveListenerOptions: AddEventListenerOptions = {
      passive: false,
    };

    const handleWheel: EventListener = (event) => {
      const wheelEvent = event as WheelEvent;
      scrollPosition += wheelEvent.deltaY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    let lastTouchY = 0;
    const handleTouchStart: EventListener = (event) => {
      const touchEvent = event as TouchEvent;
      lastTouchY = touchEvent.touches[0]?.clientY ?? 0;
    };
    const handleTouchMove: EventListener = (event) => {
      const touchEvent = event as TouchEvent;
      const currentY = touchEvent.touches[0]?.clientY ?? 0;
      const dy = lastTouchY - currentY; // match wheel: positive dy scrolls down
      lastTouchY = currentY;
      scrollPosition += dy;
      touchEvent.preventDefault();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateTransform);
      }
    };

    container.addEventListener("wheel", handleWheel, wheelListenerOptions);
    container.addEventListener(
      "touchstart",
      handleTouchStart,
      touchStartListenerOptions,
    );
    container.addEventListener(
      "touchmove",
      handleTouchMove,
      touchMoveListenerOptions,
    );

    const ro = new ResizeObserver(() => {
      recalcHeights();
    });
    ro.observe(content);

    const handleWindowResize = () => recalcHeights();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      container.removeEventListener("wheel", handleWheel, wheelListenerOptions);
      container.removeEventListener(
        "touchstart",
        handleTouchStart,
        touchStartListenerOptions,
      );
      container.removeEventListener(
        "touchmove",
        handleTouchMove,
        touchMoveListenerOptions,
      );
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
        <Education />
        <Certifications />

        {/* Cycle 2 (duplicate) */}
        <Welcome />
        <Experience />
        <Education />
        <Certifications />
      </div>
    </main>
  );
}
