import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Portfolio | Raflay",
    description: "Explore representative work that highlights our product thinking, technical delivery, and creative polish.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Portfolio highlights",
    "body": [
      "Featured web applications, mobile products, and video projects with measurable results."
    ],
    "bullets": [
      "Product launches",
      "Growth initiatives",
      "Creative campaigns"
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Portfolio"
        pageSubtitle="A showcase of Raflay\u2019s best web, mobile, and creative work."
        pageSummary="Explore representative work that highlights our product thinking, technical delivery, and creative polish."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
