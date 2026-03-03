import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Showreel() {
  return (
    <section id="showreel" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-green-600 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative aspect-video bg-secondary rounded-3xl overflow-hidden border border-border/50">
            {/* Showreel Placeholder Image - using a nice dark setup image */}
            {/* editing bay dark tech setup */}
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80" 
              alt="Showreel Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 rounded-full bg-primary/20 backdrop-blur-md border border-primary/50 flex items-center justify-center box-glow"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                </div>
              </motion.div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <h3 className="font-display font-bold text-3xl mb-2 text-white">Showreel 2024</h3>
                <p className="text-gray-300 font-medium">Лучшие моменты за прошедший год</p>
              </div>
              <div className="hidden sm:block text-primary font-mono font-bold tracking-widest bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">
                01:45
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
