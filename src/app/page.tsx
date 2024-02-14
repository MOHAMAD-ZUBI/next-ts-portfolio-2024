import About from "@/components/Main/About";
import Contact from "@/components/Main/Contact";
import Experience from "@/components/Main/Experience";
import Hero from "@/components/Main/Hero";
import Projects from "@/components/Main/Projects";
import StickyContact from "@/components/Main/StickyContact";
import AnimatedSection from "@/components/Reusable/AnimatedSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-main-page main-page-specific ">
   <div className="flex flex-col gap-[50px]">
   <StickyContact/>
    <AnimatedSection id="hero" >
      <Hero/>
    </AnimatedSection>
    <AnimatedSection id="about" >
    <About />
    </AnimatedSection>
    <AnimatedSection id="exp" >
    <Experience />
    </AnimatedSection>
    <AnimatedSection id="work">
    <Projects/>
    </AnimatedSection>
    <AnimatedSection id="contact" >
    <Contact />
    </AnimatedSection>
   </div>
    
    
    </main>
  );
}
