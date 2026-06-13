export default function Testimonials() {
  return (
    <section style={{ maxWidth: 1200, margin: '48px auto', padding: '32px 20px', background: '#09090b', borderRadius: '28px', boxShadow: '0 40px 120px rgba(0,0,0,0.18)' }}>
      <style>{`
        .test-wrap{display:grid;gap:28px}
        .test-heading{font-family:'Bebas Neue',sans-serif;color:#fff;font-size:clamp(36px,4.5vw,52px);margin:0;line-height:1.02}
        .test-intro{max-width:760px;color:#d7d7d7;font-family:'Barlow Condensed',sans-serif;font-size:15px;line-height:1.9;margin:0;}
        .test-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px}
        .test-card{background:#111;border:1px solid rgba(212,32,48,0.18);border-radius:20px;padding:28px;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s ease,box-shadow .3s ease}
        .test-card:hover{transform:translateY(-6px);box-shadow:0 20px 50px rgba(212,32,48,0.18)}
        .test-quote{color:#f0f0f0;font-family:'Jost',sans-serif;font-size:1rem;line-height:1.85;margin:0 0 18px;}
        .test-author{margin-top:auto;color:#c2c2c2;font-family:'Barlow Condensed',sans-serif;font-size:0.95rem;text-transform:uppercase;letter-spacing:0.12em;}
        .test-author strong{color:#fff;font-weight:700;display:block;margin-bottom:4px;}
      `}</style>

      <div className="test-wrap">
        <div>
          <h2 className="test-heading">What our clients say about working with Raflay</h2>
          <p className="test-intro">Trusted by leaders across software, DevOps, AI, and creative services. Our clients praise fast delivery, polished execution, and measurable business impact.</p>
        </div>

        <div className="test-list">
          <div className="test-card">
            <p className="test-quote">"Raflay rebuilt our platform, improved reliability, and delivered a DevOps pipeline that keeps releases smooth and secure."</p>
            <div className="test-author"><strong>Erah N Cosmetic</strong>VP Engineering, Erah N Cosmetic</div>
          </div>

          <div className="test-card">
            <p className="test-quote">"The video editing team made our campaign look premium, and the turnaround time was excellent. They understood our brand instantly."</p>
            <div className="test-author"><strong>Saad Bakkey</strong>Creative Director, Saad Bakkey</div>
          </div>

          <div className="test-card">
            <p className="test-quote">"We needed an AI-powered product recommendation engine. Raflay delivered the solution with clear communication and strong technical expertise."</p>
            <div className="test-author"><strong>Azeem Cosmetic</strong>Founder, Azeem Cosmetic</div>
          </div>

          <div className="test-card">
            <p className="test-quote">"Our e-commerce relaunch for AtozMart was quick, polished, and ready for scale. The team helped us improve conversion across the store."</p>
            <div className="test-author"><strong>AtozMart</strong>Head of Growth, AtozMart</div>
          </div>

          <div className="test-card">
            <p className="test-quote">"From software architecture to deployment, Raflay felt like an extension of our product team. The support was responsive and reliable."</p>
            <div className="test-author"><strong>Tech Product Lead</strong>Software Product, Growth Studio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
