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

  // Generate initials from name
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
          background: #FFD600;
        }

        /* Founder variant */
        .team-card.founder-card {
          background: linear-gradient(135deg, #FFD600 0%, #F0C22B 100%);
          border-color: #FFD600;
          padding: 44px;
          min-height: 440px;
        }
        .team-card.founder-card::before {
          background: #0A0A0A;
        }
        .team-card.founder-card:hover {
          border-color: #FFD600;
          transform: translateY(-4px);
          box-shadow: 0 30px 90px rgba(212, 32, 48, 0.25);
        }
        .team-card.founder-card:hover::before {
          background: #0A0A0A;
        }

        .founder-accent {
          position: absolute;
          right: -32px;
          top: 28px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(212, 32, 48, 0.16);
          filter: blur(24px);
          pointer-events: none;
        }

        .founder-thumbnail {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          min-height: 260px;
          margin-bottom: 28px;
          background: #111;
          display: flex;
          align-items: flex-end;
          justify-content: start;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .founder-thumbnail::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.65));
        }
        .founder-thumbnail img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .founder-thumbnail-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0,0,0,0.35), rgba(10,10,10,0.85));
        }
        .founder-thumbnail-label {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(0,0,0,0.75);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.78rem;
        }
        .founder-thumbnail-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #D42030;
          box-shadow: 0 0 12px rgba(212, 32, 48, 0.6);
        }

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
        .founder-card .team-avatar {
          width: 120px;
          height: 120px;
          border-radius: 28px;
          border-color: rgba(10,10,10,0.2);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Default avatar (no image) */
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .founder-card .avatar-placeholder {
          background: rgba(10,10,10,0.12);
        }

        .avatar-initials {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: #FFD600;
          line-height: 1;
        }
        .founder-card .avatar-initials {
          color: #0A0A0A;
        }

        /* Header row */
        .team-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .team-meta { flex: 1; }

        .founder-badge {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.62rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
          background: #0A0A0A;
          color: #FFD600;
          margin-bottom: 6px;
        }

        .team-role {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FFD600;
          margin-bottom: 4px;
        }
        .founder-card .team-role {
          color: rgba(10,10,10,0.55);
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
          font-size: 2.4rem;
          color: #0A0A0A;
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
          color: rgba(10,10,10,0.7);
          font-size: 1rem;
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
        .team-email-link:hover { color: #FFD600; }
        .founder-card .team-email-link {
          color: rgba(10,10,10,0.7);
          border-top-color: rgba(10,10,10,0.16);
          font-size: 0.9rem;
        }
        .founder-card .team-email-link:hover {
          color: #0A0A0A;
        }

        .email-icon {
          flex-shrink: 0;
          opacity: 0.6;
        }
      `}</style>

      <div className={`team-card${isFounder ? " founder-card" : ""}`}>
        {isFounder && <div className="founder-accent" />}
        {isFounder && (
          <div className="founder-thumbnail">
            {member.image ? (
              <img src={member.image} alt={member.name} />
            ) : (
              <div className="founder-thumbnail-placeholder">
                <span className="founder-thumbnail-label">
                  <span className="founder-thumbnail-dot" />
                  Team founder
                </span>
              </div>
            )}
            <span className="founder-thumbnail-label">
              <span className="founder-thumbnail-dot" />
              Team founder
            </span>
          </div>
        )}
        <div className="team-header">
          {/* Avatar */}
          <div className="team-avatar">
            {member.image ? (
              <img src={member.image} alt={member.name} className="avatar-img" />
            ) : (
              <div className="avatar-placeholder">
                <span className="avatar-initials">{initials}</span>
              </div>
            )}
          </div>

          {/* Name + role */}
          <div className="team-meta">
            {isFounder && <span className="founder-badge">Founder</span>}
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
      </div>
    </>
  );
}