import type { Locale } from './i18n/locale';
import * as PortfolioEN from './data/portfolio';
import * as PortfolioES from './data/portfolio.es';
import * as AppStoreEN from './data/app-store';
import * as AppStoreES from './data/app-store.es';
import * as DigitalMenuES from './data/digital-menu';
import * as DigitalMenuEN from './data/digital-menu.en-GB';

export const VERSION = '2.0.1-i18n';

export function getMainNav(locale: Locale) {
  if (locale === 'es-ES') {
    return [
      { label: 'Portafolio', href: '/' },
      { label: 'Tienda de Apps', href: '/store' },
    ];
  }

  return [
    { label: 'Portfolio', href: '/' },
    { label: 'App Store', href: '/store' },
  ];
}

export function getPortfolioData(locale: Locale) {
  return locale === 'es-ES' ? PortfolioES : PortfolioEN;
}

export function getAppStoreContent(locale: Locale) {
  return locale === 'es-ES' ? AppStoreES.APP_STORE_CONTENT : AppStoreEN.APP_STORE_CONTENT;
}

export function getDigitalMenuContent(locale: Locale) {
  return locale === 'es-ES' ? DigitalMenuES.DIGITAL_MENU_CONTENT : DigitalMenuEN.DIGITAL_MENU_CONTENT;
}

// Back-compat exports for any files that haven't been switched yet.
export const MAIN_NAV = getMainNav('en-GB');
export const PORTFOLIO_CONTENT = PortfolioEN.PORTFOLIO_CONTENT;
export const APP_STORE_CONTENT = AppStoreEN.APP_STORE_CONTENT;
export const DIGITAL_MENU_CONTENT = DigitalMenuEN.DIGITAL_MENU_CONTENT;
export const BRAND = PortfolioEN.BRAND;
export const SKILLS = PortfolioEN.SKILLS;
export const EXPERIENCE = PortfolioEN.EXPERIENCE;
export const CONTACT = PortfolioEN.CONTACT;
export const FEATURED_PROJECTS = PortfolioEN.FEATURED_PROJECTS;
