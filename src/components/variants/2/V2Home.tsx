import { useEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
  professionalSummary,
} from "~/lib/cv-data";

const NAVBAR_HEIGHT = 56;

const sectionLabelStyle: React.CSSProperties = {
  fontSize: "0.65rem",
  color: "#71717a",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  marginBottom: "2rem",
};

function Navbar() {
  return (
    <header
      style={{
        height: `${NAVBAR_HEIGHT}px`,
        flexShrink: 0,
        borderBottom: "1px solid #27272a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
        backgroundColor: "#09090b",
      }}
    >
      <span
        style={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "#f4f4f5",
          letterSpacing: "0.05em",
        }}
      >
        Paul Jasper
      </span>
      <nav style={{ display: "flex", gap: "2rem" }}>
        {[
          { label: "Home", href: "/2" },
          { label: "Blog", href: "/2/blog" },
          { label: "CV", href: "/cv" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "0.78rem",
              color: "#71717a",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function WelcomeSection() {
  return (
    <section
      style={{
        padding: "6rem 3rem",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={sectionLabelStyle}>pauljasper.dev</div>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 700,
          color: "#f4f4f5",
          marginBottom: "1rem",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
        }}
      >
        Paul Jasper
      </h1>
      <div
        style={{
          fontSize: "1rem",
          color: "#71717a",
          marginBottom: "2.5rem",
          letterSpacing: "0.02em",
        }}
      >
        Senior Solutions Architect & Full-Stack Engineer
      </div>
      <p
        style={{
          fontSize: "0.9rem",
          color: "#a1a1aa",
          lineHeight: 1.8,
          maxWidth: "600px",
        }}
      >
        {professionalSummary}
      </p>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      style={{
        padding: "4rem 3rem",
        borderTop: "1px solid #27272a",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={sectionLabelStyle}>Experience</div>
      {experienceSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#f4f4f5",
                textDecoration: "none",
              }}
            >
              {step.company}
            </a>
            <span style={{ fontSize: "0.75rem", color: "#52525b" }}>↗</span>
          </div>
          {step.positions.map((pos) => (
            <div key={pos.title} style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "1rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #18181b",
                }}
              >
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "#d4d4d8",
                    fontWeight: 600,
                  }}
                >
                  {pos.title}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#52525b",
                    fontFamily: "monospace",
                  }}
                >
                  {pos.date}
                </span>
              </div>
              {pos.projects.map((proj) => (
                <div key={proj.title} style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#a1a1aa",
                      fontWeight: 600,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {proj.title}
                  </div>
                  {typeof proj.description === "string" ? (
                    <p
                      style={{
                        fontSize: "0.8rem",
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
                        margin: "0 0 0.75rem",
                      }}
                    >
                      {proj.description.map((d: string) => (
                        <li
                          key={d}
                          style={{
                            fontSize: "0.8rem",
                            color: "#71717a",
                            lineHeight: 1.7,
                            paddingLeft: "1rem",
                            position: "relative",
                            marginBottom: "0.3rem",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              color: "#3f3f46",
                            }}
                          >
                            —
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    style={{
                      fontSize: "0.7rem",
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
      style={{
        padding: "4rem 3rem",
        borderTop: "1px solid #27272a",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={sectionLabelStyle}>Side Projects</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
        }}
      >
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "1rem",
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
                }}
              >
                {proj.title}
              </a>
              <span style={{ fontSize: "0.75rem", color: "#52525b" }}>↗</span>
            </div>
            {Array.isArray(proj.description) ? (
              proj.description.map((d: string) => (
                <p
                  key={d}
                  style={{
                    fontSize: "0.8rem",
                    color: "#71717a",
                    lineHeight: 1.6,
                    marginBottom: "0.3rem",
                  }}
                >
                  {d}
                </p>
              ))
            ) : (
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#71717a",
                  lineHeight: 1.6,
                  marginBottom: "0.3rem",
                }}
              >
                {proj.description}
              </p>
            )}
            <div
              style={{
                marginTop: "1rem",
                fontSize: "0.68rem",
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
      style={{
        padding: "4rem 3rem",
        borderTop: "1px solid #27272a",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={sectionLabelStyle}>Certifications</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              padding: "1rem 1.25rem",
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#d4d4d8",
                  marginBottom: "0.25rem",
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
    <section
      style={{
        padding: "4rem 3rem",
        borderTop: "1px solid #27272a",
        maxWidth: "900px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={sectionLabelStyle}>Education</div>
      {educationSteps.map((step) => (
        <div key={step.company} style={{ marginBottom: "2rem" }}>
          <a
            href={step.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "1rem",
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
              fontSize: "0.8rem",
              color: "#71717a",
              lineHeight: 1.7,
              marginBottom: "1rem",
              maxWidth: "600px",
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
                alignItems: "baseline",
                marginBottom: "0.5rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid #18181b",
              }}
            >
              <span style={{ fontSize: "0.82rem", color: "#a1a1aa" }}>
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

export default function V2Home() {
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
      <WelcomeSection />
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
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#09090b",
      }}
    >
      <Navbar />
      <div
        ref={containerRef}
        style={{
          flex: 1,
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
