import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, SECTIONS } from '../content';

export const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">{SECTIONS.projects.title}</h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            {SECTIONS.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative border-b border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-100">{project.title}</h3>
                  <div className="flex items-center gap-1 -mr-2 -mt-2">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-zinc-100 transition-colors p-2 rounded-full hover:bg-zinc-800"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-100 transition-colors p-2 rounded-full hover:bg-zinc-800"
                      aria-label={`View ${project.title} project`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-zinc-400 mb-5 font-light leading-relaxed">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                        <span className="w-1 h-1 rounded-full bg-zinc-500 mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
