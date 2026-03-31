"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const EXPERIENCES = [
  {
    title: "Web Developer Intern",
    company: "Rademics Infotech",
    date: "Nov 2025 – May 2026",
    duration: "6 Months",
    details: [
      "Worked on PHP-based backend development",
      "Built and supported dynamic web pages",
      "Assisted in debugging, testing, and data handling",
      "Contributed to real-world application workflows"
    ],
    isPrimary: true
  },
  {
    title: "Intern",
    company: "Minnotara Energy India Pvt. Ltd.",
    date: "June - July 2025",
    duration: "26 Days",
    details: [
      "Assisted in field work and technical operations",
      "Performed data analysis and documentation",
      "Supported reporting and workflow tasks"
    ],
    isPrimary: false
  },
  {
    title: "Intern",
    company: "KMS Confectioneries Pvt. Ltd.",
    date: "July 2024",
    duration: "5 Days",
    details: [
      "Learned food production processes",
      "Understood industrial workflow and operations"
    ],
    isPrimary: false
  }
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-40 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="text-center mb-32 z-10"
        >
          <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-6 block">CAREER</span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">PROFESSIONAL EXPERIENCE</h2>
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
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={exp.company} className="relative flex items-center w-full mb-16 md:mb-32">
                  
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent transform -translate-x-1/2 z-20 ${exp.isPrimary ? 'shadow-[0_0_20px_#00ffff]' : ''}`}
                  >
                    {exp.isPrimary && (
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
                      {/* Floating idle motion wrap */}
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className={`group relative glass rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                          exp.isPrimary 
                           ? "border-accent/30 hover:shadow-accent/20 bg-white/[0.03] hover:bg-white/[0.05]" 
                           : "border-white/10 hover:shadow-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
                        }`}
                      >
                         {/* Soft Card Glow */}
                        <div className={`absolute inset-0 blur-3xl opacity-0 transition-opacity duration-500 pointer-events-none rounded-3xl ${
                          exp.isPrimary ? "bg-accent/10 group-hover:opacity-100" : "bg-white/5 group-hover:opacity-100"
                        }`} />

                        <div className="relative z-10">
                          <h3 className={`font-bold tracking-tight mb-2 ${
                            exp.isPrimary ? "text-3xl md:text-4xl text-white" : "text-2xl text-white/90"
                          }`}>
                            {exp.title}
                          </h3>
                          
                          <div className="flex flex-col gap-1 mb-6">
                            <h4 className="text-xl text-accent font-light">{exp.company}</h4>
                            <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                              {exp.date} &bull; <span className="text-white/70">{exp.duration}</span>
                            </p>
                          </div>
                          
                          <ul className="space-y-3 list-none">
                            {exp.details.map((detail, i) => (
                              <li key={i} className="flex items-start gap-3 text-white/60 font-light text-sm md:text-base leading-relaxed">
                                <span className={`mt-2 size-1.5 rounded-full shrink-0 ${exp.isPrimary ? "bg-accent" : "bg-white/30"}`} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
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
      
      {/* Background depth glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[800px] bg-accent/5 blur-[200px] pointer-events-none rounded-full translate-x-1/2" />
    </section>
  );
}
