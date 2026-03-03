import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold leading-none mb-4 tracking-[0.8rem] text-white"
          initial={{ opacity: 0, letterSpacing: "1.5rem" }}
          animate={{ opacity: 1, letterSpacing: "0.8rem" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          MSHIN
        </motion.h1>
        
        <motion.p 
          className="text-[10px] md:text-xs uppercase tracking-[0.6rem] text-white/40 font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          VIDEO ENGINEERING & VISUAL NARRATIVE
        </motion.p>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button 
            onClick={scrollToWorks}
            className="group relative px-10 py-4 border border-white/10 text-white/50 text-[10px] uppercase tracking-[0.4rem] hover:text-white hover:border-white/40 transition-all duration-700"
          >
            Explore
          </button>
        </motion.div>
      </div>
    </section>
  );
}
