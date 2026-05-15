import { motion } from 'motion/react';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { DIGITAL_MENU_CONTENT } from '../content';

export const Pricing = () => {
  const { SECTIONS, PRICING, UI, BRAND } = DIGITAL_MENU_CONTENT;

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-100/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest block mb-4">
          {SECTIONS.pricing.subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 mb-6">
          {SECTIONS.pricing.title}
        </h2>
        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
          {SECTIONS.pricing.description}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900 border-2 border-zinc-100 rounded-[2.5rem] p-12 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 right-0 px-6 py-2 bg-zinc-100 text-zinc-950 text-xs font-black uppercase tracking-widest rounded-bl-2xl flex items-center gap-2">
            <Zap size={12} fill="currentColor" />
            {UI.pricing.mostPopular}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-zinc-100 mb-4">{PRICING.plan.name}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-mono text-zinc-500">{UI.pricing.currency}</span>
              <span className="text-6xl font-black text-zinc-100 tracking-tighter">${PRICING.plan.price}</span>
              <span className="text-xl text-zinc-500 font-light">{PRICING.plan.period}</span>
            </div>
            <p className="mt-4 text-zinc-400 font-light italic text-sm">
              {PRICING.plan.annualNote}
            </p>
          </div>

          <p className="text-zinc-400 mb-10 font-light">
            {PRICING.plan.description}
          </p>

          <div className="space-y-4 mb-12">
            {PRICING.plan.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-zinc-300">
                <div className="w-5 h-5 bg-zinc-100/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-zinc-100" />
                </div>
                <span className="font-light">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-zinc-100 text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-2 group hover:bg-white transition-all text-lg"
          >
            {PRICING.plan.cta}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {PRICING.plan.promo && (
          <div className="mt-8 p-6 bg-zinc-100/5 border border-zinc-100/10 rounded-2xl text-center text-zinc-400 text-sm font-light">
            {PRICING.plan.promo}
          </div>
        )}
      </div>
    </section>
  );
};
