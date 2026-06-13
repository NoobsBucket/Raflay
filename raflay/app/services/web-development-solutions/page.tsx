import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Expert Web Development Solutions — Raflay",
    description: "Bespoke web development solutions from Raflay: custom platforms, integrations, and product engineering.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Expert Web Development Solutions</h1>
        <p>Raflay builds tailored web platforms — from marketplaces to SaaS products. We emphasis maintainability, observability, and scalable architecture.</p>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
