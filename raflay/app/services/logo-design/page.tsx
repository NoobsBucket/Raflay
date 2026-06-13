import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Logo Design | Raflay",
    description: "Raflay crafts logos that are scalable, distinctive, and suited for digital and print use.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Logo process",
    "body": [
      "Research, exploration, refinement, and delivery of production-ready assets."
    ],
    "bullets": [
      "Main and icon marks",
      "SVG asset delivery",
      "Brand usage guidance"
    ]
  },
  {
    "title": "Why it matters",
    "body": [
      "A strong logo helps your brand feel cohesive and professional."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Logo Design"
        pageSubtitle="Memorable brand marks and identity systems."
        pageSummary="Raflay crafts logos that are scalable, distinctive, and suited for digital and print use."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
