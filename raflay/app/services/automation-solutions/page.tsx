import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Automation Solutions | Raflay",
    description: "Raflay builds automation solutions that reduce manual effort and improve business consistency.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Automation use cases",
    "body": [
      "Data syncing, notifications, approvals, and report generation."
    ],
    "bullets": [
      "Workflow automation",
      "Business rule engines",
      "Integration orchestration"
    ]
  },
  {
    "title": "Value",
    "body": [
      "Automation lowers cost, reduces errors, and speeds up processes."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Automation Solutions"
        pageSubtitle="Automate repetitive tasks and improve operational efficiency."
        pageSummary="Raflay builds automation solutions that reduce manual effort and improve business consistency."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
