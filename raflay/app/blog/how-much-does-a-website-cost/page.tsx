import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "How much does a website cost? | Raflay",
    description: "Understand website cost drivers and how to plan budgets for digital projects.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Cost categories",
    "body": [
      "Landing pages, business websites, and complex web applications all have different budgets."
    ],
    "bullets": [
      "Simple brochure sites",
      "Custom business websites",
      "SaaS platforms"
    ]
  },
  {
    "title": "What affects price",
    "body": [
      "Design quality, integrations, content, and ongoing support change project cost."
    ]
  },
  {
    "title": "Smart planning",
    "body": [
      "Scope in phases and prioritize high-value features."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="How much does a website cost?"
        pageSubtitle="A practical guide to website budgets and scope."
        pageSummary="Understand website cost drivers and how to plan budgets for digital projects."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
