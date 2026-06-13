import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "What is DevOps? | Raflay",
    description: "Learn how DevOps enables faster, more reliable software releases with automation and collaboration.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Definition",
    "body": [
      "DevOps is the combination of culture, process, and tools for software delivery."
    ]
  },
  {
    "title": "Practices",
    "body": [
      "Continuous integration, infrastructure as code, monitoring, and automation."
    ],
    "bullets": [
      "CI/CD",
      "Infrastructure automation",
      "Observability"
    ]
  },
  {
    "title": "Benefit",
    "body": [
      "DevOps improves deployment speed, quality, and reliability."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="What is DevOps?"
        pageSubtitle="Understanding modern software delivery practices."
        pageSummary="Learn how DevOps enables faster, more reliable software releases with automation and collaboration."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
