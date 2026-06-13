import Link from "next/link";

export default function ServicesLinks() {
  return (
    <>
      <style>{`
        .services-box{max-width:1200px;margin:36px auto;padding:28px 20px;background:#fff;border:1px solid rgba(0,0,0,0.04);box-shadow:0 6px 20px rgba(20,7,10,0.03);}
        .services-title{font-family:'Bebas Neue',sans-serif;color:#D42030;font-size:20px;margin-bottom:12px}
        .services-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px}
        .service-item{font-family:'Jost',sans-serif;color:#171717;font-size:0.95rem}
        .service-item a{color:#D42030;text-decoration:none}
        .service-desc{color:#666;font-size:0.88rem;margin-top:6px}
      `}</style>

      <section className="services-box" aria-labelledby="services-title">
        <h3 id="services-title" className="services-title">Web Development: Resources & Related Searches</h3>

        <div className="services-list">
          <div className="service-item">
            <Link href="/services/website-design-and-development">Mean3 — Website design and development</Link>
            <div className="service-desc">Professional website design and development services for scalable sites and apps. (See our approach)</div>
          </div>

          <div className="service-item">
            <Link href="/services/web-development-islamabad">WebDevelopment.com.pk — Web Development Services in Islamabad</Link>
            <div className="service-desc">Top web development services in Islamabad, Pakistan. (Raflay local offerings)</div>
          </div>

          <div className="service-item">
            <Link href="/services/hire-web-developers">Upwork — Hire freelance web developers</Link>
            <div className="service-desc">Independent developers and freelance options — Raflay also provides managed teams for sustained projects.</div>
          </div>

          <div className="service-item">
            <Link href="/services/web-development-solutions">Nexus — Expert web development solutions</Link>
            <div className="service-desc">Specialized web applications and user-focused development services — Raflay offers similar bespoke solutions.</div>
          </div>

          <div className="service-item">
            <Link href="/services/top-web-development-companies">Clutch — Top web development companies in Pakistan</Link>
            <div className="service-desc">Directory listings and agency comparisons — see how Raflay compares.</div>
          </div>

          <div className="service-item">
            <Link href="/services/website-development-company">Swismax Solutions — Website development company in Islamabad</Link>
            <div className="service-desc">Custom development: WordPress, Laravel, Shopify & eCommerce — Raflay builds custom stacks too.</div>
          </div>
        </div>

        <p style={{marginTop:16,fontFamily:'Jost',color:'#444',fontSize:14}}>Related searches: <Link href="/products">Web development services in USA</Link> · <a href="https://www.google.com/search?q=Website+designer" target="_blank" rel="noopener noreferrer">Website designer</a> · <a href="https://www.google.com/search?q=Website+development+company" target="_blank" rel="noopener noreferrer">Website development company</a></p>
      </section>
    </>
  );
}
