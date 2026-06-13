import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "YouTube Video Editing | Raflay",
    description: "Raflay edits YouTube videos with pacing, hooks, and brand consistency in mind.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Creator workflow",
    "body": [
      "Hook-first structure, B-roll, and engaging pacing."
    ],
    "bullets": [
      "Channel branding",
      "Thumbnails and captions",
      "Retention-focused editing"
    ]
  },
  {
    "title": "Launch readiness",
    "body": [
      "Deliverables include publish-ready video files and metadata recommendations."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="YouTube Video Editing"
        pageSubtitle="Creator-focused editing for growth and retention."
        pageSummary="Raflay edits YouTube videos with pacing, hooks, and brand consistency in mind."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
