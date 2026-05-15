import { DIGITAL_MENU_CONTENT, VERSION } from '../content';

export const Footer = () => {
  const { BRAND, UI } = DIGITAL_MENU_CONTENT;

  return (
    <footer className="py-12 px-6 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black tracking-tighter text-zinc-100">
            {BRAND.name}
          </span>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
            {VERSION}
          </span>
        </div>

        <p className="text-zinc-500 text-sm font-light text-center md:text-right">
          © {new Date().getFullYear()} {BRAND.name}. {UI.footer.rights}.
          <br />
          <span className="text-zinc-700">{UI.footer.tagline}</span>
        </p>
      </div>
    </footer>
  );
};
