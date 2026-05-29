// pages/products/index.jsx  (or app/products/page.jsx if using App Router)
// Place this at: pages/products/index.jsx

import Link from "next/link";
import { projects } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0A0A0A;
          color: #FAFAF5;
          font-family: 'Jost', sans-serif;
        }

        .products-page {
          min-height: 100vh;
          background: #0A0A0A;
          padding: 80px 24px 96px;
          position: relative;
          overflow: hidden;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,214,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,214,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── Breadcrumb ── */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 48px;
        }
        .breadcrumb a {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #888;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.15s;
        }
        .breadcrumb a:hover { color: #FFD600; }
        .breadcrumb-sep {
          color: #444;
          font-size: 0.75rem;
        }
        .breadcrumb-current {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #FFD600;
          text-transform: uppercase;
        }

        /* ── Header ── */
        .page-tag {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          color: #FFD600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid rgba(255,214,0,0.3);
          padding: 4px 10px;
          border-radius: 3px;
          margin-bottom: 16px;
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(52px, 7vw, 96px);
          line-height: 0.93;
          letter-spacing: 0.02em;
          margin-bottom: 20px;
        }

        .page-title em {
          color: #E8180C;
          font-style: normal;
        }

        .page-subtitle {
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #BBBBAA;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 60px;
        }

        /* ── Grid ── */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        /* ── Cards ── */
        .product-card {
          display: block;
          text-decoration: none;
          position: relative;
          border-radius: 4px;
          padding: 32px;
          overflow: hidden;
          border: 3px solid #0A0A0A;
          transition: transform 0.14s, box-shadow 0.14s;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translate(-4px, -4px);
        }

        .card-black {
          background: #0A0A0A;
          border: 3px solid #222;
          color: #FAFAF5;
          box-shadow: 6px 6px 0 #FFD600;
        }
        .card-black:hover {
          box-shadow: 10px 10px 0 #FFD600;
        }

        .card-yellow {
          background: #FFD600;
          border: 3px solid #0A0A0A;
          color: #0A0A0A;
          box-shadow: 6px 6px 0 #0A0A0A;
        }
        .card-yellow:hover {
          box-shadow: 10px 10px 0 #0A0A0A;
        }

        .card-red {
          background: #E8180C;
          border: 3px solid #0A0A0A;
          color: #FAFAF5;
          box-shadow: 6px 6px 0 #FFD600;
        }
        .card-red:hover {
          box-shadow: 10px 10px 0 #FFD600;
        }

        .card-stripe {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,214,0,0.04) 8px,
            rgba(255,214,0,0.04) 16px
          );
          pointer-events: none;
        }

        .card-content { position: relative; z-index: 1; }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .card-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          padding: 3px 9px;
          border-radius: 3px;
        }

        .tag-on-dark {
          background: #FFD600;
          color: #0A0A0A;
        }
        .tag-on-yellow {
          background: #0A0A0A;
          color: #FAFAF5;
        }

        .card-status {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          opacity: 0.75;
          text-transform: uppercase;
        }

        .card-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 72px;
          line-height: 1;
          opacity: 0.12;
          margin-bottom: -18px;
        }

        .card-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 38px;
          letter-spacing: 0.02em;
          line-height: 1;
          margin-bottom: 14px;
        }

        .card-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.92rem;
          line-height: 1.65;
          opacity: 0.88;
          margin-bottom: 24px;
        }

        .card-techs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 28px;
        }

        .tech-chip {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.07em;
          padding: 3px 9px;
          border-radius: 3px;
        }

        .chip-dark { border: 1.5px solid rgba(255,255,255,0.4); color: #FAFAF5; }
        .chip-light { border: 1.5px solid #0A0A0A; color: #0A0A0A; }

        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
        }

        .cta-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: transform 0.14s;
        }
        .product-card:hover .cta-arrow {
          transform: translate(3px, -3px);
        }

        .cta-dark { background: #FFD600; color: #0A0A0A; }
        .cta-light { background: #0A0A0A; color: #FFD600; }
        .cta-red-accent { background: #FAFAF5; color: #E8180C; }

        /* ── Stealth banner ── */
        .stealth-banner {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #FFD600;
          border: 3px solid #0A0A0A;
          box-shadow: 5px 5px 0 #0A0A0A;
          padding: 16px 24px;
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
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr; gap: 16px; }
          .stealth-banner { width: 100%; }
        }
      `}</style>

      <div className="products-page">
        <div className="bg-grid" />

        <div className="inner">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Products</span>
          </nav>

          {/* Header */}
          <p className="page-tag">WHAT WE'RE BUILDING</p>
          <h1 className="page-title">
            ALL<br />
            <em>PRODUCTS</em>
          </h1>
          <p className="page-subtitle">
            Every product we build solves a real problem. Fast, scalable, and built to last —
            from CRM to payments to customer support.
          </p>

          {/* Grid */}
          <div className="products-grid">
            {projects.map((project, index) => {
              const isYellow = project.color === "yellow";
              const isRed = project.color === "red";

              return (
                <Link
                  key={project.id}
                  href={`/products/${project.id}`}
                  className={`product-card ${
                    isYellow ? "card-yellow" : isRed ? "card-red" : "card-black"
                  }`}
                >
                  {/* Stripe on dark */}
                  {!isYellow && !isRed && <div className="card-stripe" />}

                  <div className="card-content">
                    <div className="card-top">
                      <span className={`card-tag ${isYellow ? "tag-on-yellow" : "tag-on-dark"}`}>
                        {project.tag}
                      </span>
                      <span className="card-status">{project.status}</span>
                    </div>

                    <p className="card-num">0{index + 1}</p>
                    <h2 className="card-name">{project.name}</h2>
                    <p className="card-desc">{project.description}</p>

                    <div className="card-techs">
                      {project.tech.map((t) => (
                        <span key={t} className={`tech-chip ${isYellow ? "chip-light" : "chip-dark"}`}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="card-cta" style={{ color: isYellow ? "#0A0A0A" : "#FAFAF5" }}>
                      VIEW DETAILS
                      <span className={`cta-arrow ${isYellow ? "cta-light" : isRed ? "cta-red-accent" : "cta-dark"}`}>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Stealth banner */}
          <div className="stealth-banner">
            <span>⚡</span>
            <span>MORE PROJECTS IN STEALTH MODE — STAY TUNED.</span>
          </div>
        </div>
      </div>
      <Footer />  
    </>
  );
}


