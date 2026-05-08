import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { BRAND } from '../content';

export const Hero = () => {
  // 🥚 EASTER EGG STATE: Toggles the title text when clicked
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  
  // 🥚 EASTER EGG STATE: Spawns a running cat emoji when the profile picture is clicked
  const [cats, setCats] = useState<{ id: number; y: number }[]>([]);

  // 🪄 PARALLAX EFFECT: Moves the background image slightly slower than the scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  const spawnCat = () => {
    const newCat = { id: Date.now(), y: Math.random() * 80 + 10 }; // Random vertical position (10% to 90%)
    setCats((prev) => [...prev, newCat]);
    // Remove the cat after its animation finishes
    setTimeout(() => {
      setCats((prev) => prev.filter((cat) => cat.id !== newCat.id));
    }, 4000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      {/* 🖼️ PARALLAX BACKGROUND IMAGE */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 -z-20 h-[120%] w-full"
      >
        <img 
          src={BRAND.heroBackground} 
          alt="Atmospheric Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop';
          }}
        />
        {/* Gradient overlay to ensure text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950" />
      </motion.div>

      {/* 📺 VISUAL POLISH: Noise and Scanline Overlays */}
      <div className="absolute inset-0 -z-15 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 -z-15 pointer-events-none opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Subtle grid overlay for texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
      
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          {/* 🥚 EASTER EGG TRIGGER: Click the subtitle to toggle it */}
          <motion.span 
            onClick={() => setIsEasterEggActive(!isEasterEggActive)}
            whileHover={{ scale: 1.02, color: '#f4f4f5' }}
            whileTap={{ scale: 0.98 }}
            className="font-mono text-sm uppercase tracking-widest text-zinc-400 mb-6 inline-block cursor-pointer select-none transition-colors"
            aria-label="Toggle professional title"
          >
            {isEasterEggActive ? BRAND.easterEggTitle : BRAND.title}
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6 text-zinc-100">
            Building<br />
            <span className="text-zinc-500">scalable</span><br />
            architectures.
          </h1>

          <p className="max-w-lg text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 font-light">
            {BRAND.bio}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            {/* 🚀 DUAL CALL-TO-ACTION BUTTONS */}
            <motion.a
              href={BRAND.cta.primary.link}
              target={BRAND.cta.primary.link.startsWith('#') ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-bold flex items-center justify-center gap-2 group hover:bg-white transition-colors"
              aria-label={BRAND.cta.primary.label}
            >
              {BRAND.cta.primary.label}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform -rotate-90" />
            </motion.a>

            <motion.a
              href={BRAND.cta.secondary.link}
              target={BRAND.cta.secondary.link.startsWith('#') ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-zinc-100 border border-zinc-700 rounded-full font-medium flex items-center justify-center gap-2 group hover:bg-zinc-800 transition-colors"
              aria-label={BRAND.cta.secondary.label}
            >
              {BRAND.cta.secondary.label}
              <Mail className="w-4 h-4" />
            </motion.a>

            <div className="flex gap-4 mt-4 sm:mt-0">
              <SocialIcon href={BRAND.socials.github} icon={<Github />} label="GitHub Profile" />
              <SocialIcon href={BRAND.socials.twitter} icon={<Twitter />} label="Twitter Profile" />
              <SocialIcon href={BRAND.socials.linkedin} icon={<Linkedin />} label="LinkedIn Profile" />
              <SocialIcon href={BRAND.socials.carrd} icon={<Globe />} label="Link Hub (Carrd)" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* 🥚 EASTER EGG TRIGGER: Click the profile picture to spawn a running cat */}
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 2 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            onClick={spawnCat}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl cursor-pointer"
            aria-label="Profile picture (Click for a surprise)"
          >
            <img 
              src={BRAND.profilePicture} 
              alt="Gatrivi Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Gatrivi&background=27272a&color=f4f4f5&size=512';
              }}
            />
            <div className="absolute inset-0 bg-zinc-900/10 mix-blend-overlay hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </motion.div>
      </div>


      {/* 🐈 RUNNING CATS RENDERER */}
      {cats.map((cat) => (
        <motion.div
          key={cat.id}
          initial={{ x: '-10vw', opacity: 1 }}
          animate={{ x: '110vw', opacity: 1 }}
          transition={{ duration: 3, ease: 'linear' }}
          className="fixed z-50 text-4xl pointer-events-none"
          style={{ top: `${cat.y}%` }}
        >
          🐈
        </motion.div>
      ))}
    </section>
  );
};

const SocialIcon = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    className="p-3 rounded-full border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all"
    aria-label={label}
  >
    {React.cloneElement(icon as React.ReactElement, { size: 20 })}
  </motion.a>
);
