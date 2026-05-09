import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS, SECTIONS } from '../content';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">{SECTIONS.testimonials.title}</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {SECTIONS.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col relative group hover:border-zinc-700 transition-colors"
            >
              <div className="absolute top-8 right-8 text-zinc-800 group-hover:text-zinc-700 transition-colors">
                <Quote size={40} />
              </div>
              
              <p className="text-zinc-300 leading-relaxed mb-8 relative z-10 italic">
                "{t.quote}"
              </p>

              <div className="mt-auto flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.author}
                  className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900"
                />
                <div>
                  <p className="font-bold text-zinc-100">{t.author}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
