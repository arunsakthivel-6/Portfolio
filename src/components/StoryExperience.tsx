import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);







export function StoryExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      // Control HTML DOM Overlays natively via timeline matching the scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
        }
      });
      
      // Scene 1: Identity fades and lifts out slowly (0.0 -> 0.45)
      tl.to("#scene1-text", { opacity: 0, y: -150, scale: 0.9, duration: 0.45, ease: "power2.inOut" }, 0);
      
      // Scene 2: Objective slides and fades in (starts 0.15, fades out by 0.85)
      tl.fromTo("#scene2-text", 
        { opacity: 0, y: 150, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.inOut" }, 
        0.15
      );
      tl.to("#scene2-text", { opacity: 0, y: -150, scale: 1.05, duration: 0.4, ease: "power2.inOut" }, 0.55);

      // Scene 3: Projects arrival (starts merging at 0.65)
      tl.fromTo("#scene3-cards", 
        { opacity: 0, y: 200, scale: 0.85, filter: "blur(15px)" }, 
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.4, ease: "power2.out" }, 
        0.65
      );

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[200vh] bg-[#050505]">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden">


      {/* --- SCENE 1 : HERO DOM --- */}
      <div id="scene1-text" className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
        <h1 className="text-5xl md:text-9xl font-black tracking-tighter text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          ARUN SAKTHIVEL
        </h1>
        <p className="max-w-xl mx-auto text-white/50 text-base md:text-xl font-light mb-12">
          Full Stack Developer building <span className="text-accent font-medium">modern web applications</span>.
        </p>
        <div className="flex flex-col items-center gap-6 mt-4">
          <p className="text-[11px] tracking-[0.8em] text-accent font-black uppercase opacity-80">
            SCROLL TO EXPLORE
          </p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent via-accent/50 to-transparent animate-pulse" />
        </div>
      </div>

      {/* --- SCENE 2 : OBJECTIVE DOM --- */}
      <div id="scene2-text" className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center opacity-0 px-4">
        <div className="max-w-4xl">
          <p className="text-2xl md:text-5xl font-light leading-relaxed md:leading-tight mb-12 tracking-wide text-white/90">
            "I’m a full stack developer focused on building <span className="text-white font-bold inline-block text-accent">scalable, high-performance</span> web applications. I work with modern frontend frameworks and backend systems to deliver clean, efficient, and user-focused solutions."
          </p>
          <div className="w-16 h-[1px] bg-accent/40 mx-auto" />
        </div>
      </div>

      {/* --- SCENE 3 : PROJECTS DOM --- */}
      <div id="scene3-cards" className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 px-4">
        
        <div className="absolute top-24 text-center">
           <span className="text-accent tracking-[0.5em] text-xs font-bold uppercase mb-4 block">LIVE PROJECTS</span>
           <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">FEATURED WORK</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl mt-24">
          
          {/* Laryoh Project Card */}
          <div className="flex-1 glass border border-accent/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,255,255,0.05)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)] hover:-translate-y-4 hover:border-accent/50 transition-all duration-500 bg-white/[0.02] backdrop-blur-xl group cursor-pointer">
            <div className="flex flex-wrap gap-2 mb-6">
               <span className="px-3 py-1 bg-white/5 text-[10px] text-accent tracking-widest uppercase rounded-full border border-white/10">E-commerce</span>
               <span className="px-3 py-1 bg-white/5 text-[10px] text-white/50 tracking-widest uppercase rounded-full border border-white/10">PHP</span>
               <span className="px-3 py-1 bg-white/5 text-[10px] text-white/50 tracking-widest uppercase rounded-full border border-white/10">MySQL</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-accent transition-colors duration-500">Laryoh</h3>
            <p className="text-white/50 text-lg mb-10 font-light">
              Built and deployed a production-level e-commerce platform with modern UI, dynamic product handling, and scalable backend architecture.
            </p>
            <a href="https://laryoh.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent transition-colors duration-300">
              Initialize Project <ExternalLink size={18} />
            </a>
          </div>
          
          {/* BazaarMart Project Card */}
          <div className="flex-1 glass border border-accent/20 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,255,255,0.05)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)] hover:-translate-y-4 hover:border-accent/50 transition-all duration-500 bg-white/[0.02] backdrop-blur-xl group cursor-pointer">
             <div className="flex flex-wrap gap-2 mb-6">
               <span className="px-3 py-1 bg-white/5 text-[10px] text-accent tracking-widest uppercase rounded-full border border-white/10">Marketplace</span>
               <span className="px-3 py-1 bg-white/5 text-[10px] text-white/50 tracking-widest uppercase rounded-full border border-white/10">React</span>
               <span className="px-3 py-1 bg-white/5 text-[10px] text-white/50 tracking-widest uppercase rounded-full border border-white/10">Node.js</span>
               <span className="px-3 py-1 bg-white/5 text-[10px] text-white/50 tracking-widest uppercase rounded-full border border-white/10">MySQL</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 group-hover:text-accent transition-colors duration-500">BazaarMart</h3>
            <p className="text-white/50 text-lg mb-10 font-light">
              Developed a full-featured marketplace web application supporting product management, structured data flow, and responsive UI.
            </p>
            <a href="https://bazaarmart.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-accent transition-colors duration-300">
              Initialize Project <ExternalLink size={18} />
            </a>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}
