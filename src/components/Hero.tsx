"use client";

import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Scene3D />
      
      <div className="z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-white/60 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4">
            Creating the Future
          </h2>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            ARUN SAKTHIVEL
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg leading-relaxed font-light mt-6">
            Full Stack Developer building <span className="text-accent">modern web applications</span>.
          </p>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 3, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0" />
          <span className="text-[10px] tracking-[0.5em] text-accent/50 uppercase">SCROLL FOR DEPTH</span>
        </motion.div>
      </div>
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
    </section>
  );
}
