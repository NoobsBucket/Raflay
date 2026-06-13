import { 
  Globe, Layers, Server, Code2, Database, Smartphone, 
  Cloud, Palette, GitBranch, Container, Zap, Shield,
  Video, Film, Wand2, Monitor, Pen, Sparkles
} from "lucide-react";

const devTech = [
  { icon: Globe,       name: "Next.js",      desc: "Full-stack React framework for production-grade web apps." },
  { icon: Layers,      name: "React",         desc: "Component-based UI library for interactive interfaces." },
  { icon: Server,      name: "Node.js",       desc: "Fast, scalable server-side JavaScript runtime." },
  { icon: Code2,       name: "TypeScript",    desc: "Typed JavaScript for safer, more maintainable codebases." },
  { icon: Database,    name: "PostgreSQL",    desc: "Reliable relational database for complex data at scale." },
  { icon: Smartphone,  name: "React Native",  desc: "Cross-platform mobile apps from a single codebase." },
  { icon: Cloud,       name: "Vercel",        desc: "Zero-config deployment and edge hosting for web apps." },
  { icon: Palette,     name: "Tailwind CSS",  desc: "Utility-first CSS for building modern UIs fast." },
  { icon: GitBranch,   name: "Golang",        desc: "High-performance backend services built for concurrency." },
  { icon: Container,   name: "Docker",        desc: "Containerized environments for consistent deployments." },
  { icon: Zap,         name: "Electron",      desc: "Cross-platform desktop apps built with web technologies." },
  { icon: Shield,      name: "Cloudflare",    desc: "Global CDN, DNS, and security infrastructure." },
  { icon: Database,    name: "Redis",         desc: "In-memory data store for caching and real-time workloads." },
  { icon: Cloud,       name: "AWS",           desc: "Cloud infrastructure for storage, compute, and scaling." },
  { icon: Server,      name: "Nginx",         desc: "High-performance reverse proxy and web server." },
];

const creativeTech = [
  { icon: Video,       name: "Adobe Premiere Pro",    desc: "Industry-standard video editing for films, reels, and long-form content." },
  { icon: Film,        name: "After Effects",          desc: "Motion graphics and visual effects for broadcast and digital media." },
  { icon: Wand2,       name: "DaVinci Resolve",        desc: "Professional color grading and cinematic post-production." },
  { icon: Palette,     name: "Adobe Illustrator",      desc: "Vector graphics and brand identity design at any scale." },
  { icon: Monitor,     name: "Adobe Photoshop",        desc: "Photo editing, compositing, and digital artwork creation." },
  { icon: Pen,         name: "Figma",                  desc: "Collaborative UI/UX design and interactive prototyping." },
  { icon: Sparkles,    name: "Adobe XD",               desc: "Wireframing and user experience design for web and mobile." },
  { icon: Film,        name: "Cinema 4D",              desc: "3D modeling, animation, and motion graphics for high-end visuals." },
  { icon: Zap,         name: "Lottie / Rive",          desc: "Lightweight animations for web and mobile apps." },
  { icon: Palette,     name: "Canva Pro",              desc: "Fast social content, presentations, and branded assets." },
];

interface Tech {
  icon: React.ElementType;
  name: string;
  desc: string;
}

function TechGrid({ items }: { items: Tech[] }) {
  return (
    <div className="tech-grid">
      {items.map(({ icon: Icon, name, desc }) => (
        <div key={name} className="tech-card" style={{ background: "#fff", padding: "32px 28px" }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: "var(--red-mist)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
          }}>
            <Icon size={20} color="var(--red)" strokeWidth={1.5} />
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 6 }}>
            {name}
          </p>
          <p style={{ fontSize: 13, color: "#6B6B6B", lineHeight: 1.6 }}>
            {desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Technologies() {
  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }
        .tech-card { transition: background 0.2s; }
        .tech-card:hover { background: var(--red-mist) !important; }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .tech-grid { grid-template-columns: repeat(5, 1fr); }
        }
        .divider {
          width: 100%;
          height: 1px;
          background: var(--border);
          margin: 80px 0;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Software & Development ── */}
        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          Software & Development
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
          lineHeight: 1.15, color: "#1A1A1A", marginBottom: 16,
        }}>
          Technologies we<br />
          <span style={{ color: "var(--red)" }}>build with</span>
        </h2>
        <p style={{
          fontSize: 16, color: "#6B6B6B", lineHeight: 1.7,
          maxWidth: 480, marginBottom: 56,
        }}>
          Modern, battle-tested tools chosen for performance, reliability,
          and developer experience — not hype.
        </p>
        <TechGrid items={devTech} />

        <div className="divider" />

        {/* ── Creative & Design ── */}
        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          Creative & Design
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
          lineHeight: 1.15, color: "#1A1A1A", marginBottom: 16,
        }}>
          Tools we create<br />
          <span style={{ color: "var(--red)" }}>visuals with</span>
        </h2>
        <p style={{
          fontSize: 16, color: "#6B6B6B", lineHeight: 1.7,
          maxWidth: 480, marginBottom: 56,
        }}>
          From motion graphics and brand identity to UI design and video production —
          these are the tools behind every pixel we ship.
        </p>
        <TechGrid items={creativeTech} />

      </div>
    </section>
  );
}