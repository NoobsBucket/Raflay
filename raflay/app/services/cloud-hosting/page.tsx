import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Cloud Hosting | Raflay",
    description: "Raflay provisions hosting environments that are secure, resilient, and optimized for cost and performance.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Hosting options",
    "body": [
      "Managed cloud, container hosting, and serverless deployments."
    ],
    "bullets": [
      "Scalable infrastructure",
      "Automatic backups",
      "Security controls"
    ]
  },
  {
    "title": "Support",
    "body": [
      "We manage the environment so your team can focus on product and growth."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Cloud Hosting"
        pageSubtitle="Managed cloud infrastructure for scalable applications."
        pageSummary="Raflay provisions hosting environments that are secure, resilient, and optimized for cost and performance."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
