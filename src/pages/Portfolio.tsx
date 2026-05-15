import { motion } from 'motion/react';
import { PORTFOLIO_CONTENT } from '../content';
import { ExternalLink, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export const Portfolio = () => {
  const { BRAND, PROJECTS, GALLERY } = PORTFOLIO_CONTENT;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-24 py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
        <div>
          <span className="font-mono text-sm uppercase tracking-widest text-zinc-400 mb-4 block">
            {BRAND.title}
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            {BRAND.heroHeadline.map((line, i) => (
              <span key={i} className={line.highlight ? "text-zinc-500" : ""}>
                {line.text}{" "}
              </span>
            ))}
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mb-8 font-light leading-relaxed">
            {BRAND.bio}
          </p>
          <div className="flex gap-4">
            <a href={BRAND.socials.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Github size={20} />
            </a>
            <a href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Instagram size={20} />
            </a>
            <a href={BRAND.socials.email} className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <img 
            src={BRAND.heroBackground} 
            alt="Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop';
            }}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-4xl font-bold tracking-tighter mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800/50"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a href={project.link} className="text-zinc-400 hover:text-zinc-100">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-zinc-400 mb-6 font-light">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className="text-4xl font-bold tracking-tighter mb-12">Snapshots</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((item, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl aspect-square ${item.span}`}>
              <img 
                src={item.src} 
                alt="Gallery item" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${i}/800/800`;
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
