'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Web Development",
    q: "What is web development?",
    a: "Web development is the process of building websites and web applications using programming, design, and server-side technologies. We build everything from landing pages to complex full-stack platforms.",
  },
  {
    category: "Web Development",
    q: "Do you build responsive websites?",
    a: "Yes, every website we build is fully responsive and optimized for desktop, tablet, and mobile devices — no exceptions.",
  },
  {
    category: "Web Development",
    q: "Can you improve website performance and speed?",
    a: "Yes, we optimize performance through code improvements, asset compression, caching strategies, and faster hosting infrastructure.",
  },
  {
    category: "Web Development",
    q: "Can you migrate my website to a new platform?",
    a: "Yes, we migrate websites from older platforms to modern frameworks while preserving all content, URLs, and SEO value.",
  },
  {
    category: "Web Development",
    q: "Do you optimize websites for SEO?",
    a: "Yes, we apply SEO best practices including fast page speed, structured content, metadata, sitemap generation, and mobile optimization.",
  },
  {
    category: "Web Development",
    q: "Will my website be secure?",
    a: "Yes, we implement security best practices including HTTPS, firewall rules, secure deployments, input validation, and regular dependency updates.",
  },
  {
    category: "Software Development",
    q: "What is custom software development?",
    a: "Custom software development builds tailored solutions for your unique business needs, workflows, and growth goals — instead of forcing your business into off-the-shelf tools that don't quite fit.",
  },
  {
    category: "Software Development",
    q: "How long does a custom software project take?",
    a: "It depends on scope and complexity. A focused MVP typically takes 6–12 weeks. Larger platforms with multiple integrations can take 3–6 months. We define a clear timeline before any work begins.",
  },
  {
    category: "Software Development",
    q: "Do you provide post-launch support?",
    a: "Yes, we offer ongoing maintenance and support plans to keep your product secure, updated, and performing well long after launch.",
  },
  {
    category: "Software Development",
    q: "Do you offer managed hosting?",
    a: "Yes, we offer managed hosting services to keep your application stable, secure, and available around the clock with monitoring and automated alerts.",
  },
  {
    category: "AI Development",
    q: "What is AI development?",
    a: "AI development uses machine learning, data automation, and intelligent workflows to make software smarter — reducing manual work and surfacing insights your team would otherwise miss.",
  },
  {
    category: "AI Development",
    q: "Can you integrate AI into my existing app?",
    a: "Yes, we can add AI features like chatbots, recommendation engines, analytics automation, document processing, and smart data workflows to your existing product.",
  },
  {
    category: "AI Development",
    q: "Can you automate business workflows with AI?",
    a: "Yes, we build AI-powered automation that reduces manual work, speeds up approvals, handles repetitive tasks, and improves customer interactions at scale.",
  },
  {
    category: "Video & Design",
    q: "What video editing services do you offer?",
    a: "We edit YouTube videos, social media reels, promotional content, corporate videos, and product demos — including transitions, color grading, motion graphics, and sound design.",
  },
  {
    category: "Video & Design",
    q: "Can you produce social media content?",
    a: "Yes, we create short-form video edits, reels, and promotional clips optimized for YouTube, Instagram, TikTok, and LinkedIn.",
  },
  {
    category: "Video & Design",
    q: "Do you create motion graphics?",
    a: "Yes, we design animated intros, lower thirds, logo animations, explainer sequences, and full motion graphic packages for brands and products.",
  },
  {
    category: "Video & Design",
    q: "What graphic design services do you offer?",
    a: "We cover brand identity, logo design, social media assets, marketing materials, UI design, and pitch deck design — everything your brand needs to look professional.",
  },
];

const categories = ["All", "Web Development", "Software Development", "AI Development", "Video & Design"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }

        .faq-filter-btn {
          font-size: 13px;
          font-weight: 500;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: #fff;
          color: #6B6B6B;
          cursor: pointer;
          transition: all 0.15s;
          white-space: nowrap;
        }
        .faq-filter-btn:hover {
          border-color: #f5c5c8;
          color: var(--red);
          background: var(--red-mist);
        }
        .faq-filter-btn.active {
          background: var(--red);
          color: #fff;
          border-color: var(--red);
        }

        .faq-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          transition: border-color 0.2s;
        }
        .faq-item:hover { border-color: #f5c5c8; }
        .faq-item.open { border-color: #f5c5c8; }

        .faq-btn {
          width: 100%;
          text-align: left;
          padding: 22px 24px;
          font-size: 15px;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
          color: #1A1A1A;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          line-height: 1.4;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--red-mist);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .faq-item.open .faq-icon { background: var(--red); }

        .faq-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease;
          opacity: 0;
        }
        .faq-body.open {
          max-height: 300px;
          opacity: 1;
        }
        .faq-body-inner {
          padding: 0 24px 22px;
          font-size: 14px;
          color: #6B6B6B;
          line-height: 1.75;
          border-top: 1px solid var(--border);
          padding-top: 16px;
        }

        .faq-grid {
          display: grid;
          gap: 10px;
        }
        @media (min-width: 900px) {
          .faq-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          FAQ
        </p>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
          lineHeight: 1.15, color: "#1A1A1A", marginBottom: 16,
        }}>
          Questions we get<br />
          <span style={{ color: "var(--red)" }}>asked a lot</span>
        </h2>

        <p style={{
          fontSize: 16, color: "#6B6B6B", lineHeight: 1.7,
          maxWidth: 480, marginBottom: 40,
        }}>
          Everything you need to know about working with Raflay —
          from how we build to what we charge.
        </p>

        {/* Filter tabs */}
        <div style={{
          display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40,
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`faq-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ grid */}
        <div className="faq-grid">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q} className={`faq-item${isOpen ? " open" : ""}`}>
                <button
                  className="faq-btn"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">
                    {isOpen
                      ? <Minus size={14} color="#fff" strokeWidth={2} />
                      : <Plus size={14} color="var(--red)" strokeWidth={2} />
                    }
                  </span>
                </button>
                <div className={`faq-body${isOpen ? " open" : ""}`}>
                  <div className="faq-body-inner">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}