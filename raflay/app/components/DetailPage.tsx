type Section = {
  title: string;
  body: string[];
  bullets?: string[];
};

type DetailPageProps = {
  pageTitle: string;
  pageSubtitle: string;
  pageSummary: string;
  sections: Section[];
  ctaText?: string;
  ctaLink?: string;
};

export default function DetailPage({
  pageTitle,
  pageSubtitle,
  pageSummary,
  sections,
  ctaText,
  ctaLink,
}: DetailPageProps) {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
      <style>{`
        .detail-hero { padding: 40px 0; }
        .detail-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px, 5vw, 64px); color: #D42030; margin-bottom: 14px; }
        .detail-subtitle { font-family: 'Jost', sans-serif; font-size: 1.05rem; color: #3e3e3e; margin-bottom: 18px; line-height: 1.6; }
        .detail-summary { font-family: 'Jost', sans-serif; color: #555; font-size: 1rem; margin-bottom: 28px; line-height: 1.8; }
        .detail-section { margin-bottom: 32px; }
        .detail-section-title { font-family: 'Bebas Neue', sans-serif; color: #171717; font-size: 24px; margin-bottom: 12px; }
        .detail-section-paragraph { font-family: 'Jost', sans-serif; color: #444; font-size: 1rem; line-height: 1.8; margin-bottom: 14px; }
        .detail-bullets { padding-left: 20px; margin: 0; color: #444; }
        .detail-bullets li { margin-bottom: 10px; }
        .detail-cta { margin-top: 40px; padding: 28px 24px; background: #F8F4F3; border-left: 4px solid #D42030; }
        .detail-cta-title { font-family: 'Bebas Neue', sans-serif; color: #171717; font-size: 24px; margin-bottom: 10px; }
        .detail-cta-link { display: inline-block; margin-top: 12px; padding: 10px 18px; background: #D42030; color: white; border-radius: 8px; text-decoration: none; font-family: 'Jost', sans-serif; font-weight: 700; }
      `}</style>
      <section className="detail-hero">
        <div className="detail-title">{pageTitle}</div>
        <div className="detail-subtitle">{pageSubtitle}</div>
        <div className="detail-summary">{pageSummary}</div>
      </section>

      {sections.map((section) => (
        <section key={section.title} className="detail-section">
          <div className="detail-section-title">{section.title}</div>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="detail-section-paragraph">{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="detail-bullets">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {ctaText && ctaLink ? (
        <section className="detail-cta">
          <div className="detail-cta-title">{ctaText}</div>
          <a href={ctaLink} className="detail-cta-link">Get in touch</a>
        </section>
      ) : null}
    </main>
  );
}
