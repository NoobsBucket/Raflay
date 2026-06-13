import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ServicesLinks from "./components/serviceslinks";
import Projects from "./components/projects";
import FAQ from "./components/FAQ";
import HeroStats from "./components/HeroStats";
import Industries from "./components/Industries";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Technologies from "./components/Technologies";
import ContactCTA from "./components/ContactCTA";

export async function generateMetadata() {
  return {
    title:
    "Raflay | Software Development, Web Development, Mobile Apps, AI & Creative Services",
     description:
    "Raflay is a software and creative agency providing web development, custom software development, mobile app development, AI solutions, cloud hosting, DevOps, UI/UX design, graphic design, video editing, VFX, motion graphics, and digital solutions worldwide.",

  
keywords: [
    // Brand
    "Raflay",

    // Software Development
    "software development company",
    "custom software development",
    "software engineering services",
    "enterprise software development",

    // Web Development
    "web development company",
    "website development services",
    "custom website development",
    "web application development",
    "frontend development",
    "backend development",
    "full stack development",
    "Next.js development",
    "React development",

    // Mobile Development
    "mobile app development",
    "Android app development",
    "iOS app development",
    "cross platform app development",
    "Flutter development",
    "React Native development",

    // AI
    "AI development company",
    "AI integration services",
    "machine learning solutions",
    "artificial intelligence services",
    "chatbot development",

    // DevOps & Cloud
    "DevOps services",
    "cloud hosting",
    "AWS services",
    "Docker deployment",
    "Kubernetes services",
    "CI CD implementation",

    // Design
    "UI UX design",
    "graphic design services",
    "logo design",
    "branding services",

    // Video
    "video editing services",
    "professional video editing",
    "YouTube video editing",
    "motion graphics",
    "VFX services",

    // Local
    "software company Pakistan",
    "web development company Pakistan",
    "software house Pakistan",
  ],
  };
}


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Industries />
      <HeroStats />
      <Projects />
      <Technologies />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ContactCTA />
      <FAQ />
      <Footer />
    </>
  );
}
