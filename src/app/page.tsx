"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Loader } from "@/components/Loader";
import { StoryExperience } from "@/components/StoryExperience";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { AdditionalProjects } from "@/components/AdditionalProjects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 20,
    damping: 25,
    restDelta: 0.0001
  });

  useEffect(() => {
    // Removed conflicting GSAP section logic that manipulated document flow and caused scroll jerking.
    // Framer Motion inside the individual components now handles all viewport reveals smoothly.

    // Premium Cursor Glow Trail Effect
    const cursorGlow = document.createElement("div");
    cursorGlow.className = "fixed pointer-events-none z-[99] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-0 transition-opacity duration-1000";
    document.body.appendChild(cursorGlow);

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorGlow, {
         left: e.clientX,
         top: e.clientY,
         duration: 2.5,
         opacity: 1,
         ease: "expo.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cursorGlow.remove();
    };
  }, []);

  return (
    <main ref={containerRef} className="relative bg-[#050505] text-white selection:bg-accent selection:text-black min-h-screen">
      <Header />
      <Loader />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[101] origin-left shadow-[0_0_10px_#00ffff]"
        style={{ scaleX }}
      />
      
      <StoryExperience />
      


      <Experience />
      
      <Education />
      
      <Certifications />
      
      <Skills />
      
      <AdditionalProjects />
      
      <Contact />
      
      {/* Cinematic Grain Overlay ensures premium depth */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
