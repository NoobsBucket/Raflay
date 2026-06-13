import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Best AI Tools for Business | Raflay",
    description: "A practical review of AI tools that can streamline business workflows and operations.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Categories",
    "body": [
      "Writing tools, chat assistants, analytics platforms, and automation tools."
    ],
    "bullets": [
      "Chat-based assistants",
      "Document automation",
      "Data insights"
    ]
  },
  {
    "title": "How to choose",
    "body": [
      "Pick tools that fit your workflows, data privacy, and ROI goals."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Best AI Tools for Business"
        pageSubtitle="AI tools that help teams work smarter and faster."
        pageSummary="A practical review of AI tools that can streamline business workflows and operations."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
