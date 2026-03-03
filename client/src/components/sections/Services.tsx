import { motion } from "framer-motion";

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 tracking-[0.4rem] text-white">
            SERVICES
          </h2>
          <p className="text-white/40 text-[10px] tracking-[0.2rem] uppercase font-light">
            Engineering visual narratives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "Editing", desc: "Precision cutting and structural flow." },
            { title: "Color", desc: "Cinematic grading and visual atmosphere." },
            { title: "Sound", desc: "Immersive auditory landscapes." }
          ].map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <h3 className="text-white text-xs tracking-[0.3rem] uppercase mb-4 group-hover:text-white/60 transition-colors">{service.title}</h3>
              <p className="text-white/30 text-[10px] tracking-[0.1rem] leading-relaxed uppercase">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
