import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "AWS Services | Raflay",
    description: "Raflay builds and operates AWS-based infrastructure for reliable and extensible applications.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "AWS expertise",
    "body": [
      "EC2, Lambda, S3, RDS, and modern AWS service patterns."
    ],
    "bullets": [
      "Serverless design",
      "Infrastructure as code",
      "Security and compliance"
    ]
  },
  {
    "title": "Optimization",
    "body": [
      "We optimize AWS costs, performance, and reliability with best practices."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="AWS Services"
        pageSubtitle="AWS architecture, deployment, and managed cloud operations."
        pageSummary="Raflay builds and operates AWS-based infrastructure for reliable and extensible applications."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
