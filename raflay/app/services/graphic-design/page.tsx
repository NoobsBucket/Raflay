import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Graphic Design | Raflay",
    description: "Raflay produces graphic design that strengthens brand identity and supports digital marketing.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Creative services",
    "body": [
      "Social graphics, presentation decks, marketing collateral, and visual storytelling."
    ],
    "bullets": [
      "Campaign visuals",
      "Brand assets",
      "Motion-ready design"
    ]
  },
  {
    "title": "Design impact",
    "body": [
      "Strong graphic design improves recognition and communication across channels."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Graphic Design"
        pageSubtitle="Visual assets and creative design for digital brands."
        pageSummary="Raflay produces graphic design that strengthens brand identity and supports digital marketing."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
