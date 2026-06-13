import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Video Editing for YouTube | Raflay",
    description: "Practical tips for editing YouTube content with better pacing, audio, and engagement.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Focus",
    "body": [
      "Start with a strong hook, tight pacing, and clear storytelling."
    ]
  },
  {
    "title": "Technical quality",
    "body": [
      "Clean audio, polished color, and smooth transitions matter."
    ],
    "bullets": [
      "Sound design",
      "Motion graphics",
      "Thumbnail strategy"
    ]
  },
  {
    "title": "Growth",
    "body": [
      "Use analytics to optimize future videos."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Video Editing for YouTube"
        pageSubtitle="Editing videos that get views and retain audiences."
        pageSummary="Practical tips for editing YouTube content with better pacing, audio, and engagement."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
