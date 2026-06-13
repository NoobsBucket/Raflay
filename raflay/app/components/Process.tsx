export default function Process() {
  return (
    <section style={{maxWidth:1200,margin:'24px auto',padding:'24px 20px',background:'#FAFAFA'}}>
      <style>{`
        .proc-title{font-family:'Bebas Neue',sans-serif;color:#D42030;font-size:24px;margin-bottom:12px}
        .proc-steps{display:flex;gap:12px;flex-wrap:wrap}
        .proc-step{background:white;padding:14px;border-radius:8px;min-width:180px}
      `}</style>

      <h3 className="proc-title">Our process</h3>
      <div className="proc-steps">
        <div className="proc-step">Discover</div>
        <div className="proc-step">Design</div>
        <div className="proc-step">Build</div>
        <div className="proc-step">Launch</div>
        <div className="proc-step">Iterate</div>
      </div>
    </section>
  );
}
