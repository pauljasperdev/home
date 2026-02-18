import { useEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
  professionalSummary,
} from "~/lib/cv-data";

const TOPBAR_HEIGHT = 40;

function TopBar() {
  return (
    <header
      style={{
        height: `${TOPBAR_HEIGHT}px`,
        flexShrink: 0,
        borderBottom: "1px solid #27272a",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        backgroundColor: "#09090b",
      }}
    >
      <span
        style={{
          fontSize: "0.72rem",
          color: "#52525b",
          letterSpacing: "0.1em",
        }}
      >
        pauljasper.dev
      </span>
      <nav style={{ display: "flex", gap: "2rem" }}>
        {[
          { label: "home", href: "/5" },
          { label: "blog", href: "/5/blog" },
          { label: "cv", href: "/cv" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "0.72rem",
              color: "#52525b",
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

function LongFormContent() {
  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        padding: "5rem 2rem",
      }}
    >
      <div
        style={{
          fontSize: "0.65rem",
          color: "#3f3f46",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "4rem",
        }}
      >
        Senior Solutions Architect & Full-Stack Engineer
      </div>

      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 700,
          color: "#f4f4f5",
          marginBottom: "2rem",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        Paul Jasper
      </h1>

      <p
        style={{
          fontSize: "0.88rem",
          color: "#a1a1aa",
          lineHeight: 1.9,
          marginBottom: "5rem",
        }}
      >
        {professionalSummary}
      </p>

      <div
        style={{
          borderTop: "1px solid #27272a",
          paddingTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: "#3f3f46",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Experience
        </div>
        {experienceSteps.map((step) => (
          <div key={step.company} style={{ marginBottom: "3rem" }}>
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
                marginBottom: "2rem",
              }}
            >
              {step.company}
            </a>
            {step.positions.map((pos) => (
              <div key={pos.title} style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "1rem",
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
                      fontSize: "0.7rem",
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
                        fontSize: "0.78rem",
                        color: "#a1a1aa",
                        marginBottom: "0.75rem",
                        fontWeight: 600,
                      }}
                    >
                      {proj.title}
                    </div>
                    {typeof proj.description === "string" ? (
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#71717a",
                          lineHeight: 1.8,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {proj.description}
                      </p>
                    ) : (
                      proj.description.map((d) => (
                        <p
                          key={d}
                          style={{
                            fontSize: "0.8rem",
                            color: "#71717a",
                            lineHeight: 1.8,
                            marginBottom: "0.4rem",
                          }}
                        >
                          {d}
                        </p>
                      ))
                    )}
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#3f3f46",
                        fontFamily: "monospace",
                        marginTop: "0.5rem",
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
      </div>

      <div
        style={{
          borderTop: "1px solid #27272a",
          paddingTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: "#3f3f46",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Side Projects
        </div>
        {sideProjects.map((proj) => (
          <div key={proj.title} style={{ marginBottom: "2.5rem" }}>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.88rem",
                fontWeight: 700,
                color: "#f4f4f5",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              {proj.title}
            </a>
            {Array.isArray(proj.description) ? (
              proj.description.map((d: string) => (
                <p
                  key={d}
                  style={{
                    fontSize: "0.82rem",
                    color: "#71717a",
                    lineHeight: 1.8,
                    marginBottom: "0.3rem",
                  }}
                >
                  {d}
                </p>
              ))
            ) : (
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#71717a",
                  lineHeight: 1.8,
                  marginBottom: "0.3rem",
                }}
              >
                {proj.description}
              </p>
            )}
            <div
              style={{
                marginTop: "0.75rem",
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

      <div
        style={{
          borderTop: "1px solid #27272a",
          paddingTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: "#3f3f46",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Certifications
        </div>
        {certifications.map((cert) => (
          <div
            key={cert.title}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #18181b",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#d4d4d8",
                  marginBottom: "0.2rem",
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

      <div
        style={{
          borderTop: "1px solid #27272a",
          paddingTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <div
          style={{
            fontSize: "0.65rem",
            color: "#3f3f46",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Education
        </div>
        {educationSteps.map((step) => (
          <div key={step.company} style={{ marginBottom: "2rem" }}>
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.88rem",
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
                lineHeight: 1.8,
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
      </div>
    </div>
  );
}

export default function V5Home() {
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
      <TopBar />
      <div
        ref={containerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          scrollbarWidth: "none",
        }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>
        <div ref={contentRef}>
          <LongFormContent />
          <LongFormContent />
          <LongFormContent />
        </div>
      </div>
    </div>
  );
}
