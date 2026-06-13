import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Next.js vs React | Raflay",
    description: "A practical guide to choosing between React alone and Next.js for product development.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "React",
    "body": [
      "React is a library for building UI components."
    ]
  },
  {
    "title": "Next.js",
    "body": [
      "Next.js adds routing, rendering, and server-side capabilities on top of React."
    ],
    "bullets": [
      "Built-in routing",
      "Server-side rendering",
      "Performance optimization"
    ]
  },
  {
    "title": "Which to choose",
    "body": [
      "Use Next.js for public-facing and SEO important sites, React alone for client-side apps."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Next.js vs React"
        pageSubtitle="Comparing React and the Next.js framework for modern web development."
        pageSummary="A practical guide to choosing between React alone and Next.js for product development."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <CategoryPanel categoryType="blog" />
      <Footer />
    </>
  );
}
