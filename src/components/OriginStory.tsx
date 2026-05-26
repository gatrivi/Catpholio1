import { motion } from 'motion/react';
import { Timer, TrendingUp, AlertCircle } from 'lucide-react';

export const OriginStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
          Origin
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
          Why I Built This
        </h2>
        <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
          I already knew how to code. I needed to know I could be responsible for production.
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
          <h3 className="mb-3 text-lg font-semibold text-white">The Problem</h3>
          <p className="text-zinc-400 leading-relaxed">
            As a freelance interpreter, I had no way to track billable hours, off-call gaps, or daily productivity. I was flying blind — guessing at my own output.
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
          <h3 className="mb-3 text-lg font-semibold text-white">The Fix</h3>
          <p className="text-zinc-400 leading-relaxed">
            I built an automatic session tracker: the app detects call start/end, starts an off-call timer instantly, and renders a live progress bar — orange for idle, blue for active.
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
          <h3 className="mb-3 text-lg font-semibold text-white">The Proof</h3>
          <p className="text-zinc-400 leading-relaxed">
            For the first time, I can see at a glance how productive my day has been. The same tool I use to work is the tool that tells me how well I'm working — and it hasn't broken once.
          </p>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <blockquote className="mx-auto max-w-2xl text-xl font-medium italic text-zinc-300">
          &ldquo;I didn&apos;t need to learn to code. I needed to prove I could ship something that <span className="text-emerald-400">stays up</span>.&rdquo;
        </blockquote>
      </div>
    </section>
  );
};
