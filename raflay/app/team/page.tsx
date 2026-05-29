// app/team/page.tsx  (App Router)
// OR rename to pages/team/index.tsx for Pages Router — just swap the import paths

import Link from "next/link";
import { team } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TeamCard from "../components/teamcard";

export default function TeamPage() {
  const founders = team.filter((m) => m.isFounder);
  const members  = team.filter((m) => !m.isFounder);

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

        .team-page {
          min-height: 100vh;
          background: #0A0A0A;
          padding: 80px 24px 96px;
          position: relative;
          overflow: hidden;
        }

        /* Background grid — same as products page */
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
        }
        .section-label-line {
          flex: 1;
          height: 1px;
          background: #1e1e1e;
        }

        /* ── Founders row ── */
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
          margin-bottom: 56px;
        }

        /* ── Members grid ── */
        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 56px;
        }

        /* ── Hiring banner ── */
        .hiring-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: #FFD600;
          border: 3px solid #0A0A0A;
          box-shadow: 5px 5px 0 #0A0A0A;
          padding: 20px 28px;
          border-radius: 4px;
        }
        .hiring-banner-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hiring-banner-left span:first-child {
          font-size: 1.3rem;
        }
        .hiring-banner-text {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          color: #0A0A0A;
          text-transform: uppercase;
        }
        .hiring-banner-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.78rem;
          color: rgba(10,10,10,0.6);
          margin-top: 2px;
        }
        .hiring-btn {
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
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 3px;
          white-space: nowrap;
          transition: opacity 0.15s;
        }
        .hiring-btn:hover { opacity: 0.85; }

        @media (max-width: 700px) {
          .founders-grid { grid-template-columns: 1fr; }
          .members-grid  { grid-template-columns: 1fr; }
          .hiring-banner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="team-page">
        <div className="bg-grid" />

        <div className="inner">

          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Team</span>
          </nav>

          {/* Header */}
          <p className="page-tag">THE PEOPLE BEHIND RAFLAY</p>
          <h1 className="page-title">
            MEET<br />
            <em>THE TEAM</em>
          </h1>
          <p className="page-subtitle">
            A small, focused team building software that moves. Every person here
            owns their domain and ships with intention.
          </p>

          {/* Founders */}
          {founders.length > 0 && (
            <>
              <div className="section-label">
                <span className="section-label-text">Leadership</span>
                <span className="section-label-line" />
              </div>
              <div className="founders-grid">
                {founders.map((member) => (
                  <TeamCard key={member.id} member={member} variant="founder" />
                ))}
              </div>
            </>
          )}

          {/* Rest of the team */}
          {members.length > 0 && (
            <>
              <div className="section-label">
                <span className="section-label-text">Our HODs</span>
                <span className="section-label-line" />
              </div>
              <div className="members-grid">
                {members.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            </>
          )}

          {/* Hiring banner */}
          <div className="hiring-banner">
            <div className="hiring-banner-left">
              <span>⚡</span>
              <div>
                <p className="hiring-banner-text">We're growing — join the team.</p>
                <p className="hiring-banner-sub">Open roles across engineering, design & sales.</p>
              </div>
            </div>
            <Link href="/careers" className="hiring-btn">
              VIEW OPEN ROLES →
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}