import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Website Development Company — Raflay",
    description: "Raflay is a website development company offering custom builds: WordPress, Laravel, Shopify, and eCommerce platforms.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Website Development Company</h1>
        <p>Raflay delivers custom website development across multiple platforms: from headless CMS setups to full eCommerce solutions.</p>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
