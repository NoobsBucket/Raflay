"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const blogItems = [
  { href: "/blog/what-is-nextjs", label: "What is Next.js?", categories: ["software"] },
  { href: "/blog/nextjs-vs-react", label: "Next.js vs React", categories: ["software"] },
  { href: "/blog/nextjs-vs-react-which-is-better", label: "Next.js vs React: Which is better?", categories: ["software"] },
  { href: "/blog/how-much-does-a-website-cost", label: "How much does a website cost?", categories: ["software"] },
  { href: "/blog/how-to-build-a-mobile-app", label: "How to build a mobile app", categories: ["software"] },
  { href: "/blog/best-ai-tools-for-business", label: "Best AI tools for business", categories: ["software"] },
  { href: "/blog/what-is-devops", label: "What is DevOps?", categories: ["software"] },
  { href: "/blog/aws-vs-azure", label: "AWS vs Azure", categories: ["software"] },
  { href: "/blog/how-to-grow-your-business-with-mobile-apps", label: "How to grow your business with mobile apps", categories: ["software"] },
  { href: "/blog/how-much-does-a-business-website-cost", label: "How much does a business website cost?", categories: ["software"] },
  { href: "/blog/video-editing-for-youtube", label: "Video editing for YouTube", categories: ["video"] },
  { href: "/blog/how-much-does-video-editing-cost", label: "How much does video editing cost?", categories: ["video"] },
  { href: "/blog/video-editing-tips-for-youtube-creators", label: "Video editing tips for YouTube creators", categories: ["video"] },
  { href: "/blog/logo-design-best-practices", label: "Logo design best practices", categories: ["design"] },
];

const serviceItems = [
  { href: "/services/web-development", label: "Web Development", categories: ["software"] },
  { href: "/services/custom-software-development", label: "Custom Software Development", categories: ["software"] },
  { href: "/services/mobile-app-development", label: "Mobile App Development", categories: ["software", "mobile"] },
  { href: "/services/android-app-development", label: "Android App Development", categories: ["software", "mobile"] },
  { href: "/services/ios-app-development", label: "iOS App Development", categories: ["software", "mobile"] },
  { href: "/services/nextjs-development", label: "Next.js Development", categories: ["software"] },
  { href: "/services/react-development", label: "React Development", categories: ["software"] },
  { href: "/services/full-stack-development", label: "Full Stack Development", categories: ["software"] },
  { href: "/services/ai-development", label: "AI Development", categories: ["software"] },
  { href: "/services/chatbot-development", label: "Chatbot Development", categories: ["software"] },
  { href: "/services/automation-solutions", label: "Automation Solutions", categories: ["software"] },
  { href: "/services/devops", label: "DevOps", categories: ["cloud", "software"] },
  { href: "/services/cloud-hosting", label: "Cloud Hosting", categories: ["cloud"] },
  { href: "/services/aws-services", label: "AWS Services", categories: ["cloud"] },
  { href: "/services/docker-kubernetes", label: "Docker & Kubernetes", categories: ["cloud"] },
  { href: "/services/ui-ux-design", label: "UI/UX Design", categories: ["design"] },
  { href: "/services/graphic-design", label: "Graphic Design", categories: ["design"] },
  { href: "/services/logo-design", label: "Logo Design", categories: ["design"] },
  { href: "/services/branding-services", label: "Branding Services", categories: ["design"] },
  { href: "/services/motion-graphics", label: "Motion Graphics", categories: ["video", "design"] },
  { href: "/services/vfx-services", label: "VFX Services", categories: ["video", "design"] },
  { href: "/services/video-editing", label: "Video Editing", categories: ["video"] },
  { href: "/services/youtube-video-editing", label: "YouTube Video Editing", categories: ["video"] },
  { href: "/services/website-design-and-development", label: "Website Design & Development", categories: ["software", "design"] },
  { href: "/services/website-development-company", label: "Website Development Company", categories: ["software"] },
  { href: "/services/web-development-solutions", label: "Web Development Solutions", categories: ["software"] },
  { href: "/services/web-development-islamabad", label: "Web Development Islamabad", categories: ["software"] },
  { href: "/services/hire-web-developers", label: "Hire Web Developers", categories: ["software"] },
  { href: "/services/top-web-development-companies", label: "Top Web Development Companies", categories: ["software"] },
];

const filters = {
  blog: [
    { key: "all", label: "All" },
    { key: "software", label: "Software" },
    { key: "video", label: "Video" },
    { key: "design", label: "Design" },
  ],
  services: [
    { key: "all", label: "All" },
    { key: "software", label: "Software" },
    { key: "video", label: "Video" },
    { key: "design", label: "Design" },
    { key: "cloud", label: "Cloud" },
    { key: "mobile", label: "Mobile" },
  ],
};

const pageInfo = {
  blog: {
    title: "",
    description: "",
    items: blogItems,
  },
  services: {
    title: "",
    description: "",
    items: serviceItems,
  },
};

export default function CategoryPanel({ categoryType }: { categoryType: "blog" | "services" }) {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState("all");
  const config = pageInfo[categoryType];

  const items = useMemo(() => {
    if (activeFilter === "all") {
      return config.items;
    }
    return config.items.filter((item) => item.categories.includes(activeFilter));
  }, [activeFilter, config.items]);

  return (
    <section className="category-panel">
      <style>{`
        .category-panel { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
        .category-hero { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .category-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(42px, 5vw, 68px); color: #D42030; margin: 0; }
        .category-copy { font-family: 'Jost', sans-serif; color: #444; font-size: 1rem; line-height: 1.8; max-width: 780px; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px; }
        .filter-button { border: 1px solid rgba(0,0,0,0.12); background: white; color: #333; border-radius: 999px; padding: 9px 16px; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 0.92rem; transition: background 0.2s, color 0.2s, border-color 0.2s; }
        .filter-button.active { background: #D42030; color: white; border-color: #D42030; }
        .item-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .item-card { padding: 22px; border-radius: 20px; background: #fff; border: 1px solid rgba(0,0,0,0.06); box-shadow: 0 10px 30px rgba(0,0,0,0.04); transition: transform 0.2s; }
        .item-card:hover { transform: translateY(-2px); }
        .item-link { font-family: 'Inter', sans-serif; font-size: 1rem; color: #171717; text-decoration: none; font-weight: 600; }
        .item-category { margin-top: 10px; display: inline-flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; font-size: 0.82rem; color: #777; }
        .item-current { color: #D42030; }
        @media (max-width: 900px) { .item-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .item-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="category-hero">
        <h1 className="category-title">{config.title}</h1>
        <p className="category-copy">{config.description}</p>
      </div>

      <div className="filter-row">
        {filters[categoryType].map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={`filter-button${filter.key === activeFilter ? " active" : ""}`}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="item-grid">
        {items.map((item) => {
          const isCurrent = pathname === item.href;
          return (
            <article key={item.href} className="item-card">
              <Link href={item.href} className={`item-link${isCurrent ? " item-current" : ""}`}>
                {item.label}
              </Link>
              <div className="item-category">
                {item.categories.map((category) => category.charAt(0).toUpperCase() + category.slice(1)).join(" • ")}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
