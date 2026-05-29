import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        .footer-link {
          display: block;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          color: #E8E8E0;
          text-decoration: none;
          margin-bottom: 10px;
          font-size: 1rem;
          transition: color 0.15s;
        }
        .footer-link:hover {
          color: #FFD600;
        }
        .footer-email {
          font-family: 'Jost', sans-serif;
          font-weight: 600;
          color: #FFD600;
          text-decoration: none;
          font-size: 0.95rem;
          transition: opacity 0.15s;
        }
        .footer-email:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: center !important;
          }
        }
      `}</style>

      <footer
        style={{
          background: "#0A0A0A",
          color: "#FAFAF5",
          borderTop: "3px solid #FFD600",
          marginTop: 80,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "56px 24px 36px",
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: 48,
              marginBottom: 48,
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    background: "#E8180C",
                    border: "3px solid #FFD600",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "3px 3px 0 #FFD600",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    R
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 900,
                    fontSize: 30,
                    color: "#FAFAF5",
                    letterSpacing: "0.05em",
                  }}
                >
                  RAFLAY
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  color: "#BBBBAA",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  maxWidth: 280,
                }}
              >
                Building software that moves. B2B &amp; B2C solutions crafted in Islamabad, Pakistan.
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#FFD600",
                  marginTop: 20,
                  letterSpacing: "0.04em",
                }}
              >
                hello@raflay.com
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "#E8180C",
                  letterSpacing: "0.12em",
                  marginBottom: 18,
                }}
              >
                NAVIGATION
              </p>
              {[
                { href: "/", label: "Home" },
                { href: "/#projects", label: "Projects" },
                { href: "/#team", label: "Team" },
                { href: "/careers", label: "Careers" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  color: "#E8180C",
                  letterSpacing: "0.12em",
                  marginBottom: 18,
                }}
              >
                CONTACT
              </p>
              {[
                { label: "General", email: "hello@raflay.com" },
                { label: "Support", email: "support@raflay.com" },
                { label: "Sales", email: "sales@raflay.com" },
                { label: "Careers", email: "hr@raflay.com" },
              ].map((c) => (
                <div key={c.email} style={{ marginBottom: 14 }}>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.72rem",
                      color: "#888",
                      marginBottom: 3,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.label}
                  </p>
                  <a href={`mailto:${c.email}`} className="footer-email">
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="footer-bottom"
            style={{
              borderTop: "1px solid #2A2A2A",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                color: "#666",
                letterSpacing: "0.06em",
              }}
            >
              © 2026 RAFLAY. ALL RIGHTS RESERVED.
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 500,
                fontSize: "0.8rem",
                color: "#666",
                letterSpacing: "0.06em",
              }}
            >
              Islamabad, PAKISTAN
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}