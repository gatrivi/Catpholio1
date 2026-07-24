import { useLocation } from 'react-router-dom';
import { getDigitalMenuContent, getPortfolioData } from '../content';
import { VERSION } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const Footer = () => {
  const { pathname } = useLocation();
  const isRestaurant = pathname.includes('/store/digital-menu');

  const { locale } = useLocale();
  const portfolio = getPortfolioData(locale);
  const digitalMenu = getDigitalMenuContent(locale);
  const ui = getUiText(locale);

  const brand = isRestaurant ? digitalMenu.BRAND : portfolio.BRAND;
  const rights = isRestaurant ? digitalMenu.UI.footer.rights : ui.footer.allRightsReserved;
  const tagline = isRestaurant ? digitalMenu.UI.footer.tagline : ui.footer.portfolioTagline;

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
          © {new Date().getFullYear()} {brand.name}. {rights}
          <br />
          <span className="text-zinc-700">{tagline}</span>
        </p>
      </div>
    </footer>
  );
};
