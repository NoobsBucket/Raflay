import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Motion Graphics | Raflay",
    description: "Raflay creates motion graphics for explainers, social content, and product visuals.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "What we produce",
    "body": [
      "Animated graphs, iconography, transitions, and title sequences."
    ],
    "bullets": [
      "Explainer videos",
      "Social animations",
      "Brand motion systems"
    ]
  },
  {
    "title": "Why motion works",
    "body": [
      "Motion helps viewers understand concepts faster and increases retention."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Motion Graphics"
        pageSubtitle="Animated visuals that simplify complex ideas."
        pageSummary="Raflay creates motion graphics for explainers, social content, and product visuals."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
