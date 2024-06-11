"use client";
import About from "@/components/Main/About";
import Contact from "@/components/Main/Contact";
import Experience from "@/components/Main/Experience";
import Hero from "@/components/Main/Hero";
import Intro from "@/components/Main/Intro";
import Projects from "@/components/Main/Projects";
import StickyContact from "@/components/Main/StickyContact";
import AnimatedSection from "@/components/Reusable/AnimatedSection";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [showMessages, setShowMessages] = React.useState(true);

  const handleShowMessages = () => {
    setInterval(() => {
      setShowMessages(false);
    }, 2400);
  };
  handleShowMessages();
  return (
    <main className="min-h-screen bg-main-page main-page-specific ">
      <div className="flex flex-col gap-[50px]">
        {showMessages && <Intro />}
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
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact />
        </AnimatedSection>
      </div>
    </main>
  );
}
