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
          border-radius: 4px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.15s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #222;
          transition: background 0.15s;
        }
        .team-card:hover {
          border-color: #333;
          transform: translateY(-2px);
        }
        .team-card:hover::before {
          background: #FFD600;
        }

        /* Founder variant */
        .team-card.founder-card {
          background: #FFD600;
          border-color: #FFD600;
          padding: 36px;
        }
        .team-card.founder-card::before {
          background: #0A0A0A;
        }
        .team-card.founder-card:hover {
          border-color: #FFD600;
          transform: translateY(-3px);
        }
        .team-card.founder-card:hover::before {
          background: #0A0A0A;
        }

        /* Avatar */
        .team-avatar {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #2a2a2a;
          position: relative;
        }
        .founder-card .team-avatar {
          width: 80px;
          height: 80px;
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
          font-size: 1.65rem;
          letter-spacing: 0.03em;
          line-height: 1;
          color: #FAFAF5;
        }
        .founder-card .team-name {
          font-size: 2rem;
          color: #0A0A0A;
        }

        .team-bio {
          font-family: 'Jost', sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #777;
          line-height: 1.7;
          flex: 1;
        }
        .founder-card .team-bio {
          color: rgba(10,10,10,0.65);
          font-size: 0.95rem;
        }

        .team-email-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: #555;
          text-decoration: none;
          transition: color 0.12s;
          margin-top: auto;
          padding-top: 8px;
          border-top: 1px solid #1e1e1e;
          word-break: break-all;
        }
        .team-email-link:hover { color: #FFD600; }
        .founder-card .team-email-link {
          color: rgba(10,10,10,0.45);
          border-top-color: rgba(10,10,10,0.15);
          font-size: 0.82rem;
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