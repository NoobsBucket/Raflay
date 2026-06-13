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
          background: #FFFFFF;
          color: #161618;
          font-family: 'Jost', sans-serif;
        }

        .careers-page {
          min-height: 100vh;
          background: #FFFFFF;
          padding: 80px 24px 96px;
          position: relative;
          overflow: hidden;
        }

        .bg-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,32,48,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,32,48,0.06) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        .inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          background: #FFFFFF;
          border: 1px solid rgba(22,22,24,0.08);
          border-radius: 32px;
          box-shadow: 0 40px 120px rgba(0,0,0,0.08);
          padding: 64px 40px 80px;
          overflow: hidden;
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
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.74rem;
          color: #D42030;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid rgba(212,32,48,0.18);
          padding: 7px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
          background: rgba(212,32,48,0.08);
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(56px, 7vw, 100px);
          line-height: 0.92;
          letter-spacing: 0.02em;
          margin-bottom: 22px;
          max-width: 840px;
        }

        .page-title em {
          color: #FFD600;
          font-style: normal;
        }

        .page-subtitle {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: #5c5a56;
          line-height: 1.75;
          max-width: 700px;
          margin-bottom: 64px;
        }

        /* ── Stats row ── */
        .stats-row {
          display: flex;
          gap: 0;
          border: 1.5px solid rgba(22,22,24,0.08);
          border-radius: 28px;
          overflow: hidden;
          margin-bottom: 64px;
          background: #F7F4F1;
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
        }
        .stat-item {
          flex: 1;
          padding: 28px 32px;
          border-right: 1.5px solid rgba(22,22,24,0.08);
          text-align: center;
        }
        .stat-item:last-child { border-right: none; }
        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          letter-spacing: 0.03em;
          color: #FFD600;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9f9f9f;
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
          background: #FFFFFF;
          border: 1.5px solid rgba(22,22,24,0.08);
          border-radius: 28px;
          padding: 34px 36px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 24px;
          align-items: flex-start;
          text-decoration: none;
          color: inherit;
          position: relative;
          overflow: hidden;
          transition: border-color 0.18s, transform 0.18s, box-shadow 0.18s;
        }
        .job-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 5px;
          background: linear-gradient(90deg, #FFD600 0%, #D42030 100%);
        }
        .job-card:hover {
          border-color: rgba(212,32,48,0.5);
          transform: translateY(-3px);
          box-shadow: 0 28px 80px rgba(0,0,0,0.22);
        }
        .job-card:hover::before {
          background: linear-gradient(90deg, #FFD600 0%, #D42030 100%);
        }

        .job-left { display: flex; flex-direction: column; gap: 14px; }

        .job-tags {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .job-dept {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 999px;
          background: #D42030;
          color: #fff;
        }

        .job-type {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1.5px solid rgba(22,22,24,0.08);
          color: #5c5a56;
          background: #F7F4F1;
        }

        .job-location-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5c5a56;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #F7F4F1;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(22,22,24,0.08);
        }

        .job-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(32px, 4vw, 48px);
          letter-spacing: 0.02em;
          line-height: 1;
          color: #161618;
          margin: 0;
        }

        .job-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.98rem;
          font-weight: 400;
          color: #5c5a56;
          line-height: 1.8;
          max-width: 760px;
        }

        .job-right {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
          justify-content: flex-end;
        }

        .apply-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFD600;
          color: #0A0A0A;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
        }
        .apply-btn:hover { opacity: 0.95; transform: translateY(-1px); }

        .arrow-box {
          width: 46px;
          height: 46px;
          border: 1.5px solid rgba(22,22,24,0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5c5a56;
          font-size: 1rem;
          transition: border-color 0.15s, color 0.15s, transform 0.15s;
          flex-shrink: 0;
        }
        .job-card:hover .arrow-box {
          border-color: #FFD600;
          color: #FFD600;
          transform: translateY(-1px);
        }

        /* ── Perks section ── */
        .perks-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 64px;
        }

        .perk-card {
          background: #FFFFFF;
          border: 1.5px solid rgba(22,22,24,0.08);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-height: 220px;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .perk-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 24px 72px rgba(0,0,0,0.22);
        }

        .perk-icon {
          font-size: 1.8rem;
          line-height: 1;
        }

        .perk-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: 0.04em;
          color: #161618;
        }

        .perk-desc {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: #5c5a56;
          line-height: 1.65;
        }

        /* ── CTA banner ── */
        .cta-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #FFFFFF;
          border: 1.5px solid rgba(212,32,48,0.18);
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          padding: 32px 34px;
          border-radius: 28px;
        }
        .cta-banner-left { display: flex; flex-direction: column; gap: 8px; }
        .cta-banner-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 3vw, 36px);
          letter-spacing: 0.03em;
          color: #161618;
          line-height: 1.05;
          margin: 0;
        }
        .cta-banner-sub {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #5c5a56;
          margin: 0;
          line-height: 1.8;
        }
        .cta-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #D42030;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 0.82rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 14px 20px;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s;
        }
        .cta-email-btn:hover { opacity: 0.95; transform: translateY(-1px); }

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
            We&apos;re a small team with big ambitions. If you love building software that
            actually matters, you&apos;ll fit right in.
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
              { icon: "💡", title: "Build to Last", desc: "We don&apos;t cut corners. Every product is built with care, performance, and longevity in mind." },
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
              <p className="cta-banner-title">DON&apos;T SEE YOUR ROLE?</p>
              <p className="cta-banner-sub">Send us an open application — we&apos;re always openly looking for exceptional people.</p>
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