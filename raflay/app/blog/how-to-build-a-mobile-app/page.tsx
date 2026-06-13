import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "How to build a mobile app | Raflay",
    description: "Step through mobile app discovery, development, launch, and growth with Raflay.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Discovery",
    "body": [
      "Define the target user, core problem, and success metrics."
    ]
  },
  {
    "title": "Development",
    "body": [
      "Build a prototype, iterate quickly, and test early with users."
    ],
    "bullets": [
      "App UX and flows",
      "Backend APIs",
      "Performance testing"
    ]
  },
  {
    "title": "Launch",
    "body": [
      "Prepare app store listings, user acquisition, and analytics."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="How to build a mobile app"
        pageSubtitle="A practical roadmap to launching a mobile product."
        pageSummary="Step through mobile app discovery, development, launch, and growth with Raflay."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
