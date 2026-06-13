import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "AWS vs Azure | Raflay",
    description: "Understand AWS and Azure differences so you can choose the right cloud strategy for your project.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "AWS strength",
    "body": [
      "AWS offers a broad, mature service ecosystem and deep cloud tooling."
    ]
  },
  {
    "title": "Azure strength",
    "body": [
      "Azure integrates strongly with Microsoft products and enterprise environments."
    ],
    "bullets": [
      "Virtual machines and compute",
      "Managed storage",
      "Enterprise services"
    ]
  },
  {
    "title": "How to decide",
    "body": [
      "Choose based on current systems, skillsets, and long-term strategy."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="AWS vs Azure"
        pageSubtitle="A comparison of leading cloud platforms."
        pageSummary="Understand AWS and Azure differences so you can choose the right cloud strategy for your project."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
