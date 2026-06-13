import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  const slug = "how-to-grow-your-business-with-mobile-apps";
  const title = "How to grow your business with mobile apps — Strategy & tactics | Raflay";
  const description =
    "Comprehensive guide on launching mobile apps for growth: product strategy, technical choices, measurement, and Raflay's playbook.";
  const url = `https://raflay.comm/blog/${slug}`;
  return {
    title,
    description,
    keywords: ["mobile apps", "growth", "app strategy", "Raflay"],
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
          <p className="hero-sub">Growth · Mobile</p>
          <h1 className="hero-title">How to grow your business with mobile apps</h1>
          <p className="hero-sub">Strategies to acquire users, increase retention and monetise mobile experiences.</p>
        </div>
      </section>

      <main className="article">
        <div className="hero-inner">
            <article>
              <p>Mobile apps remain a powerful channel for customer engagement and revenue. At Raflay we combine product thinking and software dev expertise to help businesses launch mobile experiences that move metrics: retention, conversion, and lifetime value. This extended guide covers strategy, measurement, engineering, and growth experiments you can run post-launch.</p>

              <h2>Why mobile apps outperform web in retention</h2>
              <p>Apps live on the user’s device and provide signals (push, local storage, sensor access) that web cannot reliably match. Those signals enable repeated, personalized touchpoints that drive stronger retention when used correctly.</p>

              <h2>Define success: measurable KPIs</h2>
              <ul>
                <li><strong>DAU/MAU ratio:</strong> a key retention metric</li>
                <li><strong>7-day retention:</strong> early signal of product-market fit</li>
                <li><strong>ARPU & CLTV:</strong> revenue per user and customer lifetime value</li>
              </ul>

              <h2>Product strategy and experimentation</h2>
              <p>Start with a core loop — a repeatable sequence of actions that deliver value. Hypothesize what will increase retention (e.g., push reminders, personalization), implement experiments, and measure using event-driven analytics.</p>

              <h2>Technical architecture choices</h2>
              <ul>
                <li><strong>React Native / Expo:</strong> fastest route for cross-platform MVPs.</li>
                <li><strong>Flutter:</strong> great for consistent UI across platforms with strong performance.</li>
                <li><strong>Native:</strong> choose when platform-specific UX or performance is critical.</li>
              </ul>

              <h2>Data, analytics, and growth loops</h2>
              <p>Instrument funnels and retention cohorts from day one. Use analytics to answer: where do users drop off? Which onboarding steps correlate with retention? Then run small, iterative experiments (A/B tests) to improve the core funnel.</p>

              <h2>Monetization and pricing strategies</h2>
              <p>Common approaches: freemium with paid tiers, in-app purchases, and subscriptions. Test offers on small user segments, measure conversion, and ensure billing integrations are secure and reliable.</p>

              <h2>Operational considerations</h2>
              <ul>
                <li>CI/CD pipelines for automated builds and fast releases</li>
                <li>Crash reporting and performance monitoring (Sentry, Firebase)</li>
                <li>App Store compliance and review management</li>
              </ul>

              <h2>Case example</h2>
              <p>We worked with a consumer service to launch a cross-platform app focusing on a single booking flow. By instrumenting onboarding and iterating on the first-run experience, 7-day retention improved from 12% to 28% over two months.</p>

              <h2>Checklist before launch</h2>
              <ul>
                <li>Define core metrics and events</li>
                <li>Set up automated testing and deployment</li>
                <li>Prepare marketing assets and App Store listings</li>
              </ul>

              <h3>How Raflay helps</h3>
              <p>Our software dev teams run discovery, ship MVPs, then scale features informed by analytics. If you want an audit of your app idea or a growth plan, reach out at <a href="mailto:hello@raflay.comm">hello@raflay.comm</a>.</p>

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    mainEntityOfPage: { "@type": "WebPage", "@id": "https://raflay.comm/blog/how-to-grow-your-business-with-mobile-apps" },
                    headline: "How to grow your business with mobile apps — Strategy & tactics | Raflay",
                    description: "Comprehensive guide on launching mobile apps for growth: product strategy, technical choices, measurement, and Raflay's playbook.",
                    author: { "@type": "Organization", name: "Raflay" },
                    publisher: { "@type": "Organization", name: "Raflay", logo: { "@type": "ImageObject", url: "https://raflay.comm/logo.png" } },
                    url: "https://raflay.comm/blog/how-to-grow-your-business-with-mobile-apps",
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
