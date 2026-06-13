import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "iOS App Development | Raflay",
    description: "Raflay designs iOS apps that align with Apple interface best practices and deliver polished performance.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "iOS capabilities",
    "body": [
      "Swift and SwiftUI applications with clean interactions and Apple platform integration."
    ],
    "bullets": [
      "App Store launch support",
      "Apple service integrations",
      "Elegant interface design"
    ]
  },
  {
    "title": "Polish and performance",
    "body": [
      "We focus on smooth animations, fast load times, and native feel."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="iOS App Development"
        pageSubtitle="High-quality iOS experiences for iPhone and iPad."
        pageSummary="Raflay designs iOS apps that align with Apple interface best practices and deliver polished performance."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
