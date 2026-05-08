/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-100 scroll-smooth"
      >
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}
