import { motion } from "framer-motion";
import { Send, Mail, ArrowUpRight } from "lucide-react";

export function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute -top-10 -right-10 text-[15rem] font-display font-bold opacity-10 pointer-events-none whitespace-nowrap overflow-hidden">
        LET'S WORK
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-6 uppercase">
              Готовы <br />создавать крутое?
            </h2>
            <p className="text-xl opacity-80 font-medium mb-10 max-w-lg">
              Свяжитесь со мной, чтобы обсудить ваш проект, сроки и стоимость работы.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="https://t.me/placeholder" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between gap-6 bg-black text-white px-8 py-6 rounded-2xl hover:scale-105 transition-transform duration-300 group w-full sm:w-auto min-w-[240px]"
            >
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium mb-1">Написать в</span>
                <span className="font-bold text-2xl">Telegram</span>
              </div>
              <Send className="w-8 h-8 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <a 
              href="mailto:hello@placeholder.com" 
              className="flex items-center justify-between gap-6 bg-transparent border-2 border-black text-black px-8 py-6 rounded-2xl hover:bg-black hover:text-white transition-all duration-300 group w-full sm:w-auto min-w-[240px]"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium mb-1 opacity-80">Отправить на</span>
                <span className="font-bold text-2xl">Почту</span>
              </div>
              <Mail className="w-8 h-8 group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-medium opacity-80">© 2024 EditPro. Все права защищены.</p>
          <button 
            onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 font-bold hover:opacity-70 transition-opacity"
          >
            Наверх <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
