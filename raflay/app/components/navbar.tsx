"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/team", label: "TEAM" },
    { href: "/careers", label: "CAREERS" },
  ];

  const isActive = (href: string) =>
    pathname === href && href !== "/#projects" && href !== "/#team";

  return (
    <>
      {/* Google Fonts – Jost */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;900&family=Bebas+Neue&display=swap');

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #0A0A0A;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 5px;
          transition: background 0.15s, border-color 0.15s;
        }
        .nav-link:hover {
          background: rgba(0,0,0,0.06);
        }

        .brutal-btn {
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.07em;
          border: 2px solid #0A0A0A;
          border-radius: 5px;
          box-shadow: 3px 3px 0 #0A0A0A;
          transition: box-shadow 0.12s, transform 0.12s;
          cursor: pointer;
        }
        .brutal-btn:hover {
          box-shadow: 1px 1px 0 #0A0A0A;
          transform: translate(2px, 2px);
        }

        /* Hamburger button */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 2px solid #0A0A0A;
          border-radius: 5px;
          cursor: pointer;
          padding: 8px;
          box-shadow: 2px 2px 0 #0A0A0A;
          transition: box-shadow 0.12s, transform 0.12s;
        }
        .hamburger:hover {
          box-shadow: 1px 1px 0 #0A0A0A;
          transform: translate(1px, 1px);
        }
        .hamburger span {
          display: block;
          height: 2px;
          background: #0A0A0A;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 67px; /* navbar height */
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(250,250,245,0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 2px solid #0A0A0A;
          flex-direction: column;
          padding: 24px;
          gap: 8px;
          z-index: 99;
          overflow-y: auto;
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mobile-menu.open {
          display: flex;
        }

        .mobile-nav-link {
          font-family: 'Jost', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #0A0A0A;
          text-decoration: none;
          padding: 14px 16px;
          border-radius: 5px;
          border: 2px solid transparent;
          transition: background 0.15s, border-color 0.15s;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: #FFD600;
          border-color: #0A0A0A;
        }
        .mobile-hire-btn {
          margin-top: 12px;
          font-family: 'Jost', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.07em;
          color: white;
          background: #E8180C;
          text-decoration: none;
          padding: 14px 20px;
          border: 2px solid #0A0A0A;
          border-radius: 5px;
          box-shadow: 4px 4px 0 #0A0A0A;
          text-align: center;
          transition: box-shadow 0.12s, transform 0.12s;
        }
        .mobile-hire-btn:hover {
          box-shadow: 2px 2px 0 #0A0A0A;
          transform: translate(2px, 2px);
        }

        /* Overlay behind menu on tablet+ */
        .menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 98;
        }
        .menu-overlay.open { display: block; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav
        style={{
          borderBottom: "3px solid #0A0A0A",
          background: "rgba(250,250,245,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#E8180C",
                  border: "3px solid #0A0A0A",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "3px 3px 0 #0A0A0A",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 20,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  R
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "0.05em",
                  color: "#0A0A0A",
                }}
              >
                RAFLAY
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: 4 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  background: isActive(link.href) ? "#FFD600" : "transparent",
                  border: isActive(link.href)
                    ? "2px solid #0A0A0A"
                    : "2px solid transparent",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/careers"
              className="brutal-btn"
              style={{
                background: "#E8180C",
                color: "white",
                padding: "8px 18px",
                marginLeft: 8,
                textDecoration: "none",
              }}
            >
              WE'RE HIRING →
            </Link>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>


      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-nav-link${isActive(link.href) ? " active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/careers"
          className="mobile-hire-btn"
          onClick={() => setMenuOpen(false)}
        >
          WE'RE HIRING →
        </Link>
      </div>


      <div
        className={`menu-overlay${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    
    </>
  );
}