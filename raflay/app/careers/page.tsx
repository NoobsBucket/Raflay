// app/careers/page.tsx  (App Router)
// OR pages/careers/index.tsx for Pages Router

import Link from "next/link";
import { jobs, company } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CareersPage() {
  const departments = [...new Set(jobs.map((j) => j.department))];

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

        .careers-page {
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
        .breadcrumb-sep { color: #444; font-size: 0.75rem; }
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
          color: #FFD600;
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

        /* ── Stats row ── */
        .stats-row {
          display: flex;
          gap: 0;
          border: 1.5px solid #222;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 64px;
        }
        .stat-item {
          flex: 1;
          padding: 24px 28px;
          border-right: 1.5px solid #222;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          letter-spacing: 0.03em;
          color: #FFD600;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
        }

        /* ── Section label ── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .section-label-text {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          white-space: nowrap;
        }
        .section-label-line {
          flex: 1;
          height: 1px;
          background: #1e1e1e;
        }

        /* ── Job cards ── */
        .jobs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 64px;
        }

        .job-card {
          background: #111;
          border: 1.5px solid #222;
          border-radius: 4px;
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 20px;
          align-items: center;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
          transition: border-color 0.15s, transform 0.15s;
        }
        .job-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #222;
          transition: background 0.15s;
        }
        .job-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }
        .job-card:hover::before {
          background: #FFD600;
        }

        .job-left { display: flex; flex-direction: column; gap: 10px; }

        .job-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .job-dept {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 2px;
          background: #FFD600;
          color: #0A0A0A;
        }

        .job-type {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 2px;
          border: 1.5px solid #2a2a2a;
          color: #666;
        }

        .job-location-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .job-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.9rem;
          letter-spacing: 0.03em;
          line-height: 1;
          color: #FAFAF5;
        }

        .job-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #666;
          line-height: 1.65;
          max-width: 600px;
        }

        .job-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #FFD600;
          color: #0A0A0A;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 3px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s;
        }
        .apply-btn:hover { opacity: 0.85; }

        .arrow-box {
          width: 40px;
          height: 40px;
          border: 1.5px solid #2a2a2a;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #444;
          font-size: 1rem;
          transition: border-color 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .job-card:hover .arrow-box {
          border-color: #FFD600;
          color: #FFD600;
        }

        /* ── Perks section ── */
        .perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }

        .perk-card {
          background: #111;
          border: 1.5px solid #222;
          border-radius: 4px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .perk-icon {
          font-size: 1.5rem;
          line-height: 1;
        }

        .perk-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          color: #FAFAF5;
        }

        .perk-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #666;
          line-height: 1.65;
        }

        /* ── CTA banner ── */
        .cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #FFD600;
          border: 3px solid #0A0A0A;
          box-shadow: 5px 5px 0 #0A0A0A;
          padding: 24px 32px;
          border-radius: 4px;
        }
        .cta-banner-left { display: flex; flex-direction: column; gap: 4px; }
        .cta-banner-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.03em;
          color: #0A0A0A;
          line-height: 1;
        }
        .cta-banner-sub {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: rgba(10,10,10,0.6);
        }
        .cta-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0A0A0A;
          color: #FFD600;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 20px;
          border-radius: 3px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s;
        }
        .cta-email-btn:hover { opacity: 0.85; }

        @media (max-width: 900px) {
          .perks-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-row { flex-wrap: wrap; }
          .stat-item { border-right: none; border-bottom: 1.5px solid #222; }
          .stat-item:last-child { border-bottom: none; }
        }
        @media (max-width: 640px) {
          .job-card { grid-template-columns: 1fr; }
          .job-right { justify-content: flex-start; }
          .perks-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; align-items: flex-start; }
          .stats-row { flex-direction: column; }
        }
      `}</style>

      <div className="careers-page">
        <div className="bg-grid" />

        <div className="inner">

          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Careers</span>
          </nav>

          {/* Header */}
          <p className="page-tag">JOIN THE TEAM</p>
          <h1 className="page-title">
            BUILD WITH<br />
            <em>RAFLAY</em>
          </h1>
          <p className="page-subtitle">
            We're a small team with big ambitions. If you love building software that
            actually matters, you'll fit right in.
          </p>

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-item">
              <p className="stat-num">{jobs.length}</p>
              <p className="stat-label">Open Roles</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">{departments.length}</p>
              <p className="stat-label">Departments</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">100%</p>
              <p className="stat-label">Remote Friendly</p>
            </div>
            <div className="stat-item">
              <p className="stat-num">{company.founded}</p>
              <p className="stat-label">Founded</p>
            </div>
          </div>

          {/* Jobs list */}
          <div className="section-label">
            <span className="section-label-text">Open Positions</span>
            <span className="section-label-line" />
          </div>

          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-left">
                  <div className="job-tags">
                    <span className="job-dept">{job.department}</span>
                    <span className="job-type">{job.type}</span>
                    <span className="job-location-tag">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1C3.34 1 2 2.34 2 4c0 2.5 3 6 3 6s3-3.5 3-6c0-1.66-1.34-3-3-3z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                        <circle cx="5" cy="4" r="1" fill="currentColor"/>
                      </svg>
                      {job.location}
                    </span>
                  </div>
                  <h2 className="job-title">{job.title}</h2>
                  <p className="job-desc">{job.description}</p>
                </div>
                <div className="job-right">
                  <a
                    href={`mailto:${company.email}?subject=Application for ${job.title}`}
                    className="apply-btn"
                  >
                    APPLY NOW
                  </a>
                  <div className="arrow-box">→</div>
                </div>
              </div>
            ))}
          </div>

          {/* Perks */}
          <div className="section-label">
            <span className="section-label-text">Why Raflay</span>
            <span className="section-label-line" />
          </div>

          <div className="perks-grid">
            {[
              { icon: "🚀", title: "Move Fast", desc: "No red tape. Ship real products, see real impact. Every person here owns their work end to end." },
              { icon: "🌍", title: "Remote First", desc: "Work from anywhere. Most roles are fully remote with optional on-site in Islamabad." },
              { icon: "📈", title: "Grow Fast", desc: "Early-stage means massive scope. You'll wear many hats and level up faster than anywhere else." },
              { icon: "🛠️", title: "Real Ownership", desc: "No tickets lost in backlogs. You build it, you own it, you improve it." },
              { icon: "🤝", title: "Small & Focused", desc: "A tight-knit team where your voice actually matters and decisions get made quickly." },
              { icon: "💡", title: "Build to Last", desc: "We don't cut corners. Every product is built with care, performance, and longevity in mind." },
            ].map((perk) => (
              <div key={perk.title} className="perk-card">
                <span className="perk-icon">{perk.icon}</span>
                <h3 className="perk-title">{perk.title}</h3>
                <p className="perk-desc">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="cta-banner">
            <div className="cta-banner-left">
              <p className="cta-banner-title">DON'T SEE YOUR ROLE?</p>
              <p className="cta-banner-sub">Send us an open application — we're always openly looking for exceptional people.</p>
            </div>
            <a href={`mailto:${company.email}?subject=Open Application`} className="cta-email-btn">
              ✉ GET IN TOUCH
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}