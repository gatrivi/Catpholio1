import { motion } from 'motion/react';
import { Timer, TrendingUp, AlertCircle } from 'lucide-react';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const OriginStory = () => {
  const { locale } = useLocale();
  const ui = getUiText(locale);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
          {ui.originStory.originLabel}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
          {ui.originStory.whyTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          {ui.originStory.whySubtitle}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-950/50 text-orange-400">
            <AlertCircle size={24} />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">{ui.originStory.problemTitle}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {ui.originStory.problemBody}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/50 text-blue-400">
            <Timer size={24} />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">{ui.originStory.fixTitle}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {ui.originStory.fixBody}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-950/50 text-emerald-400">
            <TrendingUp size={24} />
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">{ui.originStory.proofTitle}</h3>
          <p className="text-zinc-400 leading-relaxed">
            {ui.originStory.proofBody}
          </p>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <blockquote className="mx-auto max-w-2xl text-xl font-medium italic text-zinc-300">
          {ui.originStory.quote}
        </blockquote>
      </div>
    </section>
  );
};
