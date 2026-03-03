import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const scrollToWorks = () => {
    document.getElementById("works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border text-sm font-medium mb-8 text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Открыт для новых проектов
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Делаю видео, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300 text-glow">
              которые цепляют
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Профессиональный видеомонтаж, саунд-дизайн и цветокоррекция. 
            Превращаю исходники в захватывающие истории для брендов, YouTube и рекламы.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={scrollToWorks}
              className="flex items-center justify-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 box-glow"
            >
              Смотреть работы
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById("showreel")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-3 bg-secondary text-foreground font-semibold px-8 py-4 rounded-full border border-border hover:border-primary/50 transition-colors duration-300 group"
            >
              <Play className="w-5 h-5 text-primary group-hover:fill-primary transition-all" />
              Showreel 2024
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
