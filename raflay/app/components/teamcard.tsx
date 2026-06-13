// components/TeamCard.tsx
// Place this at: app/components/TeamCard.tsx

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  bio: string;
  isFounder: boolean;
  image?: string | null;
}

interface TeamCardProps {
  member?: TeamMember;
  variant?: "founder" | "default";
}

export default function TeamCard({ member, variant = "default" }: TeamCardProps) {
  if (!member) return null;

  const isFounder = variant === "founder";

  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <>
      <style>{`
        .team-card {
          background: #111;
          border: 1.5px solid #222;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
          position: relative;
          overflow: hidden;
          min-height: 360px;
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #222;
          transition: background 0.15s;
        }
        .team-card:hover {
          border-color: #333;
          transform: translateY(-4px);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .team-card:hover::before {
          background: #D42030;
        }

        /* ── Founder variant ── */
        .team-card.founder-card {
          background: #D42030;
          border-color: #D42030;
          padding: 0;
          min-height: 520px;
          gap: 0;
        }
        .team-card.founder-card::before {
          background: rgba(0,0,0,0.25);
          z-index: 1;
        }
        .team-card.founder-card:hover {
          border-color: #b8192a;
          transform: translateY(-4px);
          box-shadow: 0 30px 90px rgba(212, 32, 48, 0.4);
        }
        .team-card.founder-card:hover::before {
          background: rgba(0,0,0,0.25);
        }

        /* ── Founder photo block — no gradient, clean hard edge ── */
        .founder-thumbnail {
          position: relative;
          width: 100%;
          height: 380px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
          background: #1a1a1a;
        }
        .founder-thumbnail img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }
        /* no ::after gradient — clean hard cut between photo and red body */

        .founder-thumbnail-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1a1a1a;
        }

        /* pill sits top-left, well clear of the face */
        .founder-thumbnail-label {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,0.65);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.72rem;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .founder-thumbnail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          flex-shrink: 0;
        }

        /* ── Founder info body ── */
        .founder-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 22px 28px 28px;
          flex: 1;
        }

        .founder-badge {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 9px;
          border-radius: 3px;
          background: rgba(0,0,0,0.22);
          color: #fff;
          margin-bottom: 6px;
        }

        .team-role {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #D42030;
          margin-bottom: 4px;
        }
        .founder-card .team-role {
          color: rgba(255,255,255,0.65);
        }

        .team-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.95rem;
          letter-spacing: 0.03em;
          line-height: 1.05;
          color: #FAFAF5;
          margin: 0;
        }
        .founder-card .team-name {
          font-size: 2.2rem;
          color: #fff;
        }

        .team-bio {
          font-family: 'Jost', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: #c7c7c0;
          line-height: 1.75;
          flex: 1;
          margin: 0;
        }
        .founder-card .team-bio {
          color: rgba(255,255,255,0.75);
          font-size: 0.93rem;
        }

        .team-email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.06em;
          color: #aaa;
          text-decoration: none;
          transition: color 0.12s;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.08);
          word-break: break-all;
        }
        .team-email-link:hover { color: #D42030; }
        .founder-card .team-email-link {
          color: rgba(255,255,255,0.65);
          border-top-color: rgba(255,255,255,0.2);
          font-size: 0.9rem;
        }
        .founder-card .team-email-link:hover {
          color: #fff;
        }

        /* ── Default card: avatar ── */
        .team-avatar {
          width: 80px;
          height: 80px;
          border-radius: 22px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #2a2a2a;
          position: relative;
          background: #111;
        }
        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-initials {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: #D42030;
          line-height: 1;
        }

        .team-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .team-meta { flex: 1; }

        .email-icon {
          flex-shrink: 0;
          opacity: 0.6;
        }
      `}</style>

      <div className={`team-card${isFounder ? " founder-card" : ""}`}>

        {/* ── FOUNDER CARD ── */}
        {isFounder && (
          <>
            <div className="founder-thumbnail">
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <div className="founder-thumbnail-placeholder" />
              )}
              <span className="founder-thumbnail-label">
                <span className="founder-thumbnail-dot" />
                Team founder
              </span>
            </div>

            <div className="founder-body">
              <div>
                <span className="founder-badge">Founder</span>
                <p className="team-role">{member.role}</p>
                <h3 className="team-name">{member.name}</h3>
              </div>
              <p className="team-bio">{member.bio}</p>
              <a href={`mailto:${member.email}`} className="team-email-link">
                <svg className="email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 4L7 8L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {member.email}
              </a>
            </div>
          </>
        )}

        {/* ── DEFAULT CARD ── */}
        {!isFounder && (
          <>
            <div className="team-header">
              <div className="team-avatar">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="avatar-img" />
                ) : (
                  <div className="avatar-placeholder">
                    <span className="avatar-initials">{initials}</span>
                  </div>
                )}
              </div>
              <div className="team-meta">
                <p className="team-role">{member.role}</p>
                <h3 className="team-name">{member.name}</h3>
              </div>
            </div>
            <p className="team-bio">{member.bio}</p>
            <a href={`mailto:${member.email}`} className="team-email-link">
              <svg className="email-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="2.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4L7 8L13 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              {member.email}
            </a>
          </>
        )}

      </div>
    </>
  );
}