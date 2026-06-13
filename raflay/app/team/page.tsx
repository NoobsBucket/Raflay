import Link from "next/link";
import { company, team } from "../data/content";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TeamCard from "../components/teamcard";

export default function TeamPage() {
  const founders = team.filter((member) => member.isFounder);
  const members = team.filter((member) => !member.isFounder);

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
          --surface-strong: rgba(255,255,255,0.12);
          --text: #f7f5f0;
          --text-muted: #c8c5c0;
        }

        .team-page { background: var(--bg); color: var(--text); }
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

        .section-label { display: flex; align-items: center; gap: 14px; margin-bottom: 26px; }
        .section-label-text { font-family: 'Jost', sans-serif; font-weight: 700; font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-muted); }
        .section-label-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }

        .founders-grid { display: grid; grid-template-columns: repeat(2, minmax(360px, 1fr)); gap: 28px; margin-bottom: 56px; }
        .members-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-bottom: 56px; }

        .hiring-banner { background: var(--red); border-radius: 24px; padding: 26px 30px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
        .hiring-banner-left { display: flex; align-items: center; gap: 16px; }
        .hiring-banner-text { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; color: #fff; margin: 0; }
        .hiring-banner-sub { font-family: 'Jost', sans-serif; font-size: 0.92rem; color: rgba(255,255,255,0.88); margin: 0; }
        .hiring-btn { display: inline-flex; align-items: center; justify-content: center; padding: 14px 24px; border-radius: 999px; background: #090909; color: #fff; font-family: 'Bebas Neue', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; }

        @media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; } .founders-grid { grid-template-columns: 1fr; } }
        @media (max-width: 720px) { .inner { padding: 36px 20px 72px; } .founders-grid, .members-grid { grid-template-columns: 1fr; } .hero-actions { flex-direction: column; } }
      `}</style>

      <div className="team-page">
        <section className="hero-panel">
          <div className="hero-shell">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="section-tag">TEAM · {company.location}</div>
                <h1 className="hero-headline">
                  MEET<br />
                  <span className="hero-highlight">THE TEAM</span>
                </h1>
                <p className="hero-description">
                  Small, focused teams build the best products. We ship with intention, own our craft, and help each other move faster.
                </p>
                <div className="hero-actions">
                  <a href="#team-roster" className="hero-btn-primary">See the team</a>
                  <a href="/careers" className="hero-btn-secondary">Join us</a>
                </div>
              </div>
              <div className="hero-right">
                <div className="stats-card">
                  <p className="stats-eyebrow">OUR FORCE</p>
                  <div className="stats-grid">
                    <div className="stat-card">
                      <p className="stat-val">{team.length}</p>
                      <p className="stat-lbl">Team members</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">2</p>
                      <p className="stat-lbl">Founders</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">5</p>
                      <p className="stat-lbl">Core leads</p>
                    </div>
                    <div className="stat-card">
                      <p className="stat-val">8</p>
                      <p className="stat-lbl">Open roles</p>
                    </div>
                  </div>
                </div>
                <div className="ticker-bar">
                  {['Leadership', 'Design', 'Engineering', 'Growth', 'Support', 'Product'].map((label) => (
                    <span key={label} className="ticker-item">{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="inner" id="team-roster">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Team</span>
          </nav>

          <div className="page-tag">THE PEOPLE</div>
          <h2 className="page-title">
            YOUR<br />
            <em>Raflay TEAM</em>
          </h2>
          <p className="page-subtitle">
            Meet the people who design, build, and ship our products. Every role is grounded in craft, clarity, and high ownership.
          </p>

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

          <div className="hiring-banner">
            <div className="hiring-banner-left">
              <span>⚡</span>
              <div>
                <p className="hiring-banner-text">We’re growing — join the team.</p>
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
