export default function WhyChooseUs() {
  return (
    <section style={{maxWidth:1200,margin:'40px auto',padding:'24px 20px'}}>
      <style>{`
        .why-title{font-family:'Bebas Neue',sans-serif;color:#D42030;font-size:28px;margin-bottom:12px}
        .why-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
        .why-item{background:#fff;padding:16px;border-radius:8px;box-shadow:0 6px 18px rgba(20,7,10,0.04)}
        .why-item h4{margin:0 0 8px 0;font-family:'Jost',sans-serif}
        .why-item p{margin:0;color:#555;font-size:0.95rem}
      `}</style>

      <h2 className="why-title">Why choose Raflay</h2>
      <div className="why-grid">
        <div className="why-item"><h4>Product-first teams</h4><p>We combine product strategy with engineering execution to deliver measurable outcomes.</p></div>
        <div className="why-item"><h4>Quality engineering</h4><p>Maintainable code, tests, and observability are built into every project.</p></div>
        <div className="why-item"><h4>Fast iterations</h4><p>Sprint-based delivery and clear roadmaps keep momentum and reduce risk.</p></div>
      </div>
    </section>
  );
}
