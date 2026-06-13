import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Video Editing Portfolio | Raflay",
    description: "Showcasing video editing, motion graphics, and brand content produced for digital platforms.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Video portfolio",
    "body": [
      "Product videos, social campaigns, and creator content."
    ],
    "bullets": [
      "Brand storytelling",
      "Polished editing",
      "Motion enhancement"
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Video Editing Portfolio"
        pageSubtitle="Video and motion work delivered by Raflay."
        pageSummary="Showcasing video editing, motion graphics, and brand content produced for digital platforms."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
