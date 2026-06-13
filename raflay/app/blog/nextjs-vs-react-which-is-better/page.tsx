import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  const slug = "nextjs-vs-react-which-is-better";
  const title = "Next.js vs React — Practical comparison for production apps | Raflay";
  const description =
    "In-depth comparison of Next.js and React for real-world projects, covering rendering modes, performance, migration strategies, and Raflay's recommendations.";
  const url = `https://raflay.comm/blog/${slug}`;
  return {
    title,
    description,
    keywords: ["Next.js", "React", "web development", "Raflay"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        { url: `https://raflay.comm/og/${slug}.png`, alt: title },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: [`https://raflay.comm/og/${slug}.png`] },
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
          <p className="hero-sub">Engineering · Frameworks</p>
          <h1 className="hero-title">Next.js vs React — Which is better?</h1>
          <p className="hero-sub">A pragmatic comparison for choosing the right stack for your product.</p>
        </div>
      </section>

      <main className="article">
        <div className="hero-inner">
          <article>
            <p>At Raflay we build production web apps and often choose the right tool based on product needs. React and Next.js are related but serve different roles: React is a UI library; Next.js is a framework that uses React and provides routing, rendering modes, and server-side features. Below we expand on trade-offs, performance characteristics, real-world metrics, and an actionable migration plan.</p>

            <h2>Core differences — deep dive</h2>
            <p>React provides the building blocks for UI but does not prescribe routing, data fetching, or rendering mode. Next.js supplies conventions and tooling: file-system routing, optimized image delivery, and multiple data-fetching strategies (SSR/SSG/ISR/SSR-with-cache).</p>

            <h2>Rendering modes and concrete trade-offs</h2>
            <ul>
              <li><strong>SSG (Static Site Generation):</strong> Very fast for public content; best for blogs and marketing pages. Pros: CDN-friendly, low server cost. Cons: rebuilds required for content updates unless ISR used.</li>
              <li><strong>ISR (Incremental Static Regeneration):</strong> Combines SSG speed with periodic updates. Good for catalogs and pages that update often but not every second.</li>
              <li><strong>SSR (Server-Side Rendering):</strong> Best for dynamic content that requires per-request personalization or up-to-date data. Pros: fresh content and SEO. Cons: higher server costs and complexity.</li>
              <li><strong>CSR (Client-Side Rendering):</strong> Use for dashboards or highly interactive apps where SEO isn't primary.</li>
            </ul>

            <h2>Performance metrics and expectations</h2>
            <p>From our projects, SSG pages with proper CDN caching typically show sub-200ms Time to First Byte (TTFB) when served from the edge. SSR pages vary more (200–600ms depending on data fetch complexity). Key optimizations Raflay enforces:</p>
            <ul>
              <li>Image optimization and lazy-loading</li>
              <li>Critical CSS and component-level code splitting</li>
              <li>Edge caching strategies for SSR responses</li>
            </ul>

            <h2>Migration pattern — practical steps</h2>
            <ol>
              <li>Audit existing React app to identify SEO pages and client-only pages.</li>
              <li>Introduce Next.js and route a small subset of pages (marketing or SEO pages) to the new framework.</li>
              <li>Iterate: move components, adopt data fetching hooks, and add caching strategies.</li>
            </ol>

            <h2>When React-only wins</h2>
            <p>For micro-frontends, embeddable widgets, or internal admin consoles where SEO and initial load cost are less important, a React-only setup with Vite or CRA can be leaner.</p>

            <h2>Costs and developer velocity</h2>
            <p>Next.js reduces boilerplate and improves developer velocity on product teams. It creates consistent patterns which lowers maintenance costs over time. Raflay generally recommends Next.js for customer-facing web products unless there is a strong justification to remain React-only.</p>

            <h2>Checklist: pick Next.js if…</h2>
            <ul>
              <li>Your product needs SEO or public content pages.</li>
              <li>You want faster developer onboarding with conventions like file-based routing.</li>
              <li>You intend to use modern hosting platforms with edge functions and serverless.</li>
            </ul>

            <h3>Need a custom evaluation?</h3>
            <p>Raflay offers architecture audits where we profile your current app and produce a migration plan including estimated effort and performance projection. Contact <a href="mailto:hello@raflay.comm">hello@raflay.comm</a>.</p>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  mainEntityOfPage: { "@type": "WebPage", "@id": "https://raflay.comm/blog/nextjs-vs-react-which-is-better" },
                  headline: "Next.js vs React — Practical comparison for production apps | Raflay",
                  description: "In-depth comparison of Next.js and React for real-world projects, covering rendering modes, performance, migration strategies, and Raflay's recommendations.",
                  author: { "@type": "Organization", name: "Raflay" },
                  publisher: { "@type": "Organization", name: "Raflay", logo: { "@type": "ImageObject", url: "https://raflay.comm/logo.png" } },
                  url: "https://raflay.comm/blog/nextjs-vs-react-which-is-better",
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
