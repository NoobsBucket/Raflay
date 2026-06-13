import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "DevOps | Raflay",
    description: "Raflay provides DevOps services for continuous delivery, infrastructure automation, and resilient production environments.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "DevOps capabilities",
    "body": [
      "CI/CD pipelines, infrastructure as code, monitoring, and release automation."
    ],
    "bullets": [
      "Pipeline automation",
      "Infrastructure provisioning",
      "Monitoring and alerts"
    ]
  },
  {
    "title": "Benefits",
    "body": [
      "Faster releases, fewer outages, and more predictable deployments."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="DevOps"
        pageSubtitle="Infrastructure, pipelines, and operational automation for reliable delivery."
        pageSummary="Raflay provides DevOps services for continuous delivery, infrastructure automation, and resilient production environments."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
