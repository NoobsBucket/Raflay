import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DetailPage from "@/app/components/DetailPage";

export async function generateMetadata() {
  return {
    title: "Mobile App Project Case Study | Raflay",
    description: "A case study that walks through product planning, launch, and retention improvements.",
  };
}

export default function Page() {
  const sections = [
  {
    "title": "Goal",
    "body": [
      "The client wanted an app that users would return to regularly."
    ]
  },
  {
    "title": "Approach",
    "body": [
      "We prioritized the core experience, analytics, and retention loops."
    ],
    "bullets": [
      "User onboarding",
      "Push strategy",
      "Feature iteration"
    ]
  },
  {
    "title": "Outcome",
    "body": [
      "Monthly active users and retention both increased significantly."
    ]
  }
];

  return (
    <>
      <Navbar />
      <DetailPage
        pageTitle="Mobile App Project Case Study"
        pageSubtitle="Driving engagement and retention with a mobile app launch."
        pageSummary="A case study that walks through product planning, launch, and retention improvements."
        sections={sections}
        ctaText="Book a discovery call with Raflay"
        ctaLink="mailto:hello@raflay.comm"
      />
      <Footer />
    </>
  );
}
