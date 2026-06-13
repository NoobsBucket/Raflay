import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "React Development | Raflay",
    description: "Raflay delivers React applications that are modular, maintainable, and responsive across devices.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "What we build",
    "body": [
      "Interactive dashboards, landing pages, and application interfaces with reusable component systems."
    ],
    "bullets": [
      "Custom UI libraries",
      "State management solutions",
      "Progressive enhancement"
    ]
  },
  {
    "title": "Development process",
    "body": [
      "Component-driven development with testable code and clean architecture."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="React Development"
        pageSubtitle="Flexible frontend development with React components."
        pageSummary="Raflay delivers React applications that are modular, maintainable, and responsive across devices."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
