import { useEffect, useLayoutEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
} from "~/lib/cv-data";

function WelcomeSection() {
  return (
    <section
      data-section="welcome"
      className="border-rule bg-surface flex min-h-[65vh] flex-col justify-center border-t px-6 pt-16 pb-14 text-center md:px-12 md:text-left"
    >
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      <div className="mb-10">
        <div className="text-bright font-mono text-[5.5rem] leading-[0.95] font-bold tracking-[0.02em]">
          Paul Jasper
        </div>
        <div className="bg-rule mx-auto mt-6 h-[2px] w-12 md:mx-0" />
      </div>
      <div className="text-muted mb-2 text-[0.9rem] tracking-[0.05em]">
        Solutions Architect, Full-Stack Engineer and Design Thinker
      </div>
      <div className="text-dim flex items-center justify-center gap-[0.4rem] text-[0.82rem] md:justify-start">
        <span className="relative -top-[0.15rem] text-[1.3rem]">▾</span>
        Oldenburg, Germany
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section data-section="experience" className="border-edge border-t p-12">
      <div className="text-dim mb-8 text-xs tracking-[0.15em] uppercase">
        — Experience
      </div>
      {experienceSteps.map((step) => (
        <div key={step.company} className="mb-10">
          <div className="mb-6 flex items-baseline gap-2">
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bright text-[1.05rem] font-medium no-underline"
            >
              {step.company}
            </a>
            <span className="text-subtle text-[0.8rem]">↗</span>
          </div>
          {step.positions.map((pos) => (
            <div key={pos.title} className="mb-6">
              <div className="mb-3 flex items-baseline justify-between">
                <span className="text-heading text-[0.95rem]">{pos.title}</span>
                <span className="text-muted text-[0.82rem]">{pos.date}</span>
              </div>
              {pos.projects.map((proj) => (
                <div
                  key={proj.title}
                  className="border-edge mb-4 border-l pl-4"
                >
                  <div className="text-sub mb-2 text-[0.92rem]">
                    {proj.title}
                  </div>
                  {typeof proj.description === "string" ? (
                    <p className="text-body mb-2 text-[0.9rem] leading-[1.7]">
                      {proj.description}
                    </p>
                  ) : (
                    <ul className="mb-2 list-none p-0">
                      {proj.description.map((d: string) => (
                        <li
                          key={d}
                          className="text-body relative mb-[0.3rem] pl-3 text-[0.9rem] leading-[1.7]"
                        >
                          <span className="text-subtle absolute left-0">·</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="text-muted mt-1 font-mono text-[0.78rem] italic">
                    {proj.technologies}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

function ProjectsSection() {
  return (
    <section data-section="projects" className="border-edge border-t p-12">
      <div className="text-dim mb-8 text-xs tracking-[0.15em] uppercase">
        — Side Projects
      </div>
      {sideProjects.map((proj) => (
        <div key={proj.title} className="mb-10">
          <div className="mb-4 flex items-baseline gap-2">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bright text-[1.05rem] font-medium no-underline"
            >
              {proj.title}
            </a>
            <span className="text-subtle text-[0.8rem]">↗</span>
          </div>
          {Array.isArray(proj.description) ? (
            proj.description.map((d: string) => (
              <p key={d} className="text-body mb-1 text-[0.9rem] leading-[1.7]">
                {d}
              </p>
            ))
          ) : (
            <p className="text-body text-[0.9rem] leading-[1.7]">
              {proj.description}
            </p>
          )}
          <div className="text-muted mt-2 text-[0.78rem] italic">
            {proj.technologies}
          </div>
        </div>
      ))}
    </section>
  );
}

function CertificationsSection() {
  return (
    <section
      data-section="certifications"
      className="border-edge border-t p-12"
    >
      <div className="text-dim mb-8 text-xs tracking-[0.15em] uppercase">
        — Certifications
      </div>
      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="border-card flex items-baseline justify-between border-b pb-3"
          >
            <div>
              <div className="text-sub mb-[0.15rem] text-[0.95rem]">
                {cert.title}
              </div>
              <div className="text-dim text-[0.82rem]">{cert.description}</div>
            </div>
            <div className="text-muted ml-4 shrink-0 text-[0.82rem]">
              {cert.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section data-section="education" className="border-edge border-t p-12">
      <div className="text-dim mb-8 text-xs tracking-[0.15em] uppercase">
        — Education
      </div>
      {educationSteps.map((step) => (
        <div key={step.company} className="mb-8">
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-bright mb-2 block text-base font-medium no-underline"
          >
            {step.company}
          </a>
          <p className="text-body mb-4 text-[0.9rem] leading-[1.7]">
            {step.description}
          </p>
          {step.positions.map((pos) => (
            <div key={pos.title} className="mb-2 flex justify-between">
              <span className="text-heading text-[0.92rem]">{pos.title}</span>
              <span className="text-muted text-[0.82rem]">{pos.date}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let cycleHeight = 0;
    let cycleOffset = 0;

    const calculateMetrics = () => {
      const children = Array.from(content.children);
      const third = Math.floor(children.length / 3);
      if (third === 0) return;
      const firstOriginal = children[0] as HTMLElement;
      const firstDuplicate = children[third] as HTMLElement;
      const firstRect = firstOriginal.getBoundingClientRect();
      const duplicateRect = firstDuplicate.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      cycleHeight = Math.abs(duplicateRect.top - firstRect.top);
      cycleOffset =
        container.scrollTop + (duplicateRect.top - containerRect.top);
    };

    const handleScroll = () => {
      if (container.scrollTop < 5) {
        container.scrollTop += cycleHeight;
      } else if (container.scrollTop >= cycleHeight * 2 - 5) {
        container.scrollTop -= cycleHeight;
      }
    };

    calculateMetrics();

    const savedDelta = sessionStorage.getItem("v1-scroll-delta");
    if (cycleHeight > 0) {
      container.scrollTop = savedDelta
        ? cycleOffset + parseFloat(savedDelta)
        : cycleOffset;
    }

    const saveScroll = () => {
      if (cycleHeight > 0) {
        const delta = container.scrollTop - cycleOffset;
        sessionStorage.setItem("v1-scroll-delta", String(delta));
        sessionStorage.setItem("v1-scroll-top", String(container.scrollTop));
      }
    };
    container.addEventListener("scroll", saveScroll, { passive: true });

    const ro = new ResizeObserver(() => {
      calculateMetrics();
      if (container.scrollTop === 0 && cycleHeight > 0)
        container.scrollTop = cycleHeight;
    });
    ro.observe(content);

    const handleWindowResize = () => calculateMetrics();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("scroll", saveScroll);
      window.removeEventListener("resize", handleWindowResize);
      ro.disconnect();
    };
  }, []);

  const cycle = (
    <>
      <WelcomeSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
    </>
  );

  return (
    <div
      id="v1-scroll"
      ref={containerRef}
      className="h-dvh flex-1 overflow-y-auto [scrollbar-width:none]"
    >
      <style>{`#v1-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div ref={contentRef} className="flex flex-col">
        {cycle}
        {cycle}
        {cycle}
      </div>
    </div>
  );
}
