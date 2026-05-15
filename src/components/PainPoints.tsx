import { motion } from 'motion/react';
import { DIGITAL_MENU_CONTENT } from '../content';

export const PainPoints = () => {
  const { SECTIONS, PAIN_POINTS } = DIGITAL_MENU_CONTENT;

  return (
    <section id="pain-points" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest block mb-4">
          {SECTIONS.painPoints.subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
          {SECTIONS.painPoints.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {PAIN_POINTS.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl hover:border-zinc-700/50 transition-colors group"
          >
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {point.emoji}
            </div>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              {point.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
