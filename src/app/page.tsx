import About from "@/components/Main/About";
import Contact from "@/components/Main/Contact";
import Hero from "@/components/Main/Hero";
import Projects from "@/components/Main/Projects";
import StickyContact from "@/components/Main/StickyContact";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-main-page main-page-specific ">
    <StickyContact/>
    <Hero/>
    <About />
    <Projects/>
    <Contact />
    </main>
  );
}
