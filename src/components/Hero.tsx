import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { DIGITAL_MENU_CONTENT } from '../content';

export const Hero = () => {
  const { BRAND } = DIGITAL_MENU_CONTENT;
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-20 h-[120%] w-full"
      >
        <img 
          src={BRAND.heroBackground} 
          alt="Restaurante" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />
      </motion.div>

      <div className="absolute inset-0 -z-15 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-400 mb-6 inline-block">
            {BRAND.title}
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-zinc-100">
            {BRAND.heroHeadline.map((line, i) => (
              <span key={i}>
                {line.highlight ? (
                  <span className="text-zinc-500">{line.text}</span>
                ) : (
                  line.text
                )}
                {i < BRAND.heroHeadline.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p className="max-w-lg text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 font-light">
            {BRAND.bio}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <motion.a
              href={BRAND.cta.primary.link}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-bold flex items-center justify-center gap-2 group hover:bg-white transition-colors"
            >
              {BRAND.cta.primary.label}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform -rotate-90" />
            </motion.a>

            <motion.a
              href={BRAND.cta.secondary.link}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-zinc-100 border border-zinc-700 rounded-full font-medium flex items-center justify-center gap-2 group hover:bg-zinc-800 transition-colors"
            >
              {BRAND.cta.secondary.label}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-auto md:w-96 lg:w-[28rem] rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl bg-zinc-900">
            <img 
              src="/tmm-store0.png" 
              alt="Carta digital de restaurante con fotos de platos" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
