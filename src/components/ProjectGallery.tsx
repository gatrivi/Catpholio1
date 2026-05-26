import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Github, Check } from 'lucide-react';
import type { FeaturedProject } from '../data/portfolio';

interface Props {
  project: FeaturedProject | null;
  onClose: () => void;
}

export const ProjectGallery = ({ project, onClose }: Props) => {
  const [index, setIndex] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowFeatures(false);
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
          className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 sm:px-6 sm:py-4">
            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-white">{project.title}</h2>
              <p className="truncate text-xs text-zinc-400">{project.tagline}</p>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              {hasFeatures && (
                <button
                  onClick={() => setShowFeatures(!showFeatures)}
                  className={`hidden sm:inline-flex rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    showFeatures
                      ? 'bg-emerald-950 text-emerald-400 ring-1 ring-emerald-800'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {showFeatures ? 'Hide Features' : `View ${project.features?.length} Features`}
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

            {/* Feature Sidebar (collapsible, desktop only) */}
            <AnimatePresence>
              {showFeatures && hasFeatures && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 320, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="hidden lg:flex flex-col border-l border-zinc-800 bg-zinc-900/50 overflow-hidden"
                >
                  <div className="flex-1 overflow-y-auto p-5">
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {project.features?.length} Interpreter-First Features
                    </h3>
                    <div className="space-y-3">
                      {project.features?.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-950/50 text-emerald-400 text-xs font-bold">
                            {i + 1}
                          </span>
                          <p className="text-sm text-zinc-300 leading-relaxed">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Features Toggle */}
          {hasFeatures && (
            <div className="border-t border-zinc-800 bg-zinc-900 px-4 py-3 sm:hidden">
              <button
                onClick={() => setShowFeatures(!showFeatures)}
                className="flex w-full items-center justify-between rounded-lg bg-zinc-800 px-4 py-3 text-sm font-semibold text-zinc-200"
              >
                <span>{project.features?.length} Features</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform ${showFeatures ? 'rotate-90' : ''}`}
                />
              </button>
              <AnimatePresence>
                {showFeatures && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 space-y-2.5 pb-2">
                      {project.features?.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check size={14} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                          <p className="text-sm text-zinc-400">{f}</p>
                        </div>
                      ))}
                    </div>
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
