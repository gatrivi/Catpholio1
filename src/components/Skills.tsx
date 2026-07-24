import { motion } from 'motion/react';
import { getPortfolioData } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const Skills = () => {
  const { locale } = useLocale();
  const portfolio = getPortfolioData(locale);
  const ui = getUiText(locale);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
          {ui.skills.toolkitLabel}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
          {ui.skills.skillsTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {portfolio.SKILLS.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
