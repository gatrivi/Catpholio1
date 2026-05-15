/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Portfolio } from './pages/Portfolio';
import { AppStore } from './pages/AppStore';
import { DigitalMenu } from './pages/DigitalMenu';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/store" element={<AppStore />} />
        <Route path="/store/digital-menu" element={<DigitalMenu />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-zinc-800 selection:text-zinc-100 scroll-smooth"
      >
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </motion.main>
    </Router>
  );
}
