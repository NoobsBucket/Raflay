import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Custom Software Development | Raflay",
    description: "Raflay delivers custom software solutions that automate operations, integrate systems, and create new digital value.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Scope",
    "body": [
      "Enterprise platforms, internal tools, automation systems, and customer-facing applications.",
      "Custom logic, integrations, and data pipelines tailored to your business."
    ],
    "bullets": [
      "Workflow automation",
      "Custom dashboards",
      "Third-party system integration"
    ]
  },
  {
    "title": "Delivery",
    "body": [
      "Product discovery, iterative development, and long-term support with clear milestones."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Custom Software Development"
        pageSubtitle="Bespoke software built around your business workflows."
        pageSummary="Raflay delivers custom software solutions that automate operations, integrate systems, and create new digital value."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
