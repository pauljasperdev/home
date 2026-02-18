import { useEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
  professionalSummary,
} from "~/lib/cv-data";

const sectionLabelStyle: React.CSSProperties = {
  fontSize: "0.65rem",
  color: "#71717a",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "2rem",
};

function LeftPanel() {
  return (
    <div
      style={{
        width: "42%",
        flexShrink: 0,
        height: "100vh",
        borderRight: "1px solid #27272a",
        padding: "4rem 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#09090b",
        position: "sticky",
        top: 0,
      }}
    >
      <div>
        <div
          style={{
            fontSize: "0.65rem",
            color: "#52525b",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          pauljasper.dev
        </div>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#f4f4f5",
            marginBottom: "0.75rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Paul
          <br />
          Jasper
        </h1>
        <div
          style={{
            fontSize: "0.82rem",
            color: "#71717a",
            marginBottom: "2.5rem",
            lineHeight: 1.5,
          }}
        >
          Senior Solutions Architect
          <br />& Full-Stack Engineer
        </div>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#71717a",
            lineHeight: 1.8,
            maxWidth: "380px",
          }}
        >
          {professionalSummary}
        </p>
      </div>

      <div>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { label: "Home", href: "/4" },
            { label: "Blog", href: "/4/blog" },
            { label: "CV", href: "/cv" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8rem",
                color: "#52525b",
                textDecoration: "none",
                display: "block",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/pauljasperdev" },
            { label: "Bluesky", href: "https://bsky.app" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                color: "#3f3f46",
                textDecoration: "none",
              }}
            >
              ↗ {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section
      style={{ padding: "4rem 3rem", borderBottom: "1px solid #27272a" }}
    >
      <div style={sectionLabelStyle}>Experience</div>
      {experienceSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "2.5rem" }}>
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "#f4f4f5",
              textDecoration: "none",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            {step.company} ↗
          </a>
          {step.positions.map((pos) => (
            <div key={pos.title} style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "#d4d4d8",
                    fontWeight: 600,
                  }}
                >
                  {pos.title}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#52525b",
                    fontFamily: "monospace",
                  }}
                >
                  {pos.date}
                </span>
              </div>
              {pos.projects.map((proj) => (
                <div
                  key={proj.title}
                  style={{
                    marginBottom: "1rem",
                    paddingLeft: "1rem",
                    borderLeft: "2px solid #27272a",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#a1a1aa",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {proj.title}
                  </div>
                  {typeof proj.description === "string" ? (
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#71717a",
                        lineHeight: 1.7,
                        marginBottom: "0.5rem",
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
                            fontSize: "0.75rem",
                            color: "#71717a",
                            lineHeight: 1.7,
                            marginBottom: "0.25rem",
                          }}
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#3f3f46",
                      fontFamily: "monospace",
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
      style={{ padding: "4rem 3rem", borderBottom: "1px solid #27272a" }}
    >
      <div style={sectionLabelStyle}>Side Projects</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {sideProjects.map((proj) => (
          <div
            key={proj.title}
            style={{
              padding: "1.5rem",
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "4px",
            }}
          >
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.9rem",
                fontWeight: 700,
                color: "#f4f4f5",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              {proj.title} ↗
            </a>
            {Array.isArray(proj.description) ? (
              proj.description.map((d: string) => (
                <p
                  key={d}
                  style={{
                    fontSize: "0.78rem",
                    color: "#71717a",
                    lineHeight: 1.6,
                    marginBottom: "0.25rem",
                  }}
                >
                  {d}
                </p>
              ))
            ) : (
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#71717a",
                  lineHeight: 1.6,
                  marginBottom: "0.25rem",
                }}
              >
                {proj.description}
              </p>
            )}
            <div
              style={{
                marginTop: "0.75rem",
                fontSize: "0.65rem",
                color: "#3f3f46",
                fontFamily: "monospace",
              }}
            >
              {proj.technologies}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section
      style={{ padding: "4rem 3rem", borderBottom: "1px solid #27272a" }}
    >
      <div style={sectionLabelStyle}>Certifications</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid #18181b",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#d4d4d8",
                  marginBottom: "0.15rem",
                }}
              >
                {cert.title}
              </div>
              <div style={{ fontSize: "0.7rem", color: "#52525b" }}>
                {cert.description}
              </div>
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "#3f3f46",
                flexShrink: 0,
                marginLeft: "1rem",
                fontFamily: "monospace",
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
    <section style={{ padding: "4rem 3rem" }}>
      <div style={sectionLabelStyle}>Education</div>
      {educationSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "2rem" }}>
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "#f4f4f5",
              textDecoration: "none",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            {step.company}
          </a>
          <p
            style={{
              fontSize: "0.78rem",
              color: "#71717a",
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
              <span style={{ fontSize: "0.8rem", color: "#a1a1aa" }}>
                {pos.title}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#52525b",
                  fontFamily: "monospace",
                }}
              >
                {pos.date}
              </span>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default function V4Home() {
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
    if (cycleHeight > 0) container.scrollTop = cycleOffset;

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
      window.removeEventListener("resize", handleWindowResize);
      ro.disconnect();
    };
  }, []);

  const cycle = (
    <>
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#09090b",
      }}
    >
      <LeftPanel />
      <div
        ref={containerRef}
        style={{
          flex: 1,
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        <div
          ref={contentRef}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {cycle}
          {cycle}
          {cycle}
        </div>
      </div>
    </div>
  );
}
