"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "JavaScript", "React", "PHP", "MySQL", "Node.js", "MongoDB", "Git"
];

function FloatingSkill({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.15, 
        rotate: [0, -5, 5, 0],
        boxShadow: "0 0 25px rgba(0, 255, 255, 0.4)" 
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1
      }}
      className="px-6 py-3 glass rounded-2xl text-white/80 font-medium cursor-pointer transition-all duration-300 hover:border-accent hover:text-accent group relative overflow-hidden"
    >
      <span className="relative z-10">{skill}</span>
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-4 block">EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">SKILLS & TOOLS</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg font-light">
            Crafting digital experiences with a modern tech stack focused on <span className="text-white">scalability</span>, <span className="text-white">performance</span>, and <span className="text-white">immersive design</span>.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-4xl">
          {SKILLS.map((skill, i) => (
            <FloatingSkill key={skill} skill={skill} index={i} />
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
}
