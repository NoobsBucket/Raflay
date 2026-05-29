// app/products/[id]/page.jsx
// Place this at: app/products/[id]/page.jsx

import Link from "next/link";

import { projects } from "../../data/content";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// ── Static extra detail per product ─────────────────────────────────────────
const productDetails = {
  1: {
    tagline: "Your entire pipeline. One place.",
    longDescription:
      "Raflay CRM is built for growing businesses that need more than a spreadsheet. Manage your entire sales pipeline, nurture leads, track communication history, and close deals faster — all in a single, clean interface designed for speed.",
    features: [
      { icon: "🎯", title: "Pipeline Management", desc: "Visual drag-and-drop pipelines so your team always knows where every deal stands." },
      { icon: "📬", title: "Lead Tracking", desc: "Capture leads from any source, auto-assign them, and track every interaction." },
      { icon: "📊", title: "Analytics Dashboard", desc: "Real-time reports on deal velocity, team performance, and revenue forecasts." },
      { icon: "🔗", title: "Integrations", desc: "Connect with email, calendar, and third-party tools your team already uses." },
      { icon: "🤖", title: "Automation", desc: "Set up workflows to follow up automatically and never let a deal go cold." },
      { icon: "🔒", title: "Role-based Access", desc: "Fine-grained permissions so every team member sees exactly what they need." },
    ],
    target: "Sales teams, agencies, and B2B businesses",
    timeline: "Q3 2025",
    accentColor: "#FFD600",
    bgColor: "#FFD600",
    cardColor: "#0A0A0A",
  },
  2: {
    tagline: "Get paid. Without the friction.",
    longDescription:
      "Raflay Pay makes invoicing and payments dead simple for freelancers and small businesses in emerging markets. Send professional invoices, accept online payments, and track what you're owed — in minutes, not days.",
    features: [
      { icon: "⚡", title: "Instant Invoicing", desc: "Create and send branded invoices in under 60 seconds from any device." },
      { icon: "💳", title: "Multi-method Payments", desc: "Accept cards, bank transfers, and local payment methods your clients already use." },
      { icon: "🌍", title: "Emerging Markets First", desc: "Built with Pakistan and South Asia in mind. Local currencies, local rails." },
      { icon: "📱", title: "Mobile First", desc: "Manage your money on the go with a native-feeling mobile app." },
      { icon: "📈", title: "Cash Flow Insights", desc: "See what's paid, what's pending, and what's overdue at a glance." },
      { icon: "🔔", title: "Auto Reminders", desc: "Automated follow-up reminders so you don't have to chase clients manually." },
    ],
    target: "Freelancers, consultants, and small businesses",
    timeline: "Q4 2025",
    accentColor: "#E8180C",
    bgColor: "#E8180C",
    cardColor: "#FAFAF5",
  },
  3: {
    tagline: "Support that actually scales.",
    longDescription:
      "Raflay Desk gives modern support teams an AI-powered backbone. Smart ticket routing gets the right issue to the right agent in seconds. AI-suggested responses let your team reply faster, without sacrificing quality.",
    features: [
      { icon: "🤖", title: "AI Ticket Routing", desc: "Machine learning automatically classifies and routes every incoming ticket." },
      { icon: "💬", title: "Smart Reply Suggestions", desc: "AI drafts responses based on your knowledge base so agents can reply in one click." },
      { icon: "📂", title: "Knowledge Base", desc: "Build a self-serve help center that deflects repetitive questions automatically." },
      { icon: "⚙️", title: "SLA Management", desc: "Set response and resolution targets and get alerted before an SLA is breached." },
      { icon: "📊", title: "Support Analytics", desc: "Track CSAT, response times, and ticket volume with clear, actionable dashboards." },
      { icon: "🔌", title: "Omnichannel Inbox", desc: "Email, chat, and social — all in one unified inbox your team will love." },
    ],
    target: "Customer support teams and SaaS companies",
    timeline: "Q1 2026",
    accentColor: "#FFD600",
    bgColor: "#0A0A0A",
    cardColor: "#FAFAF5",
  },
};

// ── generateStaticParams replaces getStaticPaths in the App Router ───────────
export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

// ── generateMetadata replaces <Head> / getStaticProps for metadata ───────────
export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === Number(params.id));
  return {
    title: project ? `${project.name} — Raflay` : "Product — Raflay",
  };
}

// ── Page component is now an async Server Component ─────────────────────────
// params is passed directly as a prop — no useRouter needed
export default async function ProductDetail({ params }) {
  const { id } = await params; // `await params` required in Next.js 15+

  const project = projects.find((p) => p.id === Number(id));
  const detail = productDetails[Number(id)];

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
          background: #0A0A0A;
          color: #FAFAF5;
          font-family: 'Jost', sans-serif;
        }

        .detail-page { min-height: 100vh; }

        .detail-hero {
          background: ${accentBg};
          color: ${heroText};
          padding: 80px 24px 72px;
          position: relative;
          overflow: hidden;
          border-bottom: 4px solid #0A0A0A;
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

        .detail-body { background: #0A0A0A; padding: 80px 24px 96px; }

        .body-inner { max-width: 1200px; margin: 0 auto; }

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
          color: #FFD600;
          margin-bottom: 16px;
        }

        .long-desc {
          font-family: 'Jost', sans-serif;
          font-size: 1.05rem;
          font-weight: 400;
          color: #BBBBAA;
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
          background: #111;
          border: 1.5px solid #222;
          border-radius: 4px;
          padding: 24px;
          transition: border-color 0.15s, transform 0.15s;
        }
        .feature-card:hover { border-color: #FFD600; transform: translateY(-2px); }

        .feature-icon { font-size: 1.8rem; margin-bottom: 12px; display: block; }

        .feature-title {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          margin-bottom: 8px;
          color: #FAFAF5;
        }

        .feature-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          color: #888;
          line-height: 1.65;
        }

        .sidebar { display: flex; flex-direction: column; gap: 20px; }

        .info-card {
          background: #111;
          border: 1.5px solid #222;
          border-radius: 4px;
          padding: 24px;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 14px 0;
          border-bottom: 1px solid #1e1e1e;
        }
        .info-row:last-child { border-bottom: none; padding-bottom: 0; }
        .info-row:first-child { padding-top: 0; }

        .info-label {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #555;
        }

        .info-value {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          color: #FAFAF5;
        }

        .status-pill {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(255,214,0,0.15);
          color: #FFD600;
          border: 1px solid rgba(255,214,0,0.3);
        }

        .tech-chips { display: flex; flex-wrap: wrap; gap: 6px; }

        .tech-chip {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.68rem;
          letter-spacing: 0.07em;
          padding: 4px 10px;
          border-radius: 3px;
          border: 1.5px solid #333;
          color: #FAFAF5;
        }

        .cta-strip {
          background: ${accentBg};
          border: 3px solid #0A0A0A;
          border-radius: 4px;
          padding: 36px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          box-shadow: 6px 6px 0 ${isYellow ? "#0A0A0A" : "#FFD600"};
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
          padding: 14px 28px;
          border-radius: 4px;
          text-decoration: none;
          border: 3px solid #0A0A0A;
          background: ${isYellow ? "#0A0A0A" : "#FFD600"};
          color: ${isYellow ? "#FAFAF5" : "#0A0A0A"};
          box-shadow: 4px 4px 0 ${isYellow ? "#FFD600" : "#0A0A0A"};
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
                <p className="section-label">// OVERVIEW</p>
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
                  <p className="section-label" style={{ marginBottom: 0 }}>// PRODUCT INFO</p>
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
                  <p className="section-label" style={{ marginBottom: 12 }}>// TECH STACK</p>
                  <div className="tech-chips">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="info-card" style={{ borderColor: "rgba(255,214,0,0.2)", background: "rgba(255,214,0,0.04)" }}>
                  <p className="section-label" style={{ marginBottom: 8 }}>// INTERESTED?</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.88rem", color: "#888", lineHeight: 1.65, marginBottom: 16 }}>
                    Want early access or to stay updated on this product?
                  </p>
                  <a href={`mailto:hello@raflay.com?subject=Interest in ${project.name}`} className="cta-btn" style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}>
                    GET IN TOUCH →
                  </a>
                </div>
              </div>
            </div>

            <div className="cta-strip">
              <p className="cta-text">WANT EARLY ACCESS TO {project.name.toUpperCase()}?</p>
              <a href={`mailto:hello@raflay.com?subject=Early Access - ${project.name}`} className="cta-btn">
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