import { useEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
} from "~/lib/cv-data";

// Color hierarchy — bright to dim
const C = {
  bright: "#f4f4f5", // names, primary headings
  heading: "#e4e4e7", // secondary headings, position titles
  sub: "#d4d4d8", // tertiary (project titles, cert titles)
  body: "#b4b4be", // descriptions, body text
  muted: "#a1a1aa", // dates, tech stack, subtitle
  dim: "#71717a", // section labels, nav labels
  subtle: "#52525b", // inactive nav, arrows, bullet dots
  bg: "#09090b",
  border: "#27272a",
  rule: "#3f3f46",
  cardBg: "#18181b",
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  color: C.dim,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "2rem",
};

function WelcomeSection() {
  return (
    <section
      data-section="welcome"
      style={{
        padding: "4rem 3rem 3.5rem",
        borderTop: `1px solid ${C.rule}`,
        backgroundColor: C.bg,
        minHeight: "65vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
      <div style={{ marginBottom: "2.5rem" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 700,
            fontSize: "5.5rem",
            color: C.bright,
            lineHeight: 0.95,
            letterSpacing: "0.02em",
          }}
        >
          Paul Jasper
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            width: "3rem",
            height: "2px",
            backgroundColor: C.rule,
          }}
        />
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          color: C.muted,
          letterSpacing: "0.05em",
          marginBottom: "0.5rem",
        }}
      >
        Solutions Architect, Full-Stack Engineer and Design Thinker
      </div>
      <div
        style={{
          fontSize: "0.82rem",
          color: C.dim,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{ fontSize: "1.3rem", position: "relative", top: "-0.15rem" }}
        >
          ▾
        </span>
        Oldenburg, Germany
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      data-section="experience"
      style={{ padding: "3rem", borderTop: `1px solid ${C.border}` }}
    >
      <div style={sectionLabelStyle}>— Experience</div>
      {experienceSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: C.bright,
                textDecoration: "none",
              }}
            >
              {step.company}
            </a>
            <span style={{ fontSize: "0.8rem", color: C.subtle }}>↗</span>
          </div>
          {step.positions.map((pos) => (
            <div key={pos.title} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: C.heading,
                  }}
                >
                  {pos.title}
                </span>
                <span style={{ fontSize: "0.82rem", color: C.muted }}>
                  {pos.date}
                </span>
              </div>
              {pos.projects.map((proj) => (
                <div
                  key={proj.title}
                  style={{
                    marginBottom: "1rem",
                    paddingLeft: "1rem",
                    borderLeft: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: C.sub,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {proj.title}
                  </div>
                  {typeof proj.description === "string" ? (
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: C.body,
                        marginBottom: "0.5rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {proj.description}
                    </p>
                  ) : (
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 0.5rem",
                      }}
                    >
                      {proj.description.map((d: string) => (
                        <li
                          key={d}
                          style={{
                            fontSize: "0.9rem",
                            color: C.body,
                            lineHeight: 1.7,
                            paddingLeft: "0.75rem",
                            position: "relative",
                            marginBottom: "0.3rem",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: C.subtle,
                            }}
                          >
                            ·
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: C.muted,
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontStyle: "italic",
                      marginTop: "0.25rem",
                    }}
                  >
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
    <section
      data-section="projects"
      style={{ padding: "3rem", borderTop: `1px solid ${C.border}` }}
    >
      <div style={sectionLabelStyle}>— Side Projects</div>
      {sideProjects.map((proj) => (
        <div key={proj.title} style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: C.bright,
                textDecoration: "none",
              }}
            >
              {proj.title}
            </a>
            <span style={{ fontSize: "0.8rem", color: C.subtle }}>↗</span>
          </div>
          {Array.isArray(proj.description) ? (
            proj.description.map((d: string) => (
              <p
                key={d}
                style={{
                  fontSize: "0.9rem",
                  color: C.body,
                  lineHeight: 1.7,
                  marginBottom: "0.25rem",
                }}
              >
                {d}
              </p>
            ))
          ) : (
            <p
              style={{
                fontSize: "0.9rem",
                color: C.body,
                lineHeight: 1.7,
              }}
            >
              {proj.description}
            </p>
          )}
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.78rem",
              color: C.muted,
              fontStyle: "italic",
            }}
          >
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
      style={{ padding: "3rem", borderTop: `1px solid ${C.border}` }}
    >
      <div style={sectionLabelStyle}>— Certifications</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: "0.75rem",
              borderBottom: `1px solid ${C.cardBg}`,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.95rem",
                  color: C.sub,
                  marginBottom: "0.15rem",
                }}
              >
                {cert.title}
              </div>
              <div style={{ fontSize: "0.82rem", color: C.dim }}>
                {cert.description}
              </div>
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: C.muted,
                flexShrink: 0,
                marginLeft: "1rem",
              }}
            >
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
    <section
      data-section="education"
      style={{ padding: "3rem", borderTop: `1px solid ${C.border}` }}
    >
      <div style={sectionLabelStyle}>— Education</div>
      {educationSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "2rem" }}>
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1rem",
              fontWeight: 500,
              color: C.bright,
              textDecoration: "none",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            {step.company}
          </a>
          <p
            style={{
              fontSize: "0.9rem",
              color: C.body,
              lineHeight: 1.7,
              marginBottom: "1rem",
            }}
          >
            {step.description}
          </p>
          {step.positions.map((pos) => (
            <div
              key={pos.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span style={{ fontSize: "0.92rem", color: C.heading }}>
                {pos.title}
              </span>
              <span style={{ fontSize: "0.82rem", color: C.muted }}>
                {pos.date}
              </span>
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

  useEffect(() => {
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
      style={{
        flex: 1,
        height: "100vh",
        overflowY: "auto",
        scrollbarWidth: "none",
      }}
    >
      <style>{`#v1-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div
        ref={contentRef}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {cycle}
        {cycle}
        {cycle}
      </div>
    </div>
  );
}
