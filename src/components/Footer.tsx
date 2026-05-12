import { BRAND, NAV, VERSION } from '../content';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-20 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-tighter text-zinc-100 flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-zinc-100 text-zinc-950 flex items-center justify-center rounded-lg font-black text-sm">
                G
              </span>
              {BRAND.name}
            </a>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              {BRAND.title}. Building scalable, architecture-first applications with precision and intent.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-zinc-100 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {NAV.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-sm uppercase tracking-widest text-zinc-100 mb-6">Social</h4>
            <ul className="space-y-4">
              {Object.entries(BRAND.socials).map(([key, value]) => (
                <li key={key}>
                  <a 
                    href={value} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-500 hover:text-zinc-100 transition-colors text-sm capitalize"
                  >
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-zinc-600 text-xs font-mono">
              © {new Date().getFullYear()} {BRAND.name.toUpperCase()} — ALL RIGHTS RESERVED.
            </p>
            <span className="text-zinc-700 text-[10px] font-mono px-2 py-0.5 border border-zinc-800 rounded-full">
              v{VERSION}
            </span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors text-xs font-mono uppercase tracking-widest"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
