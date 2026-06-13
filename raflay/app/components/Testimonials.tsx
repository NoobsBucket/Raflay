const testimonials = [
  {
    quote: "Raflay rebuilt our platform, improved reliability, and delivered a DevOps pipeline that keeps releases smooth and secure.",
    name: "Farha Saeed",
    role: "VP Engineering",
    company: "AzeemCosmetic",
    initials: "FS",
  },
  {
    quote: "The video editing team made our campaign look premium, and the turnaround time was excellent. They understood our brand instantly.",
    name: "Saad Bakkey",
    role: "Creative Director",
    company: "Saad Bakkey",
    initials: "SB",
  },
  {
    quote: "We needed a prodcut managment admin pael. Raflay delivered with clear communication and strong technical expertise.",
    name: "RehanCosmetic",
    role: "Founder",
    company: "Azeem Cosmetic",
    initials: "AC",
  },
  {
    quote: "Our e-commerce relaunch was quick, polished, and ready for scale. The team helped us improve conversion across the entire store.",
    name: "AtozMart",
    role: "Head of Growth",
    company: "AtozMart",
    initials: "AM",
  },
  {
    quote: "From software architecture to deployment, Raflay felt like an extension of our product team. Responsive, reliable, and technically sharp.",
    name: "Tech Product Lead",
    role: "Software Product",
    company: "WealthBridge",
    initials: "WB",
  },
  {
    quote: "We handed Raflay a messy codebase and a tight deadline. They cleaned it up, shipped on time, and left us with something we're proud of.",
    name: "Ops Director",
    role: "Operations",
    company: "ArcProd",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }

        .test-dark {
          background: #0E0E0E;
          border-radius: 24px;
          padding: 72px 56px;
        }
        @media (max-width: 640px) {
          .test-dark { padding: 48px 24px; }
        }

        .test-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 56px;
        }
        @media (min-width: 640px) {
          .test-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .test-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .test-card {
          background: #1A1A1A;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: border-color 0.2s, background 0.2s;
        }
        .test-card:hover {
          border-color: rgba(212,32,48,0.35);
          background: #1F1414;
        }

        .test-quote-mark {
          font-size: 48px;
          line-height: 1;
          color: var(--red);
          font-family: Georgia, serif;
          margin-bottom: -12px;
        }

        .test-quote {
          font-size: 14px;
          color: #C8C8C8;
          line-height: 1.8;
          margin: 0;
          flex: 1;
        }

        .test-divider {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.07);
        }

        .test-avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--red);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 600; color: #fff;
          flex-shrink: 0;
        }

        .test-name {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 2px;
        }

        .test-role {
          font-size: 12px;
          color: #666;
          margin: 0;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="test-dark">

          {/* Header */}
          <p style={{
            fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
          }}>
            Client stories
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", alignItems: "flex-end", gap: 24,
          }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
              lineHeight: 1.15, color: "#fff", margin: 0, maxWidth: 560,
            }}>
              What our clients say about{" "}
              <span style={{ color: "var(--red)" }}>working with us</span>
            </h2>

            <p style={{
              fontSize: 15, color: "#666", lineHeight: 1.7,
              maxWidth: 340, margin: 0,
            }}>
              Trusted by teams across software, DevOps, AI, and creative services.
            </p>
          </div>

          {/* Cards */}
          <div className="test-grid">
            {testimonials.map(({ quote, name, role, company, initials }) => (
              <div key={name} className="test-card">
                <div className="test-quote-mark">"</div>
                <p className="test-quote">{quote}</p>
                <div className="test-divider" />
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="test-avatar">{initials}</div>
                  <div>
                    <p className="test-name">{name}</p>
                    <p className="test-role">{role} · {company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}