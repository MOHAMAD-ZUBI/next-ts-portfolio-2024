import About from "@/components/Main/About";
import Contact from "@/components/Main/Contact";
import Experience from "@/components/Main/Experience";
import Header from "@/components/Main/Header";
import Hero from "@/components/Main/Hero";
import Intro from "@/components/Main/Intro";
import NewProjects from "@/components/Main/NewProjects";
import Projects from "@/components/Main/Projects";
import StickyContact from "@/components/Main/StickyContact";
import AnimatedSection from "@/components/Reusable/AnimatedSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  // const [showMessages, setShowMessages] = React.useState(true);

  // const handleShowMessages = () => {
  //   setInterval(() => {
  //     setShowMessages(false);
  //   }, 2500);
  // };
  // handleShowMessages();
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-main-page main-page-specific overflow-y-scroll no-scrollbar ">
        <div className="flex flex-col gap-[50px]">
          <StickyContact />
          <AnimatedSection id="hero">
            <Hero />
          </AnimatedSection>
          <AnimatedSection id="about">
            <About />
          </AnimatedSection>
          <AnimatedSection id="exp">
            <Experience />
          </AnimatedSection>

          <AnimatedSection id="work">
            <NewProjects />
          </AnimatedSection>
          <AnimatedSection id="contact">
            <Contact />
          </AnimatedSection>
        </div>
      </main>
    </div>
  );
}
