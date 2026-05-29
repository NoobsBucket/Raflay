import { company } from "../data/content";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .hero-description {
          font-family: 'Jost', sans-serif;
          font-size: 1.1rem;
          font-weight: 400;
          color: #BBBBAA;
          line-height: 1.75;
          max-width: 420px;
          margin-bottom: 40px;
        }

        .hero-btn-primary {
          background: #FFD600;
          color: #0A0A0A;
          padding: 14px 28px;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          text-decoration: none;
          border: 3px solid #0A0A0A;
          border-radius: 4px;
          box-shadow: 4px 4px 0 #FFD600;
          transition: box-shadow 0.12s, transform 0.12s;
          display: inline-block;
        }
        .hero-btn-primary:hover {
          box-shadow: 2px 2px 0 #FFD600;
          transform: translate(2px, 2px);
        }

        .hero-btn-secondary {
          background: transparent;
          color: #FAFAF5;
          padding: 14px 28px;
          font-size: 0.88rem;
          letter-spacing: 0.06em;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          border: 3px solid #FAFAF5;
          border-radius: 4px;
          box-shadow: 5px 5px 0 #E8180C;
          text-decoration: none;
          transition: box-shadow 0.12s, transform 0.12s;
          display: inline-block;
        }
        .hero-btn-secondary:hover {
          box-shadow: 2px 2px 0 #E8180C;
          transform: translate(2px, 2px);
        }

        .stats-label {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          color: #888;
          letter-spacing: 0.12em;
          margin-top: 4px;
          text-transform: uppercase;
        }

        .section-tag-hero {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          color: #FFD600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 24px;
          display: inline-block;
          border: 1px solid rgba(255,214,0,0.3);
          padding: 4px 10px;
          border-radius: 3px;
        }

        .marquee-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: white;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        /* ── Mobile layout ── */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }

          /* On mobile: stack as hero-text → stat strip → buttons */
          .hero-right {
            order: 2;
          }
          .hero-left {
            order: 1;
          }

          .hero-headings h1 {
            font-size: clamp(64px, 18vw, 96px) !important;
          }

          .hero-description {
            font-size: 1rem;
            max-width: 100%;
            margin-bottom: 28px;
          }

          .hero-buttons {
            flex-direction: column !important;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            text-align: center;
            width: 100%;
          }

          /* Compact horizontal stat strip on mobile */
          .stats-card {
            display: none !important;
          }
          .stats-strip {
            display: grid !important;
          }
          .marquee-block {
            display: none !important;
          }
        }
      `}</style>

      <section
        style={{
          background: "#0A0A0A",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "3px solid #FFD600",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,214,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,0,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Red accent block */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "35%",
            height: "100%",
            background: "#E8180C",
            clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 0.08,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 24px",
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div className="hero-grid">

            {/* ── Left ── */}
            <div className="hero-left">
              <span className="section-tag-hero">
                EST. {company.founded} · {company.location}
              </span>

              <div className="hero-headings">
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(72px, 8vw, 120px)",
                    lineHeight: 0.9,
                    color: "#FAFAF5",
                    letterSpacing: "0.02em",
                    marginBottom: 8,
                  }}
                >
                  BUILD
                </h1>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(72px, 8vw, 120px)",
                    lineHeight: 0.9,
                    color: "#FFD600",
                    letterSpacing: "0.02em",
                    marginBottom: 8,
                    WebkitTextStroke: "2px #FFD600",
                  }}
                >
                  SHIP
                </h1>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(72px, 8vw, 120px)",
                    lineHeight: 0.9,
                    color: "#E8180C",
                    letterSpacing: "0.02em",
                    marginBottom: 32,
                  }}
                >
                  SCALE
                </h1>
              </div>

              <p className="hero-description">{company.description}</p>

              {/* Mobile-only stat strip */}
              <div
                className="stats-strip"
                style={{
                  display: "none",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 0,
                  marginBottom: 32,
                  border: "2px solid rgba(255,214,0,0.2)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                {[
                  { label: "Products", value: "3" },
                  { label: "Model", value: "B2B+B2C" },
                  { label: "Founded", value: "2025" },
                  { label: "Location", value: "ISLAMABAD, PK" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      padding: "16px 8px",
                      textAlign: "center",
                      borderRight: i < 3 ? "1px solid rgba(255,214,0,0.15)" : "none",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 26,
                        color: "#FAFAF5",
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="stats-label" style={{ fontSize: "0.6rem" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="hero-buttons"
                style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
              >
                <a href="#projects" className="hero-btn-primary">
                  VIEW PROJECTS →
                </a>
                <a href="/careers" className="hero-btn-secondary">
                  JOIN US
                </a>
              </div>
            </div>

            {/* ── Right ── */}
            <div
              className="hero-right"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              {/* Glass stats card (hidden on mobile) */}
              <div
                className="stats-card glass"
                style={{
                  padding: 32,
                  borderRadius: 4,
                  border: "1px solid rgba(255,214,0,0.2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: "#FFD600",
                    letterSpacing: "0.16em",
                    marginBottom: 24,
                  }}
                >
                  // COMPANY STATS
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                  {[
                    { label: "Products", value: "3" },
                    { label: "Model", value: "B2B+B2C" },
                    { label: "Founded", value: "2024" },
                    { label: "Location", value: "KHI, PK" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: 44,
                          color: "#FAFAF5",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </p>
                      <p className="stats-label">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Marquee tag (hidden on mobile) */}
              <div
                className="marquee-block"
                style={{
                  background: "#E8180C",
                  border: "3px solid #0A0A0A",
                  padding: "12px 20px",
                  display: "flex",
                  gap: 16,
                  overflow: "hidden",
                  borderRadius: 4,
                }}
              >
              {["SOFTWARE", "B2B", "B2C", "ISLAMABAD", "PAKISTAN", "STARTUP", "SOFTWARE"].map(
                  (t, i) => (
                    <span key={i} className="marquee-tag">
                      {t} ·
                    </span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}