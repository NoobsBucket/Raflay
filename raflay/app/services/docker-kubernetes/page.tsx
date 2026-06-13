import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Docker & Kubernetes | Raflay",
    description: "Raflay uses Docker and Kubernetes to deploy applications consistently and manage scalability.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Container workflow",
    "body": [
      "Docker containers for consistent builds and Kubernetes for orchestrated deployments."
    ],
    "bullets": [
      "Container builds",
      "Helm charts",
      "Cluster management"
    ]
  },
  {
    "title": "Production readiness",
    "body": [
      "We configure health checks, autoscaling, and deployment rollouts for safer releases."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Docker & Kubernetes"
        pageSubtitle="Container-based deployments for modern platforms."
        pageSummary="Raflay uses Docker and Kubernetes to deploy applications consistently and manage scalability."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
