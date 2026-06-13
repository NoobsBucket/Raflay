import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Full Stack Development | Raflay",
    description: "Raflay builds full stack solutions that connect frontend experiences with backend systems and deployments.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Complete scope",
    "body": [
      "Frontend UI, backend APIs, database design, and hosting infrastructure delivered as one product."
    ],
    "bullets": [
      "Frontend with React/Next.js",
      "Backend services and APIs",
      "Cloud deployment and monitoring"
    ]
  },
  {
    "title": "Team model",
    "body": [
      "We align designers, engineers, and product folks to reduce handoff friction and deliver faster."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Full Stack Development"
        pageSubtitle="End-to-end product delivery from database to browser."
        pageSummary="Raflay builds full stack solutions that connect frontend experiences with backend systems and deployments."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
