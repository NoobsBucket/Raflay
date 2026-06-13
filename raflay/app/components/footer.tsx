import Link from "next/link";

const navLinks = [
  { href: "/",         label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/team",     label: "Team" },
  { href: "/careers",  label: "Careers" },
];

const contacts = [
  { label: "General",  email: "hello@raflay.comm" },
  { label: "Support",  email: "support@raflay.comm" },
  { label: "Sales",    email: "sales@raflay.comm" },
  { label: "Careers",  email: "hr@raflay.comm" },
];

const blogPosts = [
  { href: "/blog/how-much-does-a-business-website-cost",      label: "How much does a business website cost?" },
  { href: "/blog/nextjs-vs-react-which-is-better",            label: "Next.js vs React — which is better?" },
  { href: "/blog/how-to-grow-your-business-with-mobile-apps", label: "Grow your business with mobile apps" },
  { href: "/blog/video-editing-tips-for-youtube-creators",    label: "Video editing tips for creators" },
  { href: "/blog/logo-design-best-practices",                 label: "Logo design best practices" },
];

const socials = [
  { label: "LinkedIn",  href: "https://linkedin.com/company/raflay", color: "#0A66C2" },
  { label: "Instagram", href: "https://instagram.com/raflay",        color: "#E1306C" },
  { label: "GitHub",    href: "https://github.com/raflay",           color: "#fff" },
  { label: "Twitter",   href: "https://twitter.com/raflay",          color: "#1D9BF0" },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600&display=swap');

        :root { --red: #D42030; --red-mist: #FBF0F1; }

        .ft-col-label {
          font-family: 'Inter', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: #ffffff; margin-bottom: 20px;
        }

        .ft-nav-link {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px; font-weight: 400;
          color: #ffffff; text-decoration: none;
          margin-bottom: 12px;
          transition: color 0.15s;
        }
        .ft-nav-link::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #ffffff;
          flex-shrink: 0;
          transition: background 0.15s, transform 0.15s;
        }
        .ft-nav-link:hover { color: #fff; }
        .ft-nav-link:hover::before { background: var(--red); transform: scale(1.4); }

        .ft-email {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #fffcfc;
          text-decoration: none;
          transition: color 0.15s;
        }
        .ft-email:hover { color: #fff; }

        .ft-blog-link {
          display: flex; align-items: flex-start; gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 400;
          color: #ffffff; text-decoration: none;
          margin-bottom: 14px; line-height: 1.5;
          transition: color 0.15s;
        }
        .ft-blog-link::before {
          content: '→';
          color: #ffffff; font-size: 12px;
          flex-shrink: 0; margin-top: 1px;
          transition: color 0.15s, transform 0.15s;
          display: inline-block;
        }
        .ft-blog-link:hover { color: #fff; }
        .ft-blog-link:hover::before { color: var(--red); transform: translateX(3px); }

        .ft-social {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 500;
          color: #ffffff; text-decoration: none;
          padding: 7px 14px; border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: color 0.15s, border-color 0.15s, background 0.15s;
        }
        .ft-social:hover { border-color: rgba(255, 255, 255, 0.15); background: rgba(255,255,255,0.05); }

        .ft-social-dot {
          width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
        }

        .ft-legal-link {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #ffffff;
          text-decoration: none; transition: color 0.15s;
        }
        .ft-legal-link:hover { color: #fff; }

        .ft-email-badge {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 11px; font-weight: 600;
          padding: 3px 8px; border-radius: 4px;
          letter-spacing: 0.06em; text-transform: uppercase;
          margin-bottom: 5px;
        }

        .ft-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px; margin-bottom: 64px;
        }
        @media (max-width: 1024px) {
          .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 640px) {
          .ft-grid { grid-template-columns: 1fr; gap: 36px; }
          .ft-bottom { flex-direction: column !important; gap: 12px !important; text-align: center; }
        }
      `}</style>

      <footer style={{ background: "#0A0A0A", color: "#ffffff", marginTop: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 32px 40px" }}>

          {/* Top divider */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 64 }}>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#ffffff",
            }}>
              Raflay · Islamabad, Pakistan · Est. 2025
            </span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          </div>

          <div className="ft-grid">

            {/* Brand */}
            <div>
              <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 34, height: 34, background: "var(--red)",
                  borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 600, color: "#fff" }}>R</span>
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: "#fff", letterSpacing: "0.04em" }}>
                  Raf<span style={{ color: "var(--red)" }}>lay</span>
                </span>
              </Link>

              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: 14,
                color: "#ffffff", lineHeight: 1.8, maxWidth: 260, marginBottom: 12,
              }}>
                Building solutions that moves. B2B and B2C solutions crafted in Islamabad, Pakistan.
              </p>

              {/* Email badge */}
              <a href="mailto:hello@raflay.comm" style={{ textDecoration: "none", display: "inline-block", marginBottom: 28 }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13,
                  color: "#D42030", background: "rgba(212,32,48,0.1)",
                  padding: "6px 14px", borderRadius: 999,
                  border: "1px solid rgba(212,32,48,0.2)",
                  transition: "background 0.15s",
                }}>
                  hello@raflay.comm
                </span>
              </a>

              {/* Socials */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-social">
                    <span className="ft-social-dot" style={{ background: s.color }} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="ft-col-label">Navigation</p>
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="ft-nav-link">{l.label}</Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p className="ft-col-label">Contact</p>
              {contacts.map((c, i) => {
                const colors = [
                  { bg: "rgba(59,130,246,0.12)", text: "#60A5FA" },
                  { bg: "rgba(34,197,94,0.12)",  text: "#4ADE80" },
                  { bg: "rgba(249,115,22,0.12)", text: "#FB923C" },
                  { bg: "rgba(168,85,247,0.12)", text: "#C084FC" },
                ];
                const col = colors[i % colors.length];
                return (
                  <div key={c.email} style={{ marginBottom: 16 }}>
                    <span style={{
                      display: "inline-block",
                      fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      background: col.bg, color: col.text,
                      padding: "2px 8px", borderRadius: 4, marginBottom: 5,
                    }}>
                      {c.label}
                    </span>
                    <a href={`mailto:${c.email}`} className="ft-email" style={{ display: "block" }}>{c.email}</a>
                  </div>
                );
              })}
            </div>

            {/* Blog */}
            <div>
              <p className="ft-col-label">From the blog</p>
              {blogPosts.map((b) => (
                <Link key={b.href} href={b.href} className="ft-blog-link">{b.label}</Link>
              ))}
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 28 }}>
            <div className="ft-bottom" style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#ffffff" }}>
                © 2026 Raflay. All rights reserved.
              </p>
              <div style={{ display: "flex", gap: 24 }}>
                <Link href="/privacy" className="ft-legal-link">Privacy Policy</Link>
                <Link href="/terms" className="ft-legal-link">Terms of Service</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}