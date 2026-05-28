"use client";

import SpaceBackground from "@/components/ui/SpaceBackground";
import Navbar from "@/components/ui/Navbar";
import GlowCursor from "@/components/ui/GlowCursor";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
      <SpaceBackground />
      <GlowCursor />
      <AnimatedGrid />
      <Navbar />

      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
