import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BadgeCheck, Check, ChevronLeft, ChevronRight, Code2, ExternalLink, Github, X } from 'lucide-react';
import type { FeaturedProject } from '../data/portfolio';

interface Props {
  project: FeaturedProject | null;
  onClose: () => void;
}

export const ProjectGallery = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowDetails(Boolean(project?.proof));
    if (project) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  const goNext = useCallback(() => {
    if (!project) return;
    setIndex((i) => (i + 1) % project.screenshots.length);
  }, [project]);

  const goPrev = useCallback(() => {
    if (!project) return;
    setIndex((i) => (i - 1 + project.screenshots.length) % project.screenshots.length);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose, goNext, goPrev]);

  if (!project) return null;

  const current = project.screenshots[index];
  const hasFeatures = (project.features?.length ?? 0) > 0;
  const hasProof = Boolean(project.proof);
  const hasWorkflow = (project.workflow?.length ?? 0) > 0;
  const hasDetails = hasProof || hasFeatures || hasWorkflow;

  const detailsLabel = hasProof ? 'Builder Proof' : 'Features';

  const renderDetailsPanel = () => (
    <div className="space-y-6">
      {project.proof && (
        <section className="rounded-2xl border border-emerald-900/50 bg-emerald-950/10 p-4 ring-1 ring-emerald-500/10">
          <div className="mb-4 flex items-start gap-3">
            <span className="rounded-xl bg-emerald-500/10 p-2 text-emerald-300 ring-1 ring-emerald-500/20">
              <BadgeCheck size={18} />
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                {project.proof.heading}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-100">{project.proof.role}</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">{project.proof.status}</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">{project.proof.summary}</p>

          <div className="mt-4 grid gap-3">
            {project.proof.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm font-bold text-zinc-100">{metric.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.proof && (
        <section>
          <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Code2 size={14} />
            What makes the work verifiable
          </h3>
          <div className="space-y-3">
            {project.proof.evidence.map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                <p className="text-sm font-semibold text-zinc-100">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.proof && (
        <section>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Implementation decisions
          </h3>
          <div className="space-y-3">
            {project.proof.decisions.map((item, i) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-950/60 text-xs font-bold text-emerald-300 ring-1 ring-emerald-800/70">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{item.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {hasWorkflow && (
        <section>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Live workflow receipts
          </h3>
          <div className="space-y-2.5">
            {project.workflow?.map((step, i) => (
              <div key={step} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-zinc-300">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {hasFeatures && (
        <section>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            {project.features?.length} interpreter-first features
          </h3>
          <div className="space-y-2.5">
            {project.features?.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check size={14} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                <p className="text-sm leading-relaxed text-zinc-400">{feature}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(project.repoUrl || project.liveUrl) && (
        <section className="rounded-2xl border border-zinc-800 bg-zinc-950/50 p-4">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Verify the project
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-700 hover:text-white"
              >
                <Github size={14} />
                Source Code
                <ExternalLink size={12} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-white"
              >
                Live App
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </section>
      )}
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/95 backdrop-blur-sm p-3 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative flex max-h-[95vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 sm:px-6 sm:py-4">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="truncate text-lg font-bold text-white">{project.title}</h2>
                {hasProof && (
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300 ring-1 ring-emerald-500/20">
                    Flagship case study
                  </span>
                )}
              </div>
              <p className="truncate text-xs text-zinc-400">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              {hasDetails && (
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className={`hidden sm:inline-flex rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    showDetails
                      ? 'bg-emerald-950 text-emerald-400 ring-1 ring-emerald-800'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {showDetails ? `Hide ${detailsLabel}` : `Show ${detailsLabel}`}
                </button>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
                  title="View Code"
                >
                  <Github size={18} />
                </a>
              )}
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white transition"
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Image Stage */}
            <div className="relative flex flex-1 flex-col bg-zinc-950">
              <div className="relative flex flex-1 items-center justify-center overflow-hidden min-h-[200px] sm:min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.caption}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="max-h-[45vh] w-auto max-w-full object-contain sm:max-h-[50vh]"
                  />
                </AnimatePresence>

                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800/90 p-2 text-white backdrop-blur hover:bg-zinc-700 transition sm:left-4 sm:p-3"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-zinc-800/90 p-2 text-white backdrop-blur hover:bg-zinc-700 transition sm:right-4 sm:p-3"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute top-3 right-3 rounded-full bg-zinc-800/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {index + 1} / {project.screenshots.length}
                </div>
              </div>

              {/* Caption */}
              <div className="border-t border-zinc-800 px-4 py-3 text-center sm:px-6">
                <p className="text-sm font-medium text-zinc-200">{current.caption}</p>
              </div>

              {/* Thumbnail strip */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto border-t border-zinc-800 bg-zinc-900 px-4 py-3 sm:px-6">
                  {project.screenshots.map((shot, i) => (
                    <button
                      key={shot.src}
                      onClick={() => setIndex(i)}
                      className={`relative flex-shrink-0 overflow-hidden rounded-lg border-2 transition ${
                        i === index ? 'border-emerald-500' : 'border-transparent hover:border-zinc-600'
                      }`}
                    >
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="h-12 w-16 object-cover sm:h-14 sm:w-20"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

              {/* Proof/details sidebar (collapsible, desktop only) */}
            <AnimatePresence>
              {showDetails && hasDetails && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 380, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="hidden lg:flex flex-col border-l border-zinc-800 bg-zinc-900/50 overflow-hidden"
                >
                  <div className="flex-1 overflow-y-auto p-5">{renderDetailsPanel()}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile details toggle */}
          {hasDetails && (
            <div className="border-t border-zinc-800 bg-zinc-900 px-4 py-3 sm:hidden">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex w-full items-center justify-between rounded-lg bg-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-200"
              >
                <span>{detailsLabel}</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform ${showDetails ? 'rotate-90' : ''}`}
                />
              </button>
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 max-h-[42vh] overflow-y-auto pb-2">{renderDetailsPanel()}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
