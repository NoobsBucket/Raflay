import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "UI/UX Design | Raflay",
    description: "Raflay designs interfaces that are easy to use, visually appealing, and aligned with your brand.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Design process",
    "body": [
      "Research, wireframes, prototypes, and high-fidelity designs."
    ],
    "bullets": [
      "User flows",
      "Responsive interfaces",
      "Design systems"
    ]
  },
  {
    "title": "Outcome",
    "body": [
      "Interfaces that increase clarity, trust, and conversion."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="UI/UX Design"
        pageSubtitle="User-centered design for intuitive digital experiences."
        pageSummary="Raflay designs interfaces that are easy to use, visually appealing, and aligned with your brand."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
