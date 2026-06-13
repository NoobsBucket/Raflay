import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Web Development Services in Islamabad — Raflay",
    description: "Raflay provides local web development services in Islamabad: end-to-end product delivery, custom platforms, and support.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Web Development Services in Islamabad</h1>
        <p>Based in Islamabad, Raflay delivers web development services tailored to local and international clients. We focus on robust backends, secure integrations, and maintainable codebases.</p>
        <h2>Local expertise</h2>
        <p>We combine timezone-aligned communication with global engineering practices to provide reliable delivery.</p>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
