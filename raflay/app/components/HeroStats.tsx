'use client';

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Trusted Clients", value: 73, suffix: "+" },
  { label: "Projects Completed", value: 235, suffix: "+" },
  { label: "Countries Served", value: 14, suffix: "+" },
];

export default function HeroStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(stats.map((stat) => Math.floor(stat.value * progress)));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [started]);

  return (
    <section ref={sectionRef} style={{ maxWidth: 1200, margin: "0 auto", padding: "42px 20px 24px" }}>
      <style>{`
        .hero-stats-heading { font-family:'Bebas Neue',sans-serif; font-size: clamp(52px, 8vw, 72px); color: #000000; margin: 0 auto 20px; line-height: 1.1; letter-spacing: 0.02em; font-weight: 900; text-align: center; }
        .hero-stats-subtitle {font-weight: 700; max-width: 760px; margin: 0 auto 24px; color: #f71e1e; font-family:'Barlow Condensed',sans-serif; font-size: 18px; line-height: 1.8; text-align: center; }
        .hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .hero-stat-card { background: #111; border: 1px solid rgba(212,32,48,0.16); border-radius: 18px; padding: 24px 22px; box-shadow: 0 24px 70px rgba(0,0,0,0.18); }
        .hero-stat-number { font-family:'Bebas Neue',sans-serif; font-size: clamp(48px, 5vw, 70px); color: #D42030; margin: 0 0 8px; line-height: 0.95; }
        .hero-stat-label { font-family:'Barlow Condensed',sans-serif; text-transform: uppercase; letter-spacing: 0.2em; color: #ddd; font-size: 11px; margin: 0; }
        @media (max-width: 920px) { .hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .hero-stats { grid-template-columns: 1fr; } }
      `}</style>

      <h2 className="hero-stats-heading">Real results, built over time</h2>
      <p className="hero-stats-subtitle">These numbers show how we partner with clients across web, software, AI, and creative services.</p>
      <div className="hero-stats">
        {stats.map((stat, index) => (
          <div className="hero-stat-card" key={stat.label}>
            <p className="hero-stat-number">{counts[index].toLocaleString()}{stat.suffix}</p>
            <p className="hero-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
