import { motion } from 'motion/react';
import { Code2, Layers, Server, Database, Wrench, BrainCircuit } from 'lucide-react';
import { SKILLS, SECTIONS } from '../content';

import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  Languages: <Code2 size={20} />,
  Frontend: <Layers size={20} />,
  Backend: <Server size={20} />,
  "Data & Cache": <Database size={20} />,
  "DevOps & Tools": <Wrench size={20} />,
  "AI & Integrations": <BrainCircuit size={20} />,
};

const levelColor: Record<string, string> = {
  Advanced: 'bg-zinc-100 text-zinc-950',
  Intermediate: 'bg-zinc-800 text-zinc-200',
  Familiar: 'bg-zinc-900 text-zinc-400 border border-zinc-800',
};

export const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">{SECTIONS.skills.title}</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {SECTIONS.skills.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-zinc-400">{iconMap[group.category]}</span>
                <h3 className="text-lg font-bold tracking-tight text-zinc-100">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium ${levelColor[skill.level] || levelColor.Familiar}`}
                    title={`Proficiency: ${skill.level}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-6 items-center justify-center md:justify-start text-zinc-500 text-sm font-mono"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-100" />
            Advanced
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-800 border border-zinc-700" />
            Intermediate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-zinc-900 border border-zinc-800" />
            Familiar
          </span>
        </motion.div>
      </div>
    </section>
  );
};
