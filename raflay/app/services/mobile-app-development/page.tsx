import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Mobile App Development | Raflay",
    description: "Raflay builds mobile apps that engage users and support business goals across iOS and Android.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "What we create",
    "body": [
      "Consumer and enterprise mobile apps with polished onboarding, offline support, and strong visual design."
    ],
    "bullets": [
      "React Native and Flutter solutions",
      "Native device integrations",
      "Push notifications and analytics"
    ]
  },
  {
    "title": "Launch strategy",
    "body": [
      "MVP delivery, beta testing, and app store readiness for fast time to market."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Mobile App Development"
        pageSubtitle="Mobile products designed for retention, conversion, and speed."
        pageSummary="Raflay builds mobile apps that engage users and support business goals across iOS and Android."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
