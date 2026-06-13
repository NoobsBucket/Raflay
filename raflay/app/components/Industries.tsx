import { Monitor, ShoppingBag, Video, CreditCard, School, Store, Stethoscope, Truck, Building2, UtensilsCrossed } from "lucide-react";

const industries = [
  {
    icon: Monitor,
    name: "SaaS & Product",
    desc: "End-to-end product development for software companies building at scale.",
  },
  {
    icon: ShoppingBag,
    name: "eCommerce",
    desc: "Storefronts, inventory systems, and customer tools for modern retail.",
  },
  {
    icon: Video,
    name: "Media & Creators",
    desc: "Production, editing, and digital platforms for content-driven businesses.",
  },
  {
    icon: CreditCard,
    name: "Fintech",
    desc: "Secure, compliant financial tools built for emerging market needs.",
  },
  {
    icon: School,
    name: "Education",
    desc: "Attendance, management, and learning tools for schools and colleges.",
  },
  {
    icon: Store,
    name: "Retail & POS",
    desc: "Point-of-sale and inventory solutions for shops of every size.",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "Clinic management, patient records, and appointment systems.",
  },
  {
    icon: Truck,
    name: "Logistics",
    desc: "Fleet tracking, delivery management, and supply chain tools.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Property listings, CRM, and client management for agents and developers.",
  },
  {
    icon: UtensilsCrossed,
    name: "Hospitality",
    desc: "Booking, POS, and guest experience tools for restaurants and hotels.",
  },
];

export default function Industries() {
  return (
    <section className="w-full px-5 py-24 md:px-10 lg:px-16">
      <style>{`
        :root {
          --red: #D42030;
          --red-mist: #FBF0F1;
          --border: #EBEBEB;
        }
        .ind-card { transition: background 0.2s; }
        .ind-card:hover { background: var(--red-mist) !important; }

        .ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .ind-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 900px) {
          .ind-grid { grid-template-columns: repeat(5, 1fr); }
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <p style={{
          fontSize: 12, fontWeight: 600, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--red)", marginBottom: 16,
        }}>
          Who we work with
        </p>

        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 600,
          lineHeight: 1.15, color: "#1A1A1A", marginBottom: 16,
        }}>
          Built for industries<br />
          that <span style={{ color: "var(--red)" }}>move fast</span>
        </h2>

        <p style={{
          fontSize: 16, color: "#6B6B6B", lineHeight: 1.7,
          maxWidth: 480, marginBottom: 56,
        }}>
          We partner with teams across sectors that need software that scales —
          from early-stage companys to established operations.
        </p>

        <div className="ind-grid">
          {industries.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="ind-card" style={{ background: "#fff", padding: "32px 28px" }}>
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

      </div>
    </section>
  );
}