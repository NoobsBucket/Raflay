import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "What is Next.js? | Raflay",
    description: "Learn what Next.js is and why teams use it for fast, SEO-friendly web projects.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Definition",
    "body": [
      "Next.js is a React framework that adds routing, rendering options, and server-side features."
    ]
  },
  {
    "title": "Benefits",
    "body": [
      "Improved performance, SEO, and developer productivity."
    ],
    "bullets": [
      "Static and dynamic rendering",
      "Image optimization",
      "API routes"
    ]
  },
  {
    "title": "When to use it",
    "body": [
      "Great for marketing sites, SaaS products, and interactive web apps."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="What is Next.js?"
        pageSubtitle="An overview of the React framework for modern web applications."
        pageSummary="Learn what Next.js is and why teams use it for fast, SEO-friendly web projects."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
