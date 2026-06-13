import { Target, Wrench, Zap, Users, BarChart3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Product-first thinking",
    desc: "We combine product strategy with engineering execution to deliver outcomes that actually move your business forward.",
  },
  {
    icon: Wrench,
    title: "Quality engineering",
    desc: "Maintainable code, automated tests, and built-in observability — every project is built to last, not just to ship.",
  },
  {
    icon: Zap,
    title: "Fast iterations",
    desc: "Sprint-based delivery and clear roadmaps keep momentum high and reduce risk at every stage.",
  },
  {
    icon: Users,
    title: "Dedicated teams",
    desc: "You work with the same engineers and designers throughout — no handoffs, no strangers mid-project.",
  },
  {
    icon: BarChart3,
    title: "Transparent progress",
    desc: "Weekly updates, shared dashboards, and open communication so you always know exactly where things stand.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term partnership",
    desc: "We don't disappear after launch. We stay involved, iterate, and grow alongside the products we build.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }
        .why-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 32px 28px;
          transition: border-color 0.2s, background 0.2s;
        }
        .why-card:hover {
          border-color: #f5c5c8;
          background: var(--red-mist);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (min-width: 900px) {
          .why-grid { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          Why Raflay
        </p>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
          lineHeight: 1.15, color: "#1A1A1A", marginBottom: 16,
        }}>
          What makes us<br />
          <span style={{ color: "var(--red)" }}>different</span>
        </h2>

        <p style={{
          fontSize: 16, color: "#6B6B6B", lineHeight: 1.7,
          maxWidth: 480, marginBottom: 56,
        }}>
          We're not just a dev shop. We're a team that cares about your product
          as much as you do — from the first line of code to long after launch.
        </p>

        {/* Cards */}
        <div className="why-grid">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="why-card">
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "var(--red-mist)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={22} color="var(--red)" strokeWidth={1.5} />
              </div>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 8 }}>
                {title}
              </p>
              <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}