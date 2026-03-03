import { motion } from "framer-motion";
import { usePortfolio } from "@/hooks/use-portfolio";
import { Play } from "lucide-react";

export function Works() {
  const { data: works, isLoading } = usePortfolio();

  return (
    <section id="works" className="py-24 bg-secondary/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Избранные <span className="text-primary">работы</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Проекты, которыми я горжусь. От рекламных роликов до музыкальных клипов.
            </p>
          </div>
          
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium bg-primary/5">
              Все
            </span>
            <span className="px-4 py-2 rounded-full border border-border text-muted-foreground text-sm font-medium hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer">
              Коммерция
            </span>
            <span className="px-4 py-2 rounded-full border border-border text-muted-foreground text-sm font-medium hover:border-primary/50 hover:text-foreground transition-colors cursor-pointer hidden sm:inline-flex">
              Музыка
            </span>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/5] rounded-2xl bg-secondary animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-secondary cursor-pointer"
              >
                <img 
                  src={item.thumbnailUrl} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Play Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display font-bold text-2xl text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
