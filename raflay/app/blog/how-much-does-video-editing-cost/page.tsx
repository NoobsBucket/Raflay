import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "How much does video editing cost? | Raflay",
    description: "Learn what drives video editing costs and how to estimate packages for your project.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Cost factors",
    "body": [
      "Project duration, complexity, motion graphics, and revisions impact cost."
    ],
    "bullets": [
      "Simple edits",
      "Tiered packages",
      "Polish and delivery"
    ]
  },
  {
    "title": "Budget planning",
    "body": [
      "Set expectations around turnaround, revisions, and asset quality."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="How much does video editing cost?"
        pageSubtitle="A budget guide for video production and editing services."
        pageSummary="Learn what drives video editing costs and how to estimate packages for your project."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
