"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/",         label: "Home" },
    { href: "/blog",     label: "All" },
    { href: "/services", label: "Services" },
    { href: "/blog",     label: "Blog" },
    { href: "/products", label: "Products" },
    { href: "/team",     label: "Team" },
    { href: "/careers",  label: "Careers" },
  ];

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=DM+Serif+Display&display=swap');

        :root {
          --red: #D42030;
          --red-deep: #A8192A;
          --red-light: #FEF2F3;
          --red-mist: rgba(212,32,48,0.06);
          --border: rgba(0,0,0,0.08);
          --text-dark: #111111;
          --text-muted: #666666;
        }

        .nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 6px 13px;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: color 0.15s, background 0.15s;
        }
        .nav-link:hover { color: var(--text-dark); background: var(--red-mist); }
        .nav-link.active {
          color: var(--red);
          background: var(--red-light);
          font-weight: 600;
        }

        .pill-badge {
          font-size: 10px;
          font-weight: 600;
          color: var(--red);
          background: var(--red-light);
          border: 1px solid rgba(212,32,48,0.2);
          border-radius: 99px;
          padding: 2px 8px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .btn-hire {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          background: var(--red);
          border: none;
          border-radius: 9px;
          padding: 9px 18px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 1px 2px rgba(212,32,48,0.25);
          transition: background 0.15s, transform 0.1s;
        }
        .btn-hire:hover { background: var(--red-deep); transform: translateY(-1px); }

        .ham-btn {
          width: 34px; height: 34px;
          border-radius: 7px;
          border: 1px solid var(--border);
          background: transparent;
          display: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          cursor: pointer;
        }
        .ham-line {
          width: 15px; height: 1.5px;
          background: var(--text-dark);
          border-radius: 2px;
          transition: transform 0.22s, opacity 0.22s;
          transform-origin: center;
        }
        .ham-btn.open .ham-line:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .ham-btn.open .ham-line:nth-child(2) { opacity: 0; }
        .ham-btn.open .ham-line:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        .mobile-drawer {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0; bottom: 0;
          background: #fff;
          border-top: 1px solid var(--border);
          flex-direction: column;
          padding: 12px 16px 32px;
          gap: 2px;
          z-index: 99;
          overflow-y: auto;
          animation: fadeSlide 0.18s ease;
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-drawer.open { display: flex; }

        .mob-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          text-decoration: none;
          padding: 11px 14px;
          border-radius: 9px;
          transition: background 0.15s, color 0.15s;
        }
        .mob-link:hover { background: var(--red-mist); color: var(--text-dark); }
        .mob-link.active { background: var(--red-light); color: var(--red); font-weight: 600; }

        .mob-cta {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background: var(--red);
          border: none;
          border-radius: 11px;
          padding: 14px 20px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.15s;
        }
        .mob-cta:hover { background: var(--red-deep); }

        @media (max-width: 768px) {
          .desktop-nav, .desktop-right { display: none !important; }
          .ham-btn { display: flex; }
        }
      `}</style>

      <nav style={{
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        boxShadow: scrolled ? "0 4px 24px rgba(212,32,48,0.1)" : "none",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "box-shadow 0.2s",
      }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32,
              background: "#D42030",
              borderRadius: 9,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 17, color: "#fff" }}>R</span>
            </div>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 21, color: "#111", letterSpacing: "-0.01em" }}>
              Raf<span style={{ color: "#D42030" }}>lay</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className={`nav-link${isActive(link.href) ? " active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="desktop-right" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="pill-badge">Hiring</span>
            <Link href="/careers" className="btn-hire">
              We're hiring
              <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="#fff" strokeWidth="2.2">
                <path d="M4 10h12M11 5l5 5-5 5"/>
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`ham-btn${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <div className="ham-line" />
            <div className="ham-line" />
            <div className="ham-line" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href} className={`mob-link${isActive(link.href) ? " active" : ""}`} onClick={() => setMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/careers" className="mob-cta" onClick={() => setMenuOpen(false)}>
          We're hiring →
        </Link>
      </div>
    </>
  );
}