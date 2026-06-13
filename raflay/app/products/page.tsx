import Link from "next/link";
import { company, products } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        :root {
          --red: #D42030;
          --red-deep: #A8192A;
          --bg: #090909;
          --surface: rgba(255,255,255,0.05);
          --surface-strong: rgba(255,255,255,0.1);
          --text: #f7f5f0;
          --text-muted: #c8c5c0;
        }

        .products-page { background: var(--bg); color: var(--text); }
        .hero-shell { max-width: 1200px; margin: 0 auto; padding: 72px 24px 48px; }
        .hero-panel { position: relative; overflow: hidden; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .hero-panel::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(212,32,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,32,48,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.35;
          pointer-events: none;
        }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; position: relative; z-index: 1; }
        .hero-left { padding: 24px 0; }
        .hero-right { display: grid; gap: 18px; }

        .section-tag { display: inline-flex; align-items: center; gap: 10px; font-family: 'Jost', sans-serif; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--red); border: 1px solid rgba(212,32,48,0.28); padding: 7px 14px; border-radius: 999px; margin-bottom: 24px; }

        .hero-headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(60px, 8vw, 104px); line-height: 0.92; margin: 0 0 24px; }
        .hero-highlight { display: block; color: var(--red); }

        .hero-description { font-family: 'Jost', sans-serif; font-size: 1rem; line-height: 1.75; color: var(--text-muted); max-width: 620px; margin-bottom: 30px; }

        .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .hero-btn-primary, .hero-btn-secondary { border-radius: 999px; padding: 14px 26px; font-family: 'Bebas Neue', sans-serif; font-size: 0.88rem; letter-spacing: 0.08em; text-transform: uppercase; transition: transform 0.15s, background 0.15s, color 0.15s; }
        .hero-btn-primary { background: var(--red); color: #fff; }
        .hero-btn-primary:hover { background: var(--red-deep); transform: translateY(-2px); }
        .hero-btn-secondary { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.2); }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }

        .stats-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); border-radius: 28px; padding: 32px; }
        .stats-eyebrow { font-family: 'Jost', sans-serif; font-weight: 700; font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--red); margin-bottom: 18px; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
        .stat-card { background: rgba(255,255,255,0.06); border-radius: 20px; padding: 20px; }
        .stat-val { font-family: 'Bebas Neue', sans-serif; font-size: 46px; color: #fff; line-height: 1; }
        .stat-lbl { font-family: 'Jost', sans-serif; font-weight: 600; font-size: 0.75rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-top: 8px; }

        .ticker-bar { display: flex; flex-wrap: wrap; gap: 10px; padding: 18px 20px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.12); border-radius: 22px; }
        .ticker-item { font-family: 'Bebas Neue', sans-serif; font-size: 0.84rem; letter-spacing: 0.12em; color: #fff; padding: 10px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.16); }

        .inner { max-width: 1200px; margin: 0 auto; padding: 48px 24px 80px; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; margin-bottom: 28px; }
        .breadcrumb a { font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; color: var(--text-muted); text-transform: uppercase; }
        .breadcrumb-sep { color: rgba(255,255,255,0.24); }
        .breadcrumb-current { font-family: 'Jost', sans-serif; font-size: 0.75rem; font-weight: 700; color: var(--red); text-transform: uppercase; }

        .page-tag { display: inline-flex; font-family: 'Jost', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.16em; text-transform: uppercase; color: #fff; border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 8px 14px; margin-bottom: 20px; }
        .page-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 6vw, 88px); line-height: 0.95; margin: 0 0 22px; color: #fff; }
        .page-title em { display: block; color: var(--red); font-style: normal; }
        .page-subtitle { font-family: 'Jost', sans-serif; font-size: 1rem; color: var(--text-muted); line-height: 1.75; max-width: 760px; margin-bottom: 44px; }

        .products-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-bottom: 48px; }
        .product-card { position: relative; border-radius: 24px; padding: 32px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); transition: transform 0.18s, box-shadow 0.18s; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 24px 80px rgba(0,0,0,0.22); }
        .card-black { background: #0f0f0f; color: #fff; }
        .card-yellow { background: #FFD600; color: #0A0A0A; }
        .card-red { background: #D42030; color: #fff; }
        .card-stripe { position: absolute; inset: 0; background-image: repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(255,255,255,0.05) 8px, rgba(255,255,255,0.05) 16px); pointer-events: none; }
        .card-content { position: relative; z-index: 1; }
        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .card-tag { font-family: 'Jost', sans-serif; font-weight: 700; font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 6px 10px; border-radius: 999px; }
        .tag-on-dark { background: #FFD600; color: #0A0A0A; }
        .tag-on-yellow { background: #0A0A0A; color: #fff; }
        .card-status { font-family: 'Jost', sans-serif; font-weight: 600; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; opacity: 0.85; }
        .card-num { font-family: 'Bebas Neue', sans-serif; font-size: 72px; line-height: 1; opacity: 0.14; margin-bottom: -16px; }
        .card-name { font-family: 'Bebas Neue', sans-serif; font-size: 36px; margin-bottom: 16px; }
        .card-desc { font-family: 'Jost', sans-serif; font-size: 1rem; line-height: 1.75; margin-bottom: 24px; opacity: 0.92; }
        .card-techs { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
        .tech-chip { font-family: 'Jost', sans-serif; font-weight: 600; font-size: 0.72rem; letter-spacing: 0.08em; padding: 8px 12px; border-radius: 999px; }
        .chip-dark { border: 1px solid rgba(255,255,255,0.18); color: #fff; }
        .chip-light { border: 1px solid rgba(10,10,10,0.14); color: #0A0A0A; }
        .card-cta { display: inline-flex; align-items: center; gap: 12px; font-family: 'Bebas Neue', sans-serif; font-size: 0.88rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .cta-arrow { width: 30px; height: 30px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; transition: transform 0.15s; }
        .product-card:hover .cta-arrow { transform: translateX(4px); }
        .cta-dark { background: #FFD600; color: #0A0A0A; }
        .cta-light { background: #0A0A0A; color: #FFD600; }
        .cta-red-accent { background: #fff; color: #D42030; }

        .stealth-banner { display: inline-flex; align-items: center; gap: 10px; background: var(--red); color: #fff; padding: 18px 22px; border-radius: 20px; font-family: 'Jost', sans-serif; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }

        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } }
        @media (max-width: 720px) { .inner { padding: 36px 20px 72px; } .products-grid { grid-template-columns: 1fr; } .hero-actions { flex-direction: column; } }
      `}</style>

      <div className="products-page">
        <section className="hero-panel">
          <div className="hero-shell">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="section-tag">PRODUCTS · {company.location}</div>
                <h1 className="hero-headline">
                  ALL<br />
                  <span className="hero-highlight">PRODUCTS</span>
                </h1>
                <p className="hero-description">
                  Every product we build is designed for speed, growth, and polished user experiences — from enterprise tools to consumer apps.
                </p>
                <div className="hero-actions">
                  <a href="#products-grid" className="hero-btn-primary">Browse products</a>
                  <a href="/careers" className="hero-btn-secondary">Join the team</a>
                </div>
              </div>
              <div className="hero-right">
                <div className="stats-card">
                  <p className="stats-eyebrow">RAFLAY MOMENTUM</p>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <p className="stat-val">4</p>
                      <p className="stat-lbl">In Development</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">2025</p>
                      <p className="stat-lbl">Founded</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">B2B</p>
                      <p className="stat-lbl">Enterprise focus</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">PAK</p>
                      <p className="stat-lbl">ISLAMABAD hub</p>
                    </div>
                  </div>
                </div>
                <div className="ticker-bar">
                  {['Software', 'Mobile', 'AI', 'Video', 'Cloud', 'Design'].map((label) => (
                    <span key={label} className="ticker-item">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="inner" id="products-grid">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Products</span>
          </nav>

          <div className="page-tag">PRODUCT PORTFOLIO</div>
          <h2 className="page-title">
            PRODUCT<br />
            <em>SHOWCASE</em>
          </h2>
          <p className="page-subtitle">
            Explore the products we’ve built and continue to evolve. Each one is created for clear business value and exceptional usability.
          </p>

          <div className="products-grid">
            {products.map((project, index) => {
              const isYellow = project.color === 'yellow';
              const isRed = project.color === 'red';
              return (
                <Link
                  key={project.id}
                  href={`/products/${project.id}`}
                  className={`product-card ${isYellow ? 'card-yellow' : isRed ? 'card-red' : 'card-black'}`}
                >
                  {!isYellow && !isRed && <div className="card-stripe" />}
                  <div className="card-content">
                    <div className="card-top">
                      <span className={`card-tag ${isYellow ? 'tag-on-yellow' : 'tag-on-dark'}`}>
                        {project.tag}
                      </span>
                      <span className="card-status">{project.status}</span>
                    </div>
                    <p className="card-num">0{index + 1}</p>
                    <h3 className="card-name">{project.name}</h3>
                    <p className="card-desc">{project.description}</p>
                    <div className="card-techs">
                      {project.tech.map((tech) => (
                        <span key={tech} className={`tech-chip ${isYellow ? 'chip-light' : 'chip-dark'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="card-cta">
                      VIEW DETAILS
                      <span className={`cta-arrow ${isYellow ? 'cta-light' : isRed ? 'cta-red-accent' : 'cta-dark'}`}>
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="stealth-banner">
            <span>⚡</span>
            <span>MORE PRODUCTS ARE IN STEALTH MODE — STAY TUNED.</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
