export default function ContactCTA() {
  return (
    <section style={{maxWidth:1200,margin:'28px auto',padding:'28px 20px',background:'#D42030',color:'#fff',borderRadius:8}}>
      <style>{`
        .cta-title{font-family:'Bebas Neue',sans-serif;font-size:24px;margin-bottom:8px}
        .cta-desc{font-family:'Jost',sans-serif;color:rgba(255,255,255,0.95)}
        .cta-btn{margin-top:12px;display:inline-block;background:#fff;color:#D42030;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:700}
      `}</style>

      <h3 className="cta-title">Ready to start?</h3>
      <p className="cta-desc">Schedule a discovery call with Raflay’s product and engineering leads to scope your project.</p>
      <a className="cta-btn" href="mailto:hello@raflay.comm">Contact us</a>
    </section>
  );
}
