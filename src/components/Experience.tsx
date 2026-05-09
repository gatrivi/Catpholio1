import { motion } from 'motion/react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE, BRAND, SECTIONS } from '../content';

export const Experience = () => {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">{SECTIONS.experience.title}</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {SECTIONS.experience.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-500 border-4 border-zinc-900 hidden md:block" />

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-zinc-50 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-zinc-400 font-medium mt-1 flex items-center gap-2">
                        {job.company}
                        {job.company === "Self-Employed / Upwork" && (
                          <a
                            href={BRAND.socials.upwork}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-zinc-100 transition-colors inline-flex items-center"
                            aria-label="View Upwork profile"
                          >
                            <ArrowUpRight size={16} />
                          </a>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-zinc-500 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-zinc-400 leading-relaxed mb-5">
                    {job.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-md text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
