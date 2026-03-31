"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  "Line Follower Robot",
  "Maze Solver Robot",
  "Health Monitoring App",
  "Gesture Controlled Robot"
];

export function AdditionalProjects() {
  return (
    <section className="relative py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <span className="text-accent/50 tracking-[0.3em] text-[10px] font-bold uppercase mb-2 block">OTHER EXPLORATIONS</span>
          <h3 className="text-2xl md:text-3xl font-bold text-white/80">Additional Projects</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="px-6 py-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-colors duration-300 flex items-center gap-3"
            >
              <div className="w-1.5 h-1.5 bg-accent/40 rounded-full" />
              <span className="text-white/70 font-light">{project}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
