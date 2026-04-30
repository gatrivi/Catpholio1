import { BRAND } from '../content';

export const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <p className="font-bold text-xl tracking-tighter text-zinc-100">{BRAND.name}</p>
          <p className="text-zinc-500 text-sm mt-1">© {new Date().getFullYear()} — Built with precision.</p>
        </div>

        <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-zinc-500">
          <a href={BRAND.socials.github} className="hover:text-zinc-100 transition-colors">GitHub</a>
          <a href={BRAND.socials.twitter} className="hover:text-zinc-100 transition-colors">X</a>
          <a href={BRAND.socials.linkedin} className="hover:text-zinc-100 transition-colors">LinkedIn</a>
          <a href={BRAND.socials.carrd} className="hover:text-zinc-100 transition-colors">Carrd</a>
        </div>
      </div>
    </footer>
  );
};
