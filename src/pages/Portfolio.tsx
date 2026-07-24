import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectGallery } from '../components/ProjectGallery';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { OriginStory } from '../components/OriginStory';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { FeaturedProject } from '../data/portfolio';
import { getPortfolioData } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  const { locale } = useLocale();
  const portfolio = getPortfolioData(locale);
  const ui = getUiText(locale);

  const heroProject = portfolio.FEATURED_PROJECTS[0];
  const rowOne = portfolio.FEATURED_PROJECTS.slice(1, 3);
  const rowTwo = portfolio.FEATURED_PROJECTS.slice(3, 5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh] py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-400 mb-4 block">
            {portfolio.BRAND.title}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-100">{portfolio.BRAND.name}</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-8 font-light leading-relaxed">
            {portfolio.BRAND.bio}
          </p>
          <div className="flex gap-4">
            {portfolio.BRAND.socials.github && (
              <a
                href={portfolio.BRAND.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {portfolio.BRAND.socials.linkedin && (
              <a
                href={portfolio.BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {portfolio.BRAND.socials.email && (
              <a
                href={`mailto:${portfolio.BRAND.socials.email}`}
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <img
            src="/devtrivi-profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop';
            }}
          />
        </div>
      </section>

      <OriginStory />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-500 block mb-4">
            {ui.portfolio.workLabel}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
            {ui.portfolio.featuredProjectsLabel}
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            {ui.portfolio.featuredProjectsSubtitle}
          </p>
        </div>

        {/* Hero Project */}
        <div className="mb-8">
          <ProjectCard
            project={heroProject}
            index={0}
            onOpen={setActiveProject}
            featured
          />
        </div>

        {/* Row 1 */}
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          {rowOne.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 1}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid gap-8 md:grid-cols-2">
          {rowTwo.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i + 3}
              onOpen={setActiveProject}
            />
          ))}
        </div>
      </section>

      <Skills />
      <Experience />
      <Contact />

      <ProjectGallery
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </motion.div>
  );
};
