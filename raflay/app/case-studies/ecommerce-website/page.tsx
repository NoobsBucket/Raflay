import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Ecommerce Website Case Study | Raflay",
    description: "A case study showing improved performance, checkout flow, and customer acquisition.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Challenge",
    "body": [
      "The ecommerce site was slow, hard to update, and had low conversion rates."
    ]
  },
  {
    "title": "Solution",
    "body": [
      "We rebuilt the storefront with faster pages, clearer product detail, and simplified checkout."
    ],
    "bullets": [
      "Reduced load time",
      "Improved UX",
      "Faster merchandising updates"
    ]
  },
  {
    "title": "Result",
    "body": [
      "Conversions improved and site management became easier for the brand."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Ecommerce Website Case Study"
        pageSubtitle="How Raflay transformed an ecommerce storefront for better conversions."
        pageSummary="A case study showing improved performance, checkout flow, and customer acquisition."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
