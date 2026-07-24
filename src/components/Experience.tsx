import { motion } from 'motion/react';
import { getPortfolioData } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const Experience = () => {
  const { locale } = useLocale();
  const portfolio = getPortfolioData(locale);
  const ui = getUiText(locale);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
          {ui.experience.backgroundLabel}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
          {ui.experience.experienceTitle}
        </h2>
      </div>

      <div className="max-w-3xl space-y-16 border-l border-zinc-800 pl-8">
        {portfolio.EXPERIENCE.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-zinc-100 ring-4 ring-zinc-950" />
            <h3 className="text-xl font-bold text-zinc-100">{job.role}</h3>
            <p className="text-sm text-zinc-500 mt-1">
              {job.company} · {job.period}
            </p>
            <p className="mt-4 text-zinc-400 font-light leading-relaxed">
              {job.description}
            </p>
            {job.bullets && job.bullets.length > 0 && (
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
