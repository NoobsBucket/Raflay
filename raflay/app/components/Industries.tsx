export default function Industries() {
  return (
    <section style={{maxWidth:1200,margin:'24px auto',padding:'24px 20px'}}>
      <style>{`
        .ind-title{font-family:'Bebas Neue',sans-serif;color:#D42030;font-size:24px;margin-bottom:12px}
        .ind-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
        .ind-card{background:#fff;padding:14px;border-radius:8px;border:1px solid rgba(0,0,0,0.04)}
      `}</style>

      <h3 className="ind-title">Industries we serve</h3>
      <div className="ind-grid">
        <div className="ind-card">SaaS & Product</div>
        <div className="ind-card">eCommerce</div>
        <div className="ind-card">Media & Creators</div>
        <div className="ind-card">Healthcare</div>
        <div className="ind-card">Fintech</div>
      </div>
    </section>
  );
}
