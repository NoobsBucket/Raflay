import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "AI Development | Raflay",
    description: "Raflay develops AI applications for data insights, automation, personalization, and business productivity.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "AI capabilities",
    "body": [
      "Recommendation engines, predictive analytics, and automation workflows powered by modern AI."
    ],
    "bullets": [
      "Machine learning models",
      "NLP and chat capabilities",
      "Data-driven automation"
    ]
  },
  {
    "title": "Business outcomes",
    "body": [
      "We focus on measurable improvements, not hype."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="AI Development"
        pageSubtitle="Practical AI solutions that automate decision-making and workflows."
        pageSummary="Raflay develops AI applications for data insights, automation, personalization, and business productivity."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
