import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";

export function Contacts() {
  return (
    <section id="contacts" className="py-32 bg-[#050505] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-8 tracking-[0.8rem] uppercase">
              CONTACT
            </h2>
            <p className="text-white/40 tracking-[0.3rem] uppercase text-[10px] mb-16 max-w-lg mx-auto font-light">
              Available for visual narrative commissions worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <a 
              href="https://t.me/placeholder" 
              target="_blank" 
              rel="noreferrer"
              className="group text-[10px] tracking-[0.5rem] uppercase text-white/60 hover:text-white transition-colors duration-500"
            >
              Telegram
            </a>
            
            <a 
              href="mailto:hello@placeholder.com" 
              className="group text-[10px] tracking-[0.5rem] uppercase text-white/60 hover:text-white transition-colors duration-500"
            >
              Email
            </a>

            <a 
              href="#" 
              className="group text-[10px] tracking-[0.5rem] uppercase text-white/60 hover:text-white transition-colors duration-500"
            >
              Instagram
            </a>
          </motion.div>
        </div>
        
        <div className="mt-40 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
          <p className="text-[10px] tracking-[0.3rem] text-white/20 uppercase">MSHIN © 2026. All rights reserved.</p>
          <button 
            onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[9px] tracking-[0.4rem] uppercase text-white/10 hover:text-white/40 transition-colors"
          >
            Back to top
          </button>
        </div>
      </div>
    </section>
  );
}
