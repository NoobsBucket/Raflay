export default function Technologies() {
  return (
    <section style={{maxWidth:1200,margin:'24px auto',padding:'24px 20px',background:'#FAFAFA'}}>
      <style>{`
        .tech-title{font-family:'Bebas Neue',sans-serif;color:#A8192A;font-size:24px;margin-bottom:12px}
        .tech-list{display:flex;flex-wrap:wrap;gap:10px}
        .tech-pill{background:white;padding:8px 12px;border-radius:999px;box-shadow:0 4px 12px rgba(20,7,10,0.03);font-family:'Jost',sans-serif}
      `}</style>

      <h3 className="tech-title">Technologies we use</h3>
      <div className="tech-list">
        {['Next.js','React','Node.js','TypeScript','Postgres','React Native','Vercel','Tailwind'].map((t)=> (
          <div key={t} className="tech-pill">{t}</div>
        ))}
      </div>
    </section>
  );
}
