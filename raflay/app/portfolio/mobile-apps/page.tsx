import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Mobile Apps Portfolio | Raflay",
    description: "A collection of mobile experiences designed for retention and usability.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Mobile projects",
    "body": [
      "Consumer apps, B2B tools, and cross-platform experiences."
    ],
    "bullets": [
      "Intuitive onboarding",
      "Offline-ready features",
      "App store launch support"
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Mobile Apps Portfolio"
        pageSubtitle="Mobile app work created by Raflay."
        pageSummary="A collection of mobile experiences designed for retention and usability."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
