import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  const slug = "logo-design-best-practices";
  const title = "Logo design best practices — Brand systems & engineering handoff | Raflay";
  const description =
    "Comprehensive guide to logo design: principles, process, responsive marks, and how to deliver engineering-ready assets.";
  const url = `https://raflay.comm/blog/${slug}`;
  return {
    title,
    description,
    keywords: ["logo design", "brand", "design system", "Raflay"],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: [{ url: `https://raflay.comm/og/${slug}.png`, alt: title }] },
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
          <p className="hero-sub">Design · Branding</p>
          <h1 className="hero-title">Logo design — best practices</h1>
          <p className="hero-sub">Timeless principles for creating a memorable brand mark.</p>
        </div>
      </section>

      <main className="article">
        <div className="hero-inner">
          <article>
            <p>Logo design is the skeleton of a brand. At Raflay we treat logo creation as a product problem: it must communicate the brand’s essence, scale across touchpoints, and be usable by designers and engineers alike. This long-form guide covers concepting, responsive marks, tokenization, and engineering handoff with practical checklists.</p>

            <h2>Principles of effective logo design</h2>
            <ul>
              <li><strong>Simplicity:</strong> A simple mark is more memorable and versatile across sizes.</li>
              <li><strong>Distinctiveness:</strong> Avoid clichés; aim for a recognizable silhouette.</li>
              <li><strong>Scalability:</strong> Test at favicon size and large formats.</li>
              <li><strong>Versatility:</strong> Provide full-color, single-color, and reversed variants.</li>
            </ul>

            <h2>Responsive marks and logotypes</h2>
            <p>Design a family of marks: full logo, stacked lockup, and an icon-only glyph for minimal spaces. Responsive logos ensure brand recognition without sacrificing legibility.</p>

            <h2>Process and deliverables</h2>
            <ol>
              <li><strong>Discovery:</strong> brand attributes, audience, and positioning.</li>
              <li><strong>Exploration:</strong> quick concept sketches and typographic studies.</li>
              <li><strong>Refinement:</strong> vectorization, kerning, and responsive variants with accessibility considerations.</li>
              <li><strong>Delivery:</strong> SVGs, icon sets, tokenized colors, and usage guidelines for engineering handoff.</li>
            </ol>

            <h2>Engineering handoff checklist</h2>
            <ul>
              <li>Provide SVGs with clean paths and named groups for easy theming.</li>
              <li>Tokenize colors and font stacks so CSS variables can implement the design consistently.</li>
              <li>Include a minimum-size guideline and an allowed color palette for constrained contexts.</li>
            </ul>

            <h2>Brand system tips</h2>
            <p>Expand a logo into a small system: logo, iconography, color tokens, and type scales. Document component usage and variants so teams don’t reinvent the mark on every page.</p>

            <h3>Working with Raflay on brand projects</h3>
            <p>We offer combined design + engineering sprints that produce not only a logo, but a working design system and build-ready assets. Contact <a href="mailto:hello@raflay.comm">hello@raflay.comm</a> to schedule a brand sprint.</p>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  mainEntityOfPage: { "@type": "WebPage", "@id": "https://raflay.comm/blog/logo-design-best-practices" },
                  headline: "Logo design best practices — Brand systems & engineering handoff | Raflay",
                  description: "Comprehensive guide to logo design: principles, process, responsive marks, and how to deliver engineering-ready assets.",
                  author: { "@type": "Organization", name: "Raflay" },
                  publisher: { "@type": "Organization", name: "Raflay", logo: { "@type": "ImageObject", url: "https://raflay.comm/logo.png" } },
                  url: "https://raflay.comm/blog/logo-design-best-practices",
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
