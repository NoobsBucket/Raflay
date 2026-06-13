import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Next.js Development | Raflay",
    description: "Raflay uses Next.js to deliver fast, SEO-friendly web applications with flexible rendering and robust tooling.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Why Next.js",
    "body": [
      "Fast page loads, server-side rendering, and built-in optimization features."
    ],
    "bullets": [
      "Static and server rendering",
      "File-based routing",
      "Edge-ready deployment"
    ]
  },
  {
    "title": "Best fit",
    "body": [
      "Great for marketing sites, SaaS apps, and product platforms that need speed and SEO."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Next.js Development"
        pageSubtitle="Modern web apps built with performance-first architecture."
        pageSummary="Raflay uses Next.js to deliver fast, SEO-friendly web applications with flexible rendering and robust tooling."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
