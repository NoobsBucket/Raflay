'use client';

import { useState } from "react";

const faqs = [
  {
    q: "What is web development?",
    a: "Web development is the process of building websites and web applications using programming, design, and server-side technologies.",
  },
  {
    q: "What is custom software development?",
    a: "Custom software development builds tailored solutions for your unique business needs, workflows, and growth goals.",
  },
  {
    q: "What is AI development?",
    a: "AI development uses machine learning, data automation, and intelligent workflows to make software smarter and more efficient.",
  },
  {
    q: "What video editing services do you offer?",
    a: "We edit YouTube videos, social media clips, promotional content, and provide transitions, color grading, and motion graphics.",
  },
  {
    q: "Do you provide DevOps and cloud deployment?",
    a: "Yes, we set up CI/CD pipelines, cloud hosting, monitoring, and automated deployment for reliable production workflows.",
  },
  {
    q: "Can you integrate AI into my website or app?",
    a: "Yes, we can add AI features like chatbots, recommendation systems, analytics automation, and smart data workflows.",
  },
  {
    q: "Can you produce social media video edits?",
    a: "Yes, we create short video edits, reels, and promotional clips optimized for YouTube, Instagram, TikTok, and other channels.",
  },
  {
    q: "Can you automate workflows with AI?",
    a: "Yes, we build AI-powered automation that reduces manual work, speeds approvals, and improves customer interactions.",
  },
  {
    q: "How much does website development cost?",
    a: "Costs depend on scope, design, features, and integrations. Simple sites start lower, while custom platforms with advanced features cost more.",
  },
  {
    q: "Do you build responsive websites?",
    a: "Yes, every website we build is responsive and optimized for desktop, tablet, and mobile devices.",
  },
  {
    q: "Do you provide website maintenance and support?",
    a: "Yes, we offer ongoing maintenance and support plans to keep your site secure, updated, and performing well.",
  },
  {
    q: "Can you improve website performance and speed?",
    a: "Yes, we optimize performance through code improvements, asset compression, caching, and faster hosting.",
  },
  {
    q: "Do you offer managed hosting?",
    a: "Yes, we offer managed hosting services to keep your website stable, secure, and available around the clock.",
  },
  {
    q: "Do you optimize websites for SEO?",
    a: "Yes, we apply SEO best practices like fast page speed, structured content, metadata, and mobile optimization.",
  },
  {
    q: "Can you migrate my website to a new platform?",
    a: "Yes, we can migrate your website from older platforms to modern frameworks while preserving content and SEO value.",
  },
  {
    q: "Will my website be secure?",
    a: "Yes, we implement security best practices like HTTPS, firewall rules, secure deployments, and regular updates.",
  },
  {
    q: "Do you provide website support after launch?",
    a: "Yes, we offer post-launch support and maintenance so your website stays updated and performing well.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = faqs.slice(0, 8);

  return (
    <section style={{ maxWidth: 1200, margin: "24px auto", padding: "24px 20px" }}>
      <style>{`
        .faq-title{font-family:'Bebas Neue',sans-serif;color:#D42030;font-size:28px;margin-bottom:16px}
        .faq-intro{color:#444;max-width:760px;margin-bottom:24px;line-height:1.7}
        .faq-list{display:grid;gap:12px}
        .faq-item{border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;background:#fff;transition:box-shadow .2s}
        .faq-item:hover{box-shadow:0 8px 20px rgba(0,0,0,0.08)}
        .faq-button{width:100%;text-align:left;padding:18px 20px;font-size:16px;font-weight:700;background:none;border:none;cursor:pointer;color:#111;display:flex;justify-content:space-between;align-items:center}
        .faq-answer{padding:0 20px 0;color:#555;line-height:1.75;font-size:15px;max-height:0;overflow:hidden;opacity:0;transition:max-height .35s ease, opacity .35s ease, padding .35s ease}
        .faq-answer.open{max-height:260px;opacity:1;padding:0 20px 20px}
        .faq-icon{font-size:20px;margin-left:12px;color:#D42030;transition:transform .3s ease}
        .faq-icon.open{transform:rotate(45deg)}
      `}</style>

      <h3 className="faq-title">Web Development FAQs</h3>
      <p className="faq-intro">Here are the top web development questions we hear most often. Click a question to open a smooth animated answer.</p>
      <div className="faq-list">
        {visibleFaqs.map((faq, index) => (
          <div className="faq-item" key={faq.q}>
            <button className="faq-button" type="button" onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
              <span>{faq.q}</span>
              <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
