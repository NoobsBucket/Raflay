import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import CategoryPanel from "@/app/components/CategoryPanel";

export async function generateMetadata() {
  return {
    title: "Services | Raflay",
    description: "Explore Raflay services with quick filtering for software, video, design, cloud, and mobile offerings.",
  };
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        <section style={{ marginBottom: 40 }}>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 5vw, 72px)", color: "#D42030", margin: 0 }}>Services</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 18, color: "#444", maxWidth: 760, lineHeight: 1.75, marginTop: 18 }}>
            Explore Raflay's service catalog software, video, design, cloud, or mobile.
          </p>
        </section>
        <CategoryPanel categoryType="services" />
      </main>
      <Footer />
    </>
  );
}
