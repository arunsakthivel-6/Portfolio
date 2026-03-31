"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Laryoh",
    description: "Built and deployed a production-level e-commerce platform with modern UI, dynamic product handling, and scalable backend architecture.",
    url: "https://laryoh.com/",
    tags: ["E-commerce", "PHP", "MySQL", "UI/UX"]
  },
  {
    title: "BazaarMart",
    description: "Developed a full-featured marketplace web application supporting product management, structured data flow, and responsive UI.",
    url: "https://bazaarmart.com/",
    tags: ["Marketplace", "React", "Node.js", "MySQL"]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 15, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 15, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [4, -4]);
  const rotateY = useTransform(springX, [-500, 500], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full max-w-5xl min-h-[40vh] md:min-h-[50vh] glass rounded-[2rem] overflow-hidden cursor-pointer mb-16 md:mb-24 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Dynamic ambient hover glow */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between gap-6" style={{ transform: "translateZ(30px)" }}>

        <div className="flex justify-between items-start w-full">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-black/40 text-[10px] md:text-xs text-white/50 tracking-widest uppercase rounded-full border border-white/10 backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          {/* LIVE PROJECT BADGE */}
          <div className="flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[10px] md:text-xs text-accent font-bold tracking-[0.2em] uppercase">LIVE</span>
          </div>
        </div>

        <div className="mt-auto">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-4 group-hover:text-accent transition-colors duration-500">{project.title}</h3>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-8 group-hover:text-white/80 transition-colors duration-500">
            {project.description}
          </p>

          <div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase rounded-full hover:bg-accent transition-all duration-500 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              Initialize Project
              <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
            </a>
          </div>
        </div>

      </div>

    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section className="relative py-40 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-6 block">LIVE PROJECTS</span>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">FEATURED WORK</h2>
        </motion.div>

        <div className="flex flex-col w-full items-center">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Background depth glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[800px] bg-accent/5 blur-[200px] pointer-events-none rounded-full" />
    </section>
  );
}
