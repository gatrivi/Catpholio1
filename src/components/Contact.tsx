import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';
import { getPortfolioData } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const Contact = () => {
  const { locale } = useLocale();
  const portfolio = getPortfolioData(locale);
  const ui = getUiText(locale);

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
          {ui.contact.contactLabel}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100 mb-6">
          {portfolio.CONTACT.headline}
        </h2>
        <p className="text-zinc-400 mb-10">
          {portfolio.CONTACT.subline}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${portfolio.CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white transition"
          >
            <Mail size={18} />
            {portfolio.CONTACT.email}
          </a>
          {portfolio.BRAND.socials.github && (
            <a
              href={portfolio.BRAND.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
            >
              <Github size={18} />
              GitHub
            </a>
          )}
          {portfolio.BRAND.socials.linkedin && (
            <a
              href={portfolio.BRAND.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          )}
          {portfolio.BRAND.socials.carrd && (
            <a
              href={portfolio.BRAND.socials.carrd}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-6 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
            >
              <Globe size={18} />
              Carrd
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
};
