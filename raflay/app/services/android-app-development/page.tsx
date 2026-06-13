import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Android App Development | Raflay",
    description: "Raflay builds Android applications that run smoothly across device families with polished interfaces and stable workflows.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Android focus",
    "body": [
      "Kotlin-based apps with responsive UI, robust background processing, and integrated analytics."
    ],
    "bullets": [
      "Material design experiences",
      "Play Store submission support",
      "Android lifecycle handling"
    ]
  },
  {
    "title": "Device coverage",
    "body": [
      "We optimize for broad hardware compatibility and reliable performance on varied screen sizes."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Android App Development"
        pageSubtitle="Native Android apps with modern architecture and performance."
        pageSummary="Raflay builds Android applications that run smoothly across device families with polished interfaces and stable workflows."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
