"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy, Phone, X } from "lucide-react";
import { useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Torus, MeshDistortMaterial } from "@react-three/drei";

function Globe3D() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00ffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#ff00a0" />

      {/* Inner Sphere / Core */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a0a0a"
          roughness={0.7}
          metalness={0.5}
          wireframe={false}
        />
      </Sphere>
      <Sphere args={[2.05, 32, 32]}>
        <meshBasicMaterial
          color="#00ffff"
          wireframe={true}
          transparent
          opacity={0.05}
        />
      </Sphere>

      {/* Floating abstract rings to match the vibe */}
      <Torus args={[2.4, 0.15, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <MeshDistortMaterial color="#00ffff" distort={0.2} speed={1.5} roughness={0.2} metalness={0.8} />
      </Torus>

      <Torus args={[2.7, 0.1, 16, 100]} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <MeshDistortMaterial color="#ff00a0" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
      </Torus>

      <Torus args={[3, 0.05, 16, 100]} rotation={[0, Math.PI / 2, Math.PI / 6]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
      </Torus>
    </group>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const email = "arunsakthivel3007@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 px-4 md:px-8 bg-background overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10">

        {/* LEFT COMPONENT: The Sleek Contact Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-[#0c0c10] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col w-full max-w-xl mx-auto lg:mx-0"
        >
          {/* Subtle reflection inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

          <p className="text-white/40 text-xs md:text-sm tracking-[0.3em] font-medium uppercase mb-2">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12">Contact.</h2>

          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#13131a] rounded-xl border border-white/5 hover:border-accent/50 hover:bg-white/[0.02] transition-colors group w-full text-left"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Mail size={20} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <span className="text-white/80 font-medium tracking-wide">Email Me</span>
            </button>

            <a
              href="tel:+919150803842"
              className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#13131a] rounded-xl border border-white/5 hover:border-accent/50 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-accent/20 transition-colors">
                <Phone size={20} className="text-white group-hover:text-accent transition-colors" />
              </div>
              <span className="text-white/80 font-medium tracking-wide">+91 9150803842</span>
            </a>

            <a
              href="https://www.linkedin.com/in/arun-sakthivel-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#13131a] rounded-xl border border-white/5 hover:border-white/50 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="text-white/80 font-medium tracking-wide">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/a4un.zone_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#13131a] rounded-xl border border-white/5 hover:border-[#E1306C]/50 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#E1306C]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#E1306C] transition-colors"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <span className="text-white/80 font-medium tracking-wide">Instagram</span>
            </a>

            <a
              href="https://wa.me/9150803842"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#13131a] rounded-xl border border-white/5 hover:border-[#25D366]/50 hover:bg-white/[0.02] transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-[#25D366]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#25D366] transition-colors"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <span className="text-white/80 font-medium tracking-wide">WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 flex justify-between items-center bg-[#13131a] px-5 py-3 rounded-lg border border-white/5">
            <span className="text-white/40 text-xs font-mono tracking-widest">{email}</span>
            <button onClick={copyEmail} className="text-white/40 hover:text-accent transition-colors">
              {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
            </button>
          </div>
        </motion.div>

        {/* RIGHT COMPONENT: 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="w-full h-[500px] lg:h-[700px] relative pointer-events-none"
        >
          {/* Subtle backlight for the 3D model */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 blur-[150px] rounded-full top-0 right-0" />

          <div className="absolute inset-0 pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
              <Globe3D />
            </Canvas>
          </div>
        </motion.div>

      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#0c0c10] border border-white/10 rounded-2xl p-8 shadow-2xl max-w-sm w-full"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center gap-6 mt-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
                  <Mail size={32} className="text-accent" />
                </div>
                
                <div>
                   <h3 className="text-2xl font-bold text-white mb-2">Drop me a line</h3>
                   <p className="text-white/60 text-sm mb-6">Let&apos;s build something great together. Feel free to copy my email below or open your mail app directly.</p>
                  
                  <div className="bg-[#13131a] p-4 rounded-xl border border-white/5 mb-6 flex justify-between items-center group hover:border-white/10 transition-colors">
                    <span className="text-white/80 font-mono text-sm tracking-wide truncate">{email}</span>
                    <button 
                      onClick={copyEmail} 
                      className="ml-4 p-2 bg-white/5 rounded-lg text-white/40 hover:text-accent hover:bg-accent/10 transition-colors shrink-0"
                    >
                      {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`mailto:${email}`}
                      className="bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-white/90 transition-colors text-center"
                    >
                      Open App
                    </a>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-white/5 text-white font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
