"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower, more premium loading experience
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 1200); // linger at 100% for smooth fade
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Glitching / Floating 3D wrapper */}
          <motion.div
            className="relative perspective-[1000px]"
            animate={{ 
              rotateX: [5, -5, 5], 
              rotateY: [-5, 5, -5],
              y: [-10, 10, -10]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Main Text */}
            <motion.h1
              className="text-4xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70"
              style={{ 
                WebkitTextStroke: "1px rgba(0, 255, 255, 0.5)",
                textShadow: "0 0 40px rgba(0, 255, 255, 0.4)",
              }}
            >
              ARUN SAKTHIVEL
            </motion.h1>

            {/* Glitch layers */}
            <motion.h1
              className="absolute inset-0 text-4xl md:text-7xl font-bold tracking-tighter text-accent mix-blend-screen opacity-50 select-none pointer-events-none blur-[2px]"
              animate={{ 
                x: [-2, 2, -1, 3, -2], 
                opacity: [0.3, 0.7, 0.2, 0.8, 0.3],
                clipPath: [
                  "inset(20% 0 80% 0)",
                  "inset(80% 0 10% 0)",
                  "inset(40% 0 50% 0)",
                  "inset(10% 0 60% 0)",
                  "inset(90% 0 5% 0)"
                ]
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
              style={{ transform: "translateZ(-10px)" }}
            >
              ARUN SAKTHIVEL
            </motion.h1>
            
            <motion.h1
              className="absolute inset-0 text-4xl md:text-7xl font-bold tracking-tighter text-[#ff0055] mix-blend-screen opacity-40 select-none pointer-events-none blur-[1px]"
              animate={{ 
                x: [2, -2, 1, -3, 2],
                clipPath: [
                  "inset(80% 0 10% 0)",
                  "inset(20% 0 80% 0)",
                  "inset(10% 0 60% 0)",
                  "inset(40% 0 50% 0)",
                  "inset(5% 0 90% 0)"
                ]
              }}
              transition={{ duration: 0.15, repeat: Infinity, repeatType: "mirror" }}
              style={{ transform: "translateZ(10px)" }}
            >
              ARUN SAKTHIVEL
            </motion.h1>
          </motion.div>
          
          {/* Subtle Progress Area */}
          <motion.div 
            className="mt-16 flex flex-col items-center gap-4 opacity-0"
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <div className="w-64 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-accent shadow-[0_0_15px_#00ffff]" 
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            
            <motion.div className="flex justify-between w-full text-white/30 text-[10px] tracking-[0.3em] font-mono">
              <span>LOADING ENVIRONMENT</span>
              <span>{progress}%</span>
            </motion.div>
          </motion.div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
