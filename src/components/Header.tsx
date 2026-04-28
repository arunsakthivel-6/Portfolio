"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-[110] px-6 py-4 md:px-12 md:py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-end pointer-events-none">

        {/* Navigation */}
        <div className="pointer-events-auto flex items-center gap-4 md:gap-8 bg-white/[0.03] backdrop-blur-2xl border border-white/10 px-6 py-2 rounded-full shadow-2xl">
          <button 
            onClick={scrollToContact}
            className="text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            About
          </button>
          <div className="w-[1px] h-4 bg-white/10" />
          <a 
            href="https://drive.google.com/drive/folders/1bSTFkBSOF7HSYU9N4PU_gX-wzOFoId9i" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent hover:scale-105 transition-transform"
          >
            CV <Download size={16} />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
