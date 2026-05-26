import { useState } from 'react';
import { motion } from 'motion/react';
import { FEATURED_PROJECTS, BRAND } from '../data/portfolio';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectGallery } from '../components/ProjectGallery';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { OriginStory } from '../components/OriginStory';
import { Github, Linkedin, Mail } from 'lucide-react';
import type { FeaturedProject } from '../data/portfolio';

export const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  const heroProject = FEATURED_PROJECTS[0];
  const rowOne = FEATURED_PROJECTS.slice(1, 3);
  const rowTwo = FEATURED_PROJECTS.slice(3, 5);

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
            {BRAND.title}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-100">{BRAND.name}</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-8 font-light leading-relaxed">
            {BRAND.bio}
          </p>
          <div className="flex gap-4">
            {BRAND.socials.github && (
              <a
                href={BRAND.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {BRAND.socials.linkedin && (
              <a
                href={BRAND.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {BRAND.socials.email && (
              <a
                href={`mailto:${BRAND.socials.email}`}
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
            Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-100">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Production-grade tools shipped to real users. Live demos available.
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
