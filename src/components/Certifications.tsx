"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Sparkles, ShieldCheck } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "MERN Full Stack Development",
    issuer: "Revamp Academy",
    icon: Code2,
  },
  {
    title: "C, C++, Python",
    issuer: "CSE (Private Coaching Centre)",
    icon: Code2,
  },
  {
    title: "Rapid Manufacturing",
    issuer: "NPTEL",
    icon: Cpu,
  },
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    icon: Sparkles,
  },
  {
    title: "Various Online Courses",
    issuer: "SQL, Ethical Hacking, Machine Learning & AI, Quantitative Aptitude",
    icon: ShieldCheck,
  }
];

export function Certifications() {
  return (
    <section className="relative py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-24 z-10"
        >
          <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-6 block">ACHIEVEMENTS</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            COURSES & CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full z-10 justify-center">
          {CERTIFICATIONS.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2.5, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="group relative glass rounded-3xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-white/5 hover:border-accent/30 bg-white/[0.01] hover:bg-white/[0.03]">
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 rounded-3xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors duration-500">
                      <Icon className="text-white/50 group-hover:text-accent transition-colors duration-500" size={24} />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-500">
                      {cert.title}
                    </h3>

                    <div className="mt-auto pt-6">
                      <div className="h-[1px] w-8 bg-white/10 mb-4 group-hover:w-full group-hover:bg-accent/30 transition-all duration-700 ease-out" />
                      <p className="text-sm font-light leading-relaxed text-white/50 group-hover:text-white/70 transition-colors duration-500">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-accent/5 blur-[200px] pointer-events-none rounded-full" />
    </section>
  );
}
