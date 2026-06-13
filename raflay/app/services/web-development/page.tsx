import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Web Development | Raflay",
    description: "Raflay creates modern, scalable web applications with strong UX, reliable infrastructure, and measurable outcomes.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "What we build",
    "body": [
      "Custom web applications, platforms, and SaaS products built for performance and conversion.",
      "Responsive user experiences and scalable backend services designed for growth."
    ],
    "bullets": [
      "React and Next.js frontends",
      "API-first backends",
      "Secure login and data workflows"
    ]
  },
  {
    "title": "Our approach",
    "body": [
      "Discovery, design, development, and launch with continuous feedback and quality checks."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Web Development"
        pageSubtitle="Full-stack web engineering for growth-ready digital products."
        pageSummary="Raflay creates modern, scalable web applications with strong UX, reliable infrastructure, and measurable outcomes."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
