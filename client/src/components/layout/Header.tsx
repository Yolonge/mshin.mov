import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Film } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo("top")}
        >
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 box-glow">
            <Film className="text-primary-foreground w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider">
            EDIT<span className="text-primary">PRO</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo("works")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Работы
          </button>
          <button 
            onClick={() => scrollTo("services")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Услуги
          </button>
          <button 
            onClick={() => scrollTo("contacts")}
            className="text-sm font-medium px-5 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Контакты
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
