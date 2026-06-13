import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Web Development Portfolio | Raflay",
    description: "Browse web projects that demonstrate our ability to build user-centered digital products.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Web work",
    "body": [
      "Marketing sites, SaaS platforms, and customer portals."
    ],
    "bullets": [
      "Responsive builds",
      "Performance optimization",
      "Conversion-focused design"
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Web Development Portfolio"
        pageSubtitle="Selected web applications built by Raflay."
        pageSummary="Browse web projects that demonstrate our ability to build user-centered digital products."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
