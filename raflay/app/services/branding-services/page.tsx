import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Branding Services | Raflay",
    description: "Raflay builds brand systems that guide messaging, design, and digital presence.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Brand work",
    "body": [
      "Positioning, messaging, visual systems, and guidelines for consistent communication."
    ],
    "bullets": [
      "Brand voice",
      "Identity systems",
      "Design tokens"
    ]
  },
  {
    "title": "Business value",
    "body": [
      "A clear brand makes your product easier to market and trust."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Branding Services"
        pageSubtitle="End-to-end brand strategy and visual identity."
        pageSummary="Raflay builds brand systems that guide messaging, design, and digital presence."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
