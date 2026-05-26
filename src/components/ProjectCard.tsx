import { motion } from 'motion/react';
import { Github, Images, Play } from 'lucide-react';
import type { FeaturedProject } from '../data/portfolio';

interface Props {
  project: FeaturedProject;
  index: number;
  onOpen: (project: FeaturedProject) => void;
  featured?: boolean;
  key?: string;
}

export const ProjectCard = ({ project, index, onOpen, featured }: Props) => {
  const hasLive = !!project.liveUrl;
  const hasRepo = !!project.repoUrl;
  const hasGallery = project.screenshots.length > 0;

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/40 bg-zinc-900/80 hover:border-emerald-700/60 transition-colors lg:flex-row"
      >
        {/* Hero Image */}
        <div
          className="relative aspect-[16/9] overflow-hidden bg-zinc-800 cursor-pointer lg:aspect-auto lg:w-3/5"
          onClick={() => hasGallery && onOpen(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent lg:bg-gradient-to-r" />

          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {project.badges?.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-950/70 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md ring-1 ring-emerald-800"
              >
                {badge}
              </span>
            ))}
          </div>

          {hasGallery && (
            <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20">
                <Images size={14} />
                {project.screenshots.length} Screens
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-1 text-base font-medium text-emerald-400">{project.tagline}</p>
          </div>

          <p className="mb-6 text-base leading-relaxed text-zinc-300 lg:text-lg">
            {project.description}
          </p>

          {/* Workflow preview */}
          {project.workflow && (
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">The Loop</p>
              <div className="space-y-1.5">
                {project.workflow.slice(0, 4).map((step, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-950/50 text-emerald-400 text-[10px] font-bold">
                      {i + 1}
                    </span>
                    <span className="line-clamp-1">{step}</span>
                  </div>
                ))}
                <p className="pl-6 text-xs text-zinc-500">+ {project.workflow.length - 4} more steps →</p>
              </div>
            </div>
          )}

          {/* Tech pills */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* 3-Button CTA */}
          <div className="mt-auto flex flex-wrap items-center gap-3">
            {hasGallery && (
              <button
                onClick={() => onOpen(project)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/50 px-4 py-2.5 text-sm font-semibold text-emerald-300 ring-1 ring-emerald-800 hover:bg-emerald-900/50 transition"
              >
                <Images size={16} />
                Features
              </button>
            )}
            {hasLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-white transition"
              >
                <Play size={16} />
                Live App
              </a>
            )}
            {hasRepo && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
              >
                <Github size={16} />
                Repo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    );
  }

  // Standard card
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 hover:border-zinc-600 hover:bg-zinc-900 transition-colors"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden bg-zinc-800 cursor-pointer"
        onClick={() => hasGallery && onOpen(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

        {hasGallery && (
          <div className="absolute bottom-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
              <Images size={14} />
              {project.screenshots.length}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-emerald-400">{project.tagline}</p>
        </div>

        <p className="mb-5 text-base leading-relaxed text-zinc-300">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 3-Button CTA */}
        <div className="mt-auto flex flex-wrap items-center gap-2">
          {hasGallery && (
            <button
              onClick={() => onOpen(project)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-950/50 px-3 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-800 hover:bg-emerald-900/50 transition"
            >
              <Images size={14} />
              Features
            </button>
          )}
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-950 hover:bg-white transition"
            >
              <Play size={14} />
              Live
            </a>
          )}
          {hasRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 hover:text-white transition"
            >
              <Github size={14} />
              Repo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
