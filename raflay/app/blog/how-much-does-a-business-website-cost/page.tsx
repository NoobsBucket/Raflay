import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  const slug = "how-much-does-a-business-website-cost";
  const title = "How much does a business website cost? — Pricing guide | Raflay";
  const description =
    "Detailed pricing guide for business websites: cost ranges, timelines, trade-offs, and how Raflay scopes and delivers web projects.";
  const url = `https://raflay.comm/blog/${slug}`;
  return {
    title,
    description,
    keywords: [
      "website cost",
      "website pricing",
      "business website",
      "web development",
      "Raflay",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `https://raflay.comm/og/${slug}.png`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://raflay.comm/og/${slug}.png`],
    },
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800;900&display=swap');
        :root{--red:#D42030;--text:#171717;--muted:rgba(23,23,23,0.68);} 
        .hero { background:#fff; padding:80px 24px 40px; border-bottom:4px solid var(--red); }
        .hero-inner{max-width:1200px;margin:0 auto}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(40px,6vw,72px);color:var(--text);line-height:0.95;margin-bottom:12px}
        .hero-sub{font-family:'Barlow Condensed',sans-serif;color:var(--muted);letter-spacing:0.04em;margin-bottom:18px}
        .article{max-width:900px;margin:48px auto;font-family:Barlow Condensed, sans-serif;color:var(--text);line-height:1.8}
      `}</style>

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-sub">Pricing · Web</p>
          <h1 className="hero-title">How much does a business website cost?</h1>
          <p className="hero-sub">A practical breakdown of costs, timelines and choices for companys and SMBs.</p>
        </div>
      </section>

      <main className="article">
        <div className="hero-inner">
          <article>
            <p>At Raflay — a software dev studio focused on building reliable web products — we get asked daily: “How much does a business website cost?” The honest answer is: it depends. In this extended guide we explain not only price ranges but the reasoning, common pitfalls, and a reproducible way to scope your next web project with confidence.</p>

            <h2>Project categories and more granular ranges</h2>
            <p>Breaking projects down into clearer buckets helps set expectations. Below we present realistic ranges with examples and when each makes sense.</p>
            <h3>Tier A — Landing & campaign sites</h3>
            <p>Scope: 1–6 pages, custom branding optional, analytics, contact forms, basic SEO. Great for short-term campaigns and product launches.</p>
            <p>Price: $800 – $4,500. Timeline: 1–4 weeks.</p>

            <h3>Tier B — Small business & marketing sites</h3>
            <p>Scope: Custom design, CMS integration (content updates), contact flows, light automation (email capture), and basic SEO optimizations.</p>
            <p>Price: $4,000 – $25,000 depending on integrations. Timeline: 4–12 weeks.</p>

            <h3>Tier C — Product sites / SaaS MVPs</h3>
            <p>Scope: Auth, user accounts, dashboards, billing, multi-environment deployments, and observability. These require sustained engineering efforts and product design investment.</p>
            <p>Price: $15,000 – $150,000+. Timeline: 3–9+ months.</p>

            <h2>Common hidden costs and how to avoid them</h2>
            <ul>
              <li><strong>Unscoped content:</strong> Lack of ready content (copy, images, video) can stall projects — budget for content creation or allocate time during discovery.</li>
              <li><strong>Unknown integrations:</strong> Third-party APIs with poor docs often require extra engineering time — include a spike to estimate integration work.</li>
              <li><strong>Polish and iteration:</strong> Polishing micro-interactions and accessibility can be underpriced — estimate a buffer (10–20%).</li>
            </ul>

            <h2>Detailed example: Building a $25k site</h2>
            <p>Consider a small business site with a marketing CMS, pricing page, signup flow, and analytics. A realistic allocation looks like:</p>
            <ul>
              <li>Discovery & UX: 2–3 weeks — research, user journeys, wireframes</li>
              <li>Design & visual system: 3–4 weeks — visual language, components, responsive layouts</li>
              <li>Frontend engineering: 4–6 weeks — Next.js implementation, responsive testing</li>
              <li>Backend & CMS: 2–3 weeks — headless CMS setup, forms, simple automations
              </li>
              <li>QA, performance tuning, launch: 1–2 weeks</li>
            </ul>

            <h2>Checklist: What to prepare before you start</h2>
            <ul>
              <li>Clear primary objective (lead generation, demos, ecommerce)</li>
              <li>Priority pages and required functionality</li>
              <li>Brand assets (logo, colors, fonts) and sample content</li>
              <li>Third-party integrations (payment, CRM, analytics)</li>
            </ul>

            <h2>FAQs</h2>
            <h3>Do I need a headless CMS?</h3>
            <p>Not always. For small brochure sites a traditional CMS or even markdown-driven site can be faster. For teams that regularly update content, a headless CMS (Sanity, Contentful, Strapi) pays back in faster content updates.</p>

            <h3>How does Raflay price ongoing maintenance?</h3>
            <p>We offer retainer options or ad-hoc hourly work. Typical retainers range from $500–$3,000/month depending on SLA and expected feature cadence.</p>

            <h2>Case study (anonymized)</h2>
            <p>A retail client launched a focused site with product pages and checkout integration. By prioritizing the checkout funnel and A/B testing CTA copy, conversions increased 48% within three months — the site paid for itself in less than six months.</p>

            <h2>Final recommendations and next steps</h2>
            <p>Scope conservatively and iterate. Start with a discovery sprint to define a prioritized backlog that maps to measurable outcomes (leads, signups, revenue). If you'd like, Raflay can run a 1-week discovery to produce a scoped proposal and a reliable fixed-price estimate.</p>

            <p>Contact us: <a href="mailto:hello@raflay.comm">hello@raflay.comm</a> — we’ll provide a short questionnaire and schedule a discovery call.</p>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": "https://raflay.comm/blog/how-much-does-a-business-website-cost",
                  },
                  headline:
                    "How much does a business website cost? — Pricing guide | Raflay",
                  description:
                    "Detailed pricing guide for business websites: cost ranges, timelines, trade-offs, and how Raflay scopes and delivers web projects.",
                  author: { "@type": "Organization", name: "Raflay" },
                  publisher: {
                    "@type": "Organization",
                    name: "Raflay",
                    logo: { "@type": "ImageObject", url: "https://raflay.comm/logo.png" },
                  },
                  url: "https://raflay.comm/blog/how-much-does-a-business-website-cost",
                }),
              }}
            />
          </article>
        </div>
      </main>

      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
