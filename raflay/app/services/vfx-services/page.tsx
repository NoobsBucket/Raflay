import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "VFX Services | Raflay",
    description: "Raflay adds VFX to enhance storytelling, polish, and visual impact.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "VFX offerings",
    "body": [
      "Compositing, motion tracking, and animated visual effects."
    ],
    "bullets": [
      "Green screen work",
      "Particle effects",
      "Title sequences"
    ]
  },
  {
    "title": "Creative enhancement",
    "body": [
      "VFX amplifies production quality without distracting from the message."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="VFX Services"
        pageSubtitle="Visual effects for promotional and branded video."
        pageSummary="Raflay adds VFX to enhance storytelling, polish, and visual impact."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
