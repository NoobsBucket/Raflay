import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Video Editing | Raflay",
    description: "Raflay edits footage into polished video assets optimized for digital distribution.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Editing services",
    "body": [
      "Assembly edits, pacing, sound mix, and delivery-ready exports."
    ],
    "bullets": [
      "Marketing videos",
      "Social clips",
      "Product demos"
    ]
  },
  {
    "title": "Quality focus",
    "body": [
      "We prioritize storytelling, clarity, and viewer engagement."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Video Editing"
        pageSubtitle="Professional editing for marketing and creator content."
        pageSummary="Raflay edits footage into polished video assets optimized for digital distribution."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
