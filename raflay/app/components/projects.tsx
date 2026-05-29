import { projects } from "../data/content";

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-description {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          line-height: 1.65;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .project-tag-label {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          padding: 3px 8px;
          border-radius: 3px;
        }

        .project-status {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          opacity: 0.75;
          letter-spacing: 0.08em;
        }

        .tech-chip {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          padding: 3px 9px;
          letter-spacing: 0.07em;
          border-radius: 3px;
        }

        .stealth-banner {
          margin-top: 32px;
          padding: 16px 24px;
          background: #FFD600;
          border: 3px solid #0A0A0A;
          box-shadow: 5px 5px 0 #0A0A0A;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border-radius: 4px;
        }

        .stealth-banner span {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #0A0A0A;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .stealth-banner {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      <section id="projects" style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span className="section-tag">WHAT WE'RE BUILDING</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: 0.95,
              marginTop: 12,
              letterSpacing: "0.02em",
            }}
          >
            PROJECTS IN
            <br />
            <span style={{ color: "#E8180C" }}>MOTION</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                project.color === "yellow"
                  ? "brutal-card-yellow"
                  : project.color === "red"
                  ? "brutal-card-red"
                  : "brutal-card"
              }
              style={{
                padding: 28,
                background:
                  project.color === "yellow"
                    ? "#FFD600"
                    : project.color === "red"
                    ? "#E8180C"
                    : "#0A0A0A",
                color:
                  project.color === "yellow" ? "#0A0A0A" : "#FAFAF5",
                position: "relative",
                overflow: "hidden",
                borderRadius: 4,
              }}
            >
              {/* Stripe bg on dark card */}
              {project.color === "black" && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,214,0,0.04) 8px, rgba(255,214,0,0.04) 16px)",
                  }}
                />
              )}

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Tag + status row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <span
                    className="project-tag-label"
                    style={{
                      background: project.color === "yellow" ? "#0A0A0A" : "#FFD600",
                      color: project.color === "yellow" ? "#FAFAF5" : "#0A0A0A",
                    }}
                  >
                    {project.tag}
                  </span>
                  <span className="project-status">
                    {project.status.toUpperCase()}
                  </span>
                </div>

                {/* Number */}
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 64,
                    lineHeight: 1,
                    opacity: 0.15,
                    marginBottom: -16,
                  }}
                >
                  0{index + 1}
                </p>

                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 34,
                    letterSpacing: "0.02em",
                    marginBottom: 12,
                  }}
                >
                  {project.name}
                </h3>

                <p className="project-description">{project.description}</p>

                {/* Tech stack */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-chip"
                      style={{
                        border:
                          project.color === "yellow"
                            ? "1.5px solid #0A0A0A"
                            : "1.5px solid rgba(255,255,255,0.45)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="stealth-banner">
          <span>MORE PROJECTS IN STEALTH MODE — STAY TUNED.</span>
        </div>
      </section>
    </>
  );
}