import { useEffect, useRef } from "react";
import {
  experienceSteps,
  educationSteps,
  certifications,
  sideProjects,
  professionalSummary,
} from "~/lib/cv-data";

const NAVBAR_HEIGHT = 56;

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
        padding: "0 2rem",
        backgroundColor: "#09090b",
      }}
    >
      <span
        style={{
          fontSize: "0.82rem",
          fontWeight: 700,
          color: "#f4f4f5",
          letterSpacing: "0.08em",
        }}
      >
        PJ
      </span>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        {[
          { label: "Home", href: "/3" },
          { label: "Blog", href: "/3/blog" },
          { label: "CV", href: "/cv" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: "0.75rem",
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

function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: "1px",
        backgroundColor: "#27272a",
        padding: "1px",
      }}
    >
      {children}
    </div>
  );
}

function BentoCard({
  children,
  cols = 6,
  rows = 1,
  style: extraStyle,
}: {
  children: React.ReactNode;
  cols?: number;
  rows?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        gridColumn: `span ${cols}`,
        gridRow: `span ${rows}`,
        backgroundColor: "#09090b",
        padding: "2rem",
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

function BentoContent() {
  return (
    <BentoGrid>
      <BentoCard cols={12}>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          pauljasper.dev
        </div>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#f4f4f5",
            marginBottom: "0.5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Paul Jasper
        </h1>
        <div style={{ fontSize: "0.85rem", color: "#71717a" }}>
          Senior Solutions Architect & Full-Stack Engineer
        </div>
      </BentoCard>

      <BentoCard cols={8} style={{ borderTop: "1px solid #27272a" }}>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          About
        </div>
        <p
          style={{
            fontSize: "0.82rem",
            color: "#a1a1aa",
            lineHeight: 1.8,
          }}
        >
          {professionalSummary}
        </p>
      </BentoCard>

      <BentoCard
        cols={4}
        style={{ borderTop: "1px solid #27272a", borderLeft: "1px solid #27272a" }}
      >
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Links
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {[
            { label: "GitHub", href: "https://github.com/pauljasperdev" },
            { label: "Bluesky", href: "https://bsky.app" },
            { label: "gemhog.com", href: "https://gemhog.com" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.78rem",
                color: "#52525b",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "#3f3f46" }}>↗</span>
              {link.label}
            </a>
          ))}
        </div>
      </BentoCard>

      <BentoCard cols={12} style={{ borderTop: "1px solid #27272a" }}>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Experience
        </div>
        {experienceSteps.map((step) => (
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
                marginBottom: "1rem",
              }}
            >
              {step.company} ↗
            </a>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1rem",
              }}
            >
              {step.positions.map((pos) => (
                <div
                  key={pos.title}
                  style={{
                    padding: "1rem",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "3px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#d4d4d8",
                        fontWeight: 600,
                      }}
                    >
                      {pos.title}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#52525b",
                        fontFamily: "monospace",
                      }}
                    >
                      {pos.date}
                    </span>
                  </div>
                  {pos.projects.slice(0, 1).map((proj) => (
                    <div key={proj.title}>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#71717a",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {proj.title}
                      </div>
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
          </div>
        ))}
      </BentoCard>

      <BentoCard cols={6} style={{ borderTop: "1px solid #27272a" }}>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Side Projects
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sideProjects.map((proj) => (
            <div
              key={proj.title}
              style={{
                padding: "1rem",
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                borderRadius: "3px",
              }}
            >
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "#f4f4f5",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {proj.title} ↗
              </a>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#71717a",
                  lineHeight: 1.6,
                  marginBottom: "0.5rem",
                }}
              >
                {proj.description[0]}
              </p>
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
      </BentoCard>

      <BentoCard
        cols={6}
        style={{ borderTop: "1px solid #27272a", borderLeft: "1px solid #27272a" }}
      >
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Certifications
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {certifications.map((cert) => (
            <div
              key={cert.title}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: "0.6rem",
                borderBottom: "1px solid #18181b",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#d4d4d8",
                    marginBottom: "0.1rem",
                  }}
                >
                  {cert.title}
                </div>
                <div style={{ fontSize: "0.65rem", color: "#52525b" }}>
                  {cert.description}
                </div>
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
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
      </BentoCard>

      <BentoCard cols={12} style={{ borderTop: "1px solid #27272a" }}>
        <div
          style={{
            fontSize: "0.6rem",
            color: "#52525b",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Education
        </div>
        {educationSteps.map((step) => (
          <div key={step.company} style={{ marginBottom: "1.5rem" }}>
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
            {step.positions.map((pos) => (
              <div
                key={pos.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.4rem",
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
      </BentoCard>
    </BentoGrid>
  );
}

export default function V3Home() {
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
        <div ref={contentRef}>
          <BentoContent />
          <BentoContent />
          <BentoContent />
        </div>
      </div>
    </div>
  );
}
