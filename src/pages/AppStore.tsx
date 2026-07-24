import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAppStoreContent } from '../content';
import { useLocale } from '../i18n/LocaleProvider';
import { getUiText } from '../i18n/ui';

export const AppStore = () => {
  const { locale } = useLocale();
  const ui = getUiText(locale);
  const { TITLE, SUBTITLE, APPS } = getAppStoreContent(locale);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto min-h-screen"
    >
      <div className="mb-20">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 flex items-center gap-4">
          <ShoppingBag className="w-12 h-12 md:w-20 md:h-20" />
          {TITLE}
        </h1>
        <p className="text-xl text-zinc-400 font-light max-w-2xl">
          {SUBTITLE}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {APPS.map((app) => (
          <Link 
            key={app.id} 
            to={app.link}
            className="group bg-zinc-900/40 rounded-[2.5rem] p-8 border border-zinc-800/50 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col h-full"
          >
            <div className="aspect-square rounded-3xl overflow-hidden mb-8 border border-zinc-800 shadow-xl">
              <img 
                src={app.image} 
                alt={app.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${app.id}/800/800`;
                }}
              />
            </div>
            
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-3xl font-bold tracking-tight">{app.name}</h3>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-950 rounded-full text-xs font-bold">
                {app.price}
              </span>
            </div>
            
            <p className="text-zinc-400 font-light mb-8 flex-grow">
              {app.description}
            </p>

            <div className="flex items-center gap-2 text-zinc-100 font-bold group-hover:gap-4 transition-all">
              {ui.appStore.viewProduct} <ArrowRight size={18} />
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
