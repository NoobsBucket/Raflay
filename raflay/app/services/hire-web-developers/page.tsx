import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Hire Web Developers — Raflay Managed Teams & Freelancers",
    description: "Hire web developers through Raflay — managed teams, staff augmentation, and project-based engagements.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Hire Web Developers</h1>
        <p>Raflay offers flexible resourcing: hire individual developers, a managed team, or a hybrid model to accelerate delivery while maintaining quality and product ownership.</p>
        <h2>Engagement models</h2>
        <ul>
          <li>Short-term contractors for feature sprints</li>
          <li>Long-term dedicated teams for product development</li>
          <li>Project-based fixed-price delivery</li>
        </ul>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
