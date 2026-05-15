import { motion } from 'motion/react';
import { Send, Clock, QrCode, Edit3 } from 'lucide-react';
import { DIGITAL_MENU_CONTENT } from '../content';

const icons = {
  send: Send,
  clock: Clock,
  qr: QrCode,
  edit: Edit3,
};

export const HowItWorks = () => {
  const { SECTIONS, HOW_IT_WORKS } = DIGITAL_MENU_CONTENT;

  return (
    <section id="como-funciona" className="py-24 px-6 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest block mb-4">
          {SECTIONS.howItWorks.subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 mb-6">
          {SECTIONS.howItWorks.title}
        </h2>
        <p className="text-xl text-zinc-400 font-light max-w-2xl">
          {SECTIONS.howItWorks.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {HOW_IT_WORKS.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-black text-zinc-800 absolute -top-10 -left-4 -z-10 opacity-50">
                {item.step}
              </div>
              <div className="w-12 h-12 bg-zinc-100 text-zinc-950 rounded-xl flex items-center justify-center mb-6">
                <Icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">{item.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
