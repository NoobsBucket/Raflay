import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Video Editing Project Case Study | Raflay",
    description: "This case study covers the creative process, editing approach, and performance of a branded video campaign.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Brief",
    "body": [
      "The brand needed a polished video to support a product launch."
    ]
  },
  {
    "title": "Execution",
    "body": [
      "We combined tight pacing, brand-aligned motion, and audio polish."
    ],
    "bullets": [
      "Story-driven edit",
      "Motion graphics",
      "Optimized export"
    ]
  },
  {
    "title": "Impact",
    "body": [
      "Watch time improved and the campaign saw stronger viewer engagement."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Video Editing Project Case Study"
        pageSubtitle="A creative video production project with strong engagement results."
        pageSummary="This case study covers the creative process, editing approach, and performance of a branded video campaign."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
