import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Top Web Development Companies — Raflay",
    description: "Discover top web development companies and how Raflay compares on engineering quality, delivery and cost.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Top Web Development Companies</h1>
        <p>We maintain high engineering standards and transparent delivery processes. Compare vendor capabilities and choose a partner that aligns with your product goals.</p>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
