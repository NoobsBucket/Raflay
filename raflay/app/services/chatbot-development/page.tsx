import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Chatbot Development | Raflay",
    description: "Raflay builds chatbots that engage customers, qualify leads, and automate support workflows.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Chatbot features",
    "body": [
      "Intent detection, conversation flows, and system integrations for real business tasks."
    ],
    "bullets": [
      "FAQ automation",
      "Lead qualification",
      "CRM integration"
    ]
  },
  {
    "title": "Deployment",
    "body": [
      "We deploy chatbots on web, mobile, and messaging platforms with analytics tracking."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Chatbot Development"
        pageSubtitle="Conversational experiences for support, sales, and automation."
        pageSummary="Raflay builds chatbots that engage customers, qualify leads, and automate support workflows."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
