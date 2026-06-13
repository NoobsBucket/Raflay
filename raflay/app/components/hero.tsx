"use client";
import { company } from "../data/content";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800;900&display=swap');

        :root {
          --red: #D42030;
          --red-deep: #A8192A;
          --ink: #ffffff;
          --off-white: #171717;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .section-tag {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 11px;
          color: var(--red);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1.5px solid rgba(212,32,48,0.35);
          padding: 4px 10px;
          border-radius: 3px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .hero-headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 9.2vw, 112px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin-bottom: 18px;
        }
        .h-white  { color: var(--off-white); display: block; }
        .h-outline { display: block; color: transparent; -webkit-text-stroke: 2px var(--red); }
        .h-red    { color: var(--red); display: block; }

        .hero-description {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: var(--off-white);
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }

        .hero-btn-primary {
          background: black;
          color: #fff;
          padding: 13px 26px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-decoration: none;
          border: 2.5px solid black;
          border-radius: 3px;
          text-transform: uppercase;
          display: inline-block;
          transition: background 0.12s, transform 0.1s;
        }
        .hero-btn-primary:hover {
          background: var(--red-deep);
          border-color: var(--red-deep);
          transform: translateY(-1px);
        }

        .hero-btn-secondary {
          background: transparent;
          color: var(--red);
          padding: 13px 26px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-decoration: none;
          border: 2.5px solid var(--red);
          border-radius: 3px;
          text-transform: uppercase;
          display: inline-block;
          transition: background 0.12s, color 0.12s, transform 0.1s;
        }
        .hero-btn-secondary:hover {
          background: var(--red);
          color: #fff;
          transform: translateY(-1px);
        }

        .stats-eyebrow {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 10px;
          color: var(--red);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 40px;
          color: var(--off-white);
          line-height: 1;
        }

        .stat-lbl {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 600;
          font-size: 10px;
          color: #555;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .ticker-item {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 11px;
          color: #fff;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 32px; }
          .hero-right { order: 2; }
          .hero-left  { order: 1; }
          .hero-description { max-width: 100%; }
          .hero-buttons { flex-direction: column; }
          .hero-btn-primary, .hero-btn-secondary { text-align: center; width: 100%; }
        }
      `}</style>

      <section style={{
        background: "var(--ink)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "4px solid var(--red)",
      }}>
        {/* Grid bg */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(212,32,48,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,32,48,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* Red slash */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: "42%", height: "100%",
          background: "#D42030",
          clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", position: "relative", zIndex: 1, width: "100%" }}>
          <div className="hero-grid">

            {/* Left */}
            <div className="hero-left">
              <span className="section-tag">Est. {company.founded} · {company.location}</span>
              <div className="hero-headline">
                <span className="h-white">Build</span>
                <span className="h-outline">Ship</span>
                <span className="h-red">Scale</span>
              </div>
              <p className="hero-description">{company.description}</p>
              <div className="hero-buttons" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#projects" className="hero-btn-primary">View Projects →</a>
                <a href="/careers" className="hero-btn-secondary">Join Us</a>
              </div>
            </div>

            {/* Right */}
            <div className="hero-right" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Stats card */}
              <div style={{
                border: "1px solid rgba(212,32,48,0.08)",
                borderRadius: 6,
                padding: "24px 28px",
                background: "#ffffff",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              }}>
                <p className="stats-eyebrow">// Company Stats</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {[
                    { label: "Products", value: "17" },
                    { label: "+ B2C Model", value: "B2B" },
                    { label: "Founded", value: "2025" },
                    { label: "Pakistan", value: "ISB" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="stat-val">{s.value}</div>
                      <div className="stat-lbl">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ticker */}
              <div style={{ background: "#000000", borderRadius: 3, padding: "10px 16px", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 20, whiteSpace: "nowrap" }}>
                  {["Software", "B2B", "B2C", "ISLAMABAD", "Pakistan", "company"].map((t, i) => (
                    <span key={i} className="ticker-item">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}