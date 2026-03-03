import { motion } from "framer-motion";
import { usePortfolio } from "@/hooks/use-portfolio";
import { Play } from "lucide-react";

export function Works() {
  const { data: works, isLoading } = usePortfolio();

  return (
    <section id="works" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6"
        >
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 tracking-[0.4rem] text-white">
              ARCHIVE
            </h2>
            <p className="text-white/40 text-xs tracking-[0.2rem] uppercase max-w-xl font-light">
              Selected works and visual narratives.
            </p>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-video bg-white/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {works?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative aspect-video bg-black cursor-pointer overflow-hidden"
              >
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-all duration-700" />
                
                {/* Minimal Title */}
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <h3 className="font-display font-medium text-[10px] tracking-[0.5rem] text-white uppercase text-center">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
