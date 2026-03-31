"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EDUCATION = [
  {
    institution: "SNS College Of Technology",
    degree: "B.E. Mechatronics Engineering",
    date: "2022 – 2026",
    details: "CGPA: 7.8 / 10 (up to 6th semester)",
    isPrimary: true
  },
  {
    institution: "MOHAMMED SATHAK DASTAGIR MAT.HR.SEC.SCHOOL",
    degree: "Higher Secondary Certificate (HSC)",
    date: "2021 – 2022",
    details: "Percentage: 79% • Location: Ramanathapuram",
    isPrimary: false
  },
  {
    institution: "HOUSING BOARD MAT.HR.SEC.SCHOOL",
    degree: "Secondary School Leaving Certificate (SSLC)",
    date: "2019 – 2020",
    details: "Percentage: 73% • Location: Ramanathapuram",
    isPrimary: false
  }
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-40 px-4 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="text-center mb-32 z-10"
        >
          <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-6 block">ACADEMIC BACKGROUND</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">EDUCATION</h2>
        </motion.div>
        
        <div className="relative w-full" ref={containerRef}>
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 transform md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-accent shadow-[0_0_15px_#00ffff] origin-top h-full"
              style={{ scaleY }}
            />
          </div>

          <div className="flex flex-col w-full">
            {EDUCATION.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={edu.institution} className="relative flex items-center w-full mb-16 md:mb-32">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-[#050505] border-2 border-accent transform -translate-x-1/2 z-20 ${edu.isPrimary ? 'shadow-[0_0_20px_#00ffff]' : ''}`}
                  >
                    {edu.isPrimary && (
                      <span className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />
                    )}
                  </motion.div>

                  {/* Glass Card */}
                  <div className={`w-full pl-16 md:pl-0 md:w-[45%] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 2.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className={`group relative glass rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                          edu.isPrimary 
                           ? "border-accent/30 hover:shadow-accent/20 bg-white/[0.03] hover:bg-white/[0.05]" 
                           : "border-white/10 hover:shadow-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                        }`}
                      >
                         {/* Soft Card Glow */}
                        <div className={`absolute inset-0 blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none rounded-3xl ${
                          edu.isPrimary ? "bg-accent/10 group-hover:opacity-100" : "bg-white/5 group-hover:opacity-100"
                        }`} />

                        <div className="relative z-10 w-full">
                          <h3 className={`font-bold tracking-tight mb-2 ${
                            edu.isPrimary ? "text-2xl md:text-3xl text-white" : "text-xl md:text-2xl text-white/90"
                          }`}>
                            {edu.institution}
                          </h3>
                          
                          <div className="flex flex-col gap-2 mb-6">
                            <h4 className="text-lg text-accent font-light leading-tight">{edu.degree}</h4>
                            <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                              {edu.date}
                            </p>
                          </div>
                          
                          <div className="inline-block px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                            <p className="flex items-center gap-3 text-white/80 font-medium text-sm md:text-base">
                              <span className={`size-1.5 rounded-full shrink-0 ${edu.isPrimary ? "bg-accent" : "bg-white/50"}`} />
                              {edu.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background depth glow - swapped to left side for balance since experience glows right */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[800px] bg-accent/5 blur-[200px] pointer-events-none rounded-full -translate-x-1/2" />
    </section>
  );
}
