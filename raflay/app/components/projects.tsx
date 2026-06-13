import Link from "next/link";
import { products } from "../data/content";

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

        :root {
          --red: #D42030;
          --text-light: #FAFAF5;
          --muted: #c8c5c0;
          --surface-dark: #0A0A0A;
        }

        .brutal-card, .brutal-card-red, .brutal-card-yellow {
          border-radius: 20px;
          padding: 28px;
          transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 18px 40px rgba(0,0,0,0.16);
        }
        .brutal-card { background: var(--surface-dark); color: var(--text-light); }
        .brutal-card-yellow { background: #FFD600; color: #0A0A0A; border: 1px solid rgba(10,10,10,0.06); }
        .brutal-card-red { background: #E8180C; color: #FAFAF5; }

        .card-content { position: relative; z-index: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .card-num { font-family: 'Bebas Neue', sans-serif; font-size: 72px; line-height: 1; opacity: 0.08; margin-bottom: -16px; }
        .card-name { font-family: 'Bebas Neue', sans-serif; font-size: 34px; margin-bottom: 12px; }
        .card-desc { font-family: 'Jost', sans-serif; font-size: 0.95rem; line-height: 1.65; margin-bottom: 18px; }
        .brutal-card .card-desc { color: rgba(250,250,245,0.9); }
        .brutal-card-yellow .card-desc { color: #0A0A0A; }
        .brutal-card-red .card-desc { color: rgba(250,250,245,0.95); }


        .product-link {
          display: block;
          border-radius: 6px;
          overflow: hidden;
          transition: transform 0.18s, box-shadow 0.18s;
          text-decoration: none;
          color: inherit;
        }
        .product-link:hover { transform: translateY(-6px); box-shadow: 0 28px 80px rgba(0,0,0,0.18); }

        .card-cta { display: inline-flex; align-items: center; gap: 10px; margin-top: 18px; font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.06em; }
        .cta-arrow { display: inline-flex; width: 28px; height: 28px; border-radius: 999px; align-items: center; justify-content: center; background: rgba(0,0,0,0.08); }

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
          <span className="section-tag">WHAT WE&apos;RE BUILDING</span>
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
          {products.map((project, index) => (
            <Link
              key={project.id}
              href={`/products/${project.id}`}
              className={`product-link ${
                project.color === "yellow"
                  ? "brutal-card-yellow"
                  : project.color === "red"
                  ? "brutal-card-red"
                  : "brutal-card"
              }`}
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

                <span className="card-cta">
                  VIEW DETAILS
                  <span className="cta-arrow">→</span>
                </span>
              </div>
            </Link>
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