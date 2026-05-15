import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MAIN_NAV, PORTFOLIO_CONTENT, DIGITAL_MENU_CONTENT } from '../content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDigitalMenu = location.pathname === '/store/digital-menu';
  const navLinks = isDigitalMenu ? DIGITAL_MENU_CONTENT.NAV : MAIN_NAV;
  const brandName = isDigitalMenu ? DIGITAL_MENU_CONTENT.BRAND.name : PORTFOLIO_CONTENT.BRAND.name;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 flex items-center gap-2">
            <span className="w-8 h-8 bg-zinc-100 text-zinc-950 flex items-center justify-center rounded-lg font-black text-sm">
              G
            </span>
            {brandName}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {isDigitalMenu && (
              <a
                href={DIGITAL_MENU_CONTENT.BRAND.cta.primary.link}
                className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-white transition-colors"
              >
                {DIGITAL_MENU_CONTENT.BRAND.cta.primary.label}
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-zinc-950 p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-bold tracking-tighter text-zinc-100">
                {brandName}
              </span>
              <button
                className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-3xl font-bold text-zinc-100 hover:text-zinc-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-3xl font-bold text-zinc-100 hover:text-zinc-400 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {isDigitalMenu && (
              <div className="mt-auto pt-12 border-t border-zinc-800">
                <a
                  href={DIGITAL_MENU_CONTENT.BRAND.cta.primary.link}
                  className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  {DIGITAL_MENU_CONTENT.BRAND.cta.primary.label}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
