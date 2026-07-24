export type Locale = 'en-GB' | 'es-ES';

export const LOCALE_OPTIONS: Array<{
  value: Locale;
  flag: string;
  label: string;
}> = [
  { value: 'en-GB', flag: '🇬🇧', label: 'English (UK)' },
  { value: 'es-ES', flag: '🇪🇸', label: 'Español' },
];

const STORAGE_KEY = 'catpholio_locale';

export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en-GB';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en-GB' || stored === 'es-ES') return stored;

  const nav = (navigator.languages?.[0] ?? navigator.language ?? '').toLowerCase();
  if (nav.startsWith('es')) return 'es-ES';
  return 'en-GB';
}

export function loadStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en-GB' || stored === 'es-ES' ? stored : null;
}

export function storeLocale(locale: Locale) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, locale);
}

