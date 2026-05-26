import { useLocation } from 'react-router-dom';
import { DIGITAL_MENU_CONTENT } from '../data/digital-menu';
import { PORTFOLIO_CONTENT } from '../data/portfolio';
import { VERSION } from '../content';

export const Footer = () => {
  const { pathname } = useLocation();
  const isRestaurant = pathname.includes('/store/digital-menu');

  const brand = isRestaurant ? DIGITAL_MENU_CONTENT.BRAND : PORTFOLIO_CONTENT.BRAND;
  const tagline = isRestaurant
    ? 'Carta digital para restaurantes y locales de barrio. Sin comisiones.'
    : 'Building pragmatic tools with React, TypeScript & AI.';

  return (
    <footer className="py-12 px-6 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-black tracking-tighter text-zinc-100">
            {brand.name}
          </span>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
            {VERSION}
          </span>
        </div>

        <p className="text-zinc-500 text-sm font-light text-center md:text-right">
          © {new Date().getFullYear()} {brand.name}. {isRestaurant ? 'TODOS LOS DERECHOS RESERVADOS' : 'All rights reserved.'}
          <br />
          <span className="text-zinc-700">{tagline}</span>
        </p>
      </div>
    </footer>
  );
};
