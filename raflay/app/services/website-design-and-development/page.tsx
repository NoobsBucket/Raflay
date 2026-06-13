import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Website Design & Development — Raflay",
    description: "Professional website design and development services from Raflay — bespoke sites, responsive design, and performance-first implementation.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{maxWidth:1200,margin:'40px auto',padding:'0 20px'}}>
        <h1>Website Design & Development</h1>
        <p>Raflay builds responsive, high-performance websites and web apps. Our software dev teams pair designers and engineers to deliver accessible, SEO-friendly sites that convert.</p>
        <h2>What we offer</h2>
        <ul>
          <li>Custom designs and design systems</li>
          <li>Frontend development with Next.js</li>
          <li>Headless CMS integrations</li>
          <li>Performance optimisation and SEO</li>
        </ul>
      </main>
      <CategoryPanel categoryType="services" />
      <Footer />
    </>
  );
}
