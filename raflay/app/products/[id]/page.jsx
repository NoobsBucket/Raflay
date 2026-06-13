// app/products/[id]/page.jsx
// Place this at: app/products/[id]/page.jsx

import Link from "next/link";

import { products } from "../../data/content";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// Product detail objects are embedded in `products` inside `app/data/content.ts`.

// ── generateStaticParams replaces getStaticPaths in the App Router ───────────
export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

// ── generateMetadata replaces <Head> / getStaticProps for metadata ───────────
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = products.find((p) => p.id === Number(id));
  return {
    title: project ? `${project.name} — Raflay` : "Product — Raflay",
  };
}

// ── Page component is now an async Server Component ─────────────────────────
// params is passed directly as a prop — no useRouter needed
export default async function ProductDetail({ params }) {
  const { id } = await params; // `await params` required in Next.js 15+

  const project = products.find((p) => p.id === Number(id));
  const detail = project?.detail;

  if (!project || !detail) {
    return (
      <div style={{ background: "#0A0A0A", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, color: "#FFD600" }}>NOT FOUND</p>
      </div>
    );
  }

  const isYellow = project.color === "yellow";
  const heroText = isYellow ? "#0A0A0A" : "#FAFAF5";
  const accentBg = detail.bgColor;

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #FFFFFF;
          color: #161618;
          font-family: 'Jost', sans-serif;
        }

        .detail-page { min-height: 100vh; }

        .detail-hero {
          background: ${accentBg};
          color: ${heroText};
          padding: 80px 24px 72px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(22,22,24,0.06);
        }

        .hero-stripe {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.04) 10px,
            rgba(0,0,0,0.04) 20px
          );
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 40px;
        }
        .breadcrumb a {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: ${isYellow ? "rgba(10,10,10,0.55)" : "rgba(250,250,245,0.55)"};
          text-decoration: none;
          text-transform: uppercase;
          transition: opacity 0.15s;
        }
        .breadcrumb a:hover { opacity: 1; color: ${isYellow ? "#0A0A0A" : "#FFD600"}; }
        .breadcrumb-sep { color: ${isYellow ? "rgba(10,10,10,0.35)" : "rgba(250,250,245,0.35)"}; font-size: 0.75rem; }
        .breadcrumb-current {
          font-family: 'Jost', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: ${isYellow ? "#0A0A0A" : "#FFD600"};
          text-transform: uppercase;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 48px;
          align-items: end;
        }

        .hero-tag {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 3px;
          margin-bottom: 16px;
          background: ${isYellow ? "#0A0A0A" : "#FFD600"};
          color: ${isYellow ? "#FAFAF5" : "#0A0A0A"};
        }

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 8vw, 112px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin-bottom: 16px;
        }

        .hero-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 1.15rem;
          font-weight: 500;
          opacity: 0.8;
          margin-bottom: 28px;
        }

        .hero-badges { display: flex; gap: 12px; flex-wrap: wrap; }

        .hero-badge {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 3px;
          border: 2px solid ${isYellow ? "rgba(10,10,10,0.3)" : "rgba(250,250,245,0.3)"};
        }

        .hero-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(120px, 15vw, 200px);
          opacity: 0.1;
          line-height: 0.9;
          user-select: none;
        }

        .detail-body { background: #FFFFFF; padding: 80px 24px 96px; }

        .body-inner {
          max-width: 1200px;
          margin: 0 auto;
          background: #FFFFFF;
          border-radius: 28px;
          padding: 48px;
          box-shadow: 0 18px 40px rgba(10,10,10,0.06);
          border: 1px solid rgba(22,22,24,0.04);
        }

        .body-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }

        .section-label {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--red, #D42030);
          margin-bottom: 16px;
        }

        .long-desc {
          font-family: 'Jost', sans-serif;
          font-size: 1.05rem;
          font-weight: 400;
          color: #5c5a56;
          line-height: 1.8;
          margin-bottom: 48px;
        }

        .features-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 4vw, 56px);
          letter-spacing: 0.02em;
          margin-bottom: 32px;
        }
        .features-title span { color: #FFD600; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 64px;
        }

        .feature-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(22,22,24,0.06);
          border-radius: 16px;
          padding: 24px;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
        }
        .feature-card:hover { border-color: var(--red, #D42030); transform: translateY(-4px); box-shadow: 0 18px 40px rgba(10,10,10,0.06); }

        .feature-icon { font-size: 1.8rem; margin-bottom: 12px; display: block; }

        .feature-title {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
          color: #161618;
        }

        .feature-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          color: #5c5a56;
          line-height: 1.65;
        }

        .sidebar { display: flex; flex-direction: column; gap: 20px; }

        .info-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(22,22,24,0.06);
          border-radius: 12px;
          padding: 20px;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(22,22,24,0.06);
        }
        .info-row:last-child { border-bottom: none; padding-bottom: 0; }
        .info-row:first-child { padding-top: 0; }

        .info-label {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b6a68;
        }

        .info-value {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: #161618;
        }

        .status-pill {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(212,32,48,0.06);
          color: var(--red, #D42030);
          border: 1px solid rgba(212,32,48,0.12);
        }

        .tech-chips { display: flex; flex-wrap: wrap; gap: 6px; }

        .tech-chip {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.68rem;
          letter-spacing: 0.07em;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(22,22,24,0.06);
          color: #5c5a56;
          background: #FAFAF8;
        }

        .cta-strip {
          background: ${accentBg};
          border: 1px solid rgba(22,22,24,0.06);
          border-radius: 12px;
          padding: 28px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          box-shadow: 0 18px 40px rgba(10,10,10,0.06);
          flex-wrap: wrap;
        }

        .cta-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          letter-spacing: 0.02em;
          color: ${heroText};
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 999px;
          text-decoration: none;
          border: 1px solid rgba(10,10,10,0.06);
          background: ${isYellow ? '#0A0A0A' : '#FFD600'};
          color: ${isYellow ? '#FAFAF5' : '#0A0A0A'};
          box-shadow: 0 8px 20px rgba(10,10,10,0.06);
          transition: box-shadow 0.12s, transform 0.12s;
          white-space: nowrap;
        }
        .cta-btn:hover {
          box-shadow: 2px 2px 0 ${isYellow ? "#FFD600" : "#0A0A0A"};
          transform: translate(2px, 2px);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: #888;
          margin-top: 48px;
          transition: color 0.15s;
        }
        .back-link:hover { color: #FFD600; }

        @media (max-width: 900px) {
          .body-grid { grid-template-columns: 1fr; }
          .hero-layout { grid-template-columns: 1fr; }
          .hero-num { display: none; }
          .features-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .detail-hero { padding: 60px 20px 52px; }
          .cta-strip { flex-direction: column; align-items: flex-start; }
          .cta-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="detail-page">

        <section className="detail-hero">
          <div className="hero-stripe" />
          <div className="hero-inner">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href="/products">Products</Link>
              <span className="breadcrumb-sep">›</span>
              <span className="breadcrumb-current">{project.name}</span>
            </nav>

            <div className="hero-layout">
              <div>
                <span className="hero-tag">{project.tag}</span>
                <h1 className="hero-name">{project.name}</h1>
                <p className="hero-tagline">{detail.tagline}</p>
                <div className="hero-badges">
                  <span className="hero-badge">{project.status}</span>
                  <span className="hero-badge">EST. LAUNCH: {detail.timeline}</span>
                </div>
              </div>
              <div className="hero-num">0{project.id}</div>
            </div>
          </div>
        </section>

        <section className="detail-body">
          <div className="body-inner">
            <div className="body-grid">
              <div>
                <p className="section-label">{'// OVERVIEW'}</p>
                <p className="long-desc">{detail.longDescription}</p>

                <h2 className="features-title">
                  KEY <span>FEATURES</span>
                </h2>
                <div className="features-grid">
                  {detail.features.map((f) => (
                    <div key={f.title} className="feature-card">
                      <span className="feature-icon">{f.icon}</span>
                      <p className="feature-title">{f.title}</p>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar">
                <div className="info-card">
                  <p className="section-label" style={{ marginBottom: 0 }}>{'// PRODUCT INFO'}</p>
                  <div className="info-row">
                    <span className="info-label">Status</span>
                    <span><span className="status-pill">{project.status}</span></span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.tag}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Target Users</span>
                    <span className="info-value">{detail.target}</span>
                  </div>
                  <div className="info-row">
                    <span className="info-label">Expected Launch</span>
                    <span className="info-value">{detail.timeline}</span>
                  </div>
                </div>

                <div className="info-card">
                  <p className="section-label" style={{ marginBottom: 12 }}>{'// TECH STACK'}</p>
                  <div className="tech-chips">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="info-card" style={{ borderColor: "rgba(255,214,0,0.2)", background: "rgba(255,214,0,0.04)" }}>
                  <p className="section-label" style={{ marginBottom: 8 }}>{'// INTERESTED?'}</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#888", lineHeight: 1.65, marginBottom: 16 }}>
                    Want early access or to stay updated on this product?
                  </p>
                  <a href={`mailto:hello@raflay.comm?subject=Interest in ${project.name}`} className="cta-btn" style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}>
                    GET IN TOUCH →
                  </a>
                </div>
              </div>
            </div>

            <div className="cta-strip">
              <p className="cta-text">WANT EARLY ACCESS TO {project.name.toUpperCase()}?</p>
              <a href={`mailto:hello@raflay.comm?subject=Early Access - ${project.name}`} className="cta-btn">
                REACH OUT →
              </a>
            </div>

            <Link href="/products" className="back-link">
              ← BACK TO ALL PRODUCTS
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}