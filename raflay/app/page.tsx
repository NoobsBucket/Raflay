import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Projects from "./components/projects";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects />
    <Footer />
    </>
  );
}
