import { motion } from "framer-motion";
import { Scissors, MonitorPlay, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Монтаж",
      description: "Динамичный, ритмичный и осмысленный монтаж. Отбор лучших дублей и создание цельной истории."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Цветокоррекция",
      description: "Создание атмосферы через цвет. Работа с логарифмами, матчинг камер и стилизация под кино."
    },
    {
      icon: <MonitorPlay className="w-8 h-8" />,
      title: "VFX & Motion",
      description: "Интеграция графики, трекинг, клинап и создание стильных анимационных плашек."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">Чем я <span className="text-primary">полезен</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Полный цикл постпродакшена для вашего проекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors duration-300 group hover:box-glow-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
