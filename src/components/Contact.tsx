import { motion } from 'motion/react';
import { MessageSquare, Mail, Instagram, ArrowRight } from 'lucide-react';
import { DIGITAL_MENU_CONTENT } from '../content';

export const Contact = () => {
  const { BRAND, CONTACT, UI } = DIGITAL_MENU_CONTENT;

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest block mb-4">
            {CONTACT.headline}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-100 mb-8">
            Tu carta lista <br />
            <span className="text-zinc-500">mañana mismo.</span>
          </h2>
          <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
            {CONTACT.subheadline}
          </p>

          <div className="space-y-6">
            <a 
              href={`mailto:${BRAND.socials.email}`}
              className="flex items-center gap-4 text-zinc-400 hover:text-zinc-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-lg font-light">{BRAND.socials.email}</span>
            </a>
            <a 
              href={BRAND.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-zinc-400 hover:text-zinc-100 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                <Instagram size={20} />
              </div>
              <span className="text-lg font-light">@gatrivi</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-[3rem] text-center"
        >
          <div className="w-20 h-20 bg-zinc-100 text-zinc-950 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-3xl font-bold text-zinc-100 mb-4">¿Dudas? Escribinos.</h3>
          <p className="text-zinc-400 font-light mb-10">
            {UI.contact.whatsappSubtext}
          </p>
          
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 bg-zinc-100 text-zinc-950 rounded-2xl font-bold flex items-center justify-center gap-3 group hover:bg-white transition-all text-xl"
          >
            {UI.contact.whatsappButton}
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
