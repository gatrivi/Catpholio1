import { useLocale } from '../i18n/LocaleProvider';
import { LOCALE_OPTIONS, type Locale } from '../i18n/locale';

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2">
      {LOCALE_OPTIONS.map((opt) => {
        const active = opt.value === locale;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setLocale(opt.value as Locale)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
              active
                ? 'border-zinc-200/70 bg-zinc-200/10 text-zinc-100'
                : 'border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200'
            }`}
            aria-pressed={active}
            title={opt.label}
          >
            <span className="text-base">{opt.flag}</span>
            <span className="hidden sm:inline">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

