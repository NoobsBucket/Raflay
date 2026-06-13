import { Search, Pencil, Code2, Rocket, RefreshCw, FileVideo, Wand2, Film, CheckCircle } from "lucide-react";

const softwareSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    desc: "We start by understanding your business, goals, users, and constraints. Deep discovery means we build the right thing — not just build things right.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design",
    desc: "Wireframes, prototypes, and design systems that map out the full experience before a single line of code is written. No surprises later.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Build",
    desc: "Sprint-based engineering with regular demos and check-ins. Clean, documented, tested code shipped in transparent iterations.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    desc: "Production-ready deployments with monitoring, rollback plans, and zero-downtime releases. We stay on standby for every go-live.",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Iterate",
    desc: "Launch is not the end. We analyse real usage, gather feedback, and continuously improve the product based on what the data tells us.",
  },
];

const creativeSteps = [
  {
    icon: Search,
    step: "01",
    title: "Brief",
    desc: "We start with a deep brief — understanding your brand, audience, tone, references, and goals before touching the timeline.",
  },
  {
    icon: FileVideo,
    step: "02",
    title: "Raw Review",
    desc: "You share your raw footage, assets, or brief. We review everything, flag any gaps, and align on structure and narrative before editing begins.",
  },
  {
    icon: Wand2,
    step: "03",
    title: "Edit",
    desc: "Our editors cut, colour grade, add motion graphics, sound design, and transitions — crafting a polished first cut aligned to your brief.",
  },
  {
    icon: Film,
    step: "04",
    title: "Review",
    desc: "You review the first cut and share feedback. We go through up to two revision rounds to get every detail exactly right.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Deliver",
    desc: "Final files delivered in your required formats and resolutions — ready for YouTube, Instagram, TikTok, or broadcast.",
  },
];

interface Step {
  icon: React.ElementType;
  step: string;
  title: string;
  desc: string;
}

function StepGrid({ steps }: { steps: Step[] }) {
  return (
    <div className="proc-grid">
      {steps.map(({ icon: Icon, step, title, desc }) => (
        <div key={title} className="proc-card">
          <div className="proc-connector" />
          <p style={{
            fontSize: 12, fontWeight: 600, color: "var(--red)",
            letterSpacing: "0.08em", marginBottom: 16,
          }}>
            {step}
          </p>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: "var(--red-mist)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
          }}>
            <Icon size={22} color="var(--red)" strokeWidth={1.5} />
          </div>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#1A1A1A", marginBottom: 10 }}>
            {title}
          </p>
          <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.7, margin: 0 }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Process() {
  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }

        .proc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .proc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .proc-grid { grid-template-columns: repeat(5, 1fr); }
        }

        .proc-card {
          background: #fff;
          padding: 36px 28px;
          transition: background 0.2s;
          position: relative;
        }
        .proc-card:hover { background: var(--red-mist); }

        .proc-connector { display: none; }
        @media (min-width: 1024px) {
          .proc-connector {
            display: block;
            position: absolute;
            top: 52px; right: -1px;
            width: 24px; height: 1px;
            background: var(--border);
            z-index: 1;
          }
          .proc-card:last-child .proc-connector { display: none; }
        }

        .proc-divider {
          width: 100%;
          height: 1px;
          background: var(--border);
          margin: 80px 0;
        }

        .proc-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--red);
          background: var(--red-mist);
          border: 1px solid rgba(212,32,48,0.15);
          padding: 6px 14px;
          border-radius: 999px;
          margin-bottom: 24px;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Software & Development ── */}
        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          How we work
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, lineHeight: 1.15, color: "#1A1A1A", margin: 0 }}>
            Software development<br />
            <span style={{ color: "var(--red)" }}>process</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 380, margin: 0 }}>
            Every software project follows the same five-step process structured enough to stay on track, flexible enough to adapt as we learn.
          </p>
        </div>

        <StepGrid steps={softwareSteps} />

        <div className="proc-divider" />

        {/* ── Creative & Video ── */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600, lineHeight: 1.15, color: "#1A1A1A", margin: 0 }}>
            Video & creative<br />
            <span style={{ color: "var(--red)" }}>process</span>
          </h2>
          <p style={{ fontSize: 15, color: "#6B6B6B", lineHeight: 1.7, maxWidth: 380, margin: 0 }}>
            From raw footage to final delivery a clear five-step creative process that keeps every video project on brief, on time, and on brand.
          </p>
        </div>

        <StepGrid steps={creativeSteps} />

      </div>
    </section>
  );
}