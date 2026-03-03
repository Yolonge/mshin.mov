import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Showreel() {
  return (
    <section id="showreel" className="py-0 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative aspect-video w-full overflow-hidden bg-black"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-6 mx-auto group cursor-pointer hover:border-white/40 transition-colors duration-700">
                <Play className="w-6 h-6 text-white/20 group-hover:text-white transition-colors duration-700 ml-1" />
              </div>
              <span className="text-[10px] tracking-[0.6rem] text-white/20 uppercase font-light">Play Showreel</span>
            </div>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
