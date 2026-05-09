import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Globe } from 'lucide-react';
import { PRICING, SECTIONS, BRAND, REGIONAL_OFFERS } from '../content';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [isArgentina, setIsArgentina] = useState(false);
  const [loadingGeo, setLoadingGeo] = useState(true);

  useEffect(() => {
    // Simple geolocation check using a free API
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'AR') {
          setIsArgentina(true);
        }
      })
      .catch(err => console.error('Geo detection failed:', err))
      .finally(() => setLoadingGeo(false));
  }, []);

  const currentPlans = PRICING[billingCycle];

  const calculatePrice = (basePrice: string) => {
    if (basePrice === 'Custom') return basePrice;
    
    let price = parseInt(basePrice.replace(',', ''));
    
    // Apply Argentina discount OR Launch discount
    if (isArgentina) {
      price = price * (1 - REGIONAL_OFFERS.argentina.discount / 100);
    } else {
      price = price * (1 - REGIONAL_OFFERS.launch.discount / 100);
    }
    
    return Math.round(price).toLocaleString();
  };

  return (
    <section id="pricing" className="px-6 md:px-12 lg:px-24 py-32 bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Banner de Oferta */}
        {!loadingGeo && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          >
            {isArgentina ? (
              <>
                <span className="text-2xl">{REGIONAL_OFFERS.argentina.flag}</span>
                <p className="text-zinc-100 font-bold">
                  {REGIONAL_OFFERS.argentina.message} <span className="text-zinc-500 font-mono ml-2">[{REGIONAL_OFFERS.argentina.label}]</span>
                </p>
              </>
            ) : (
              <>
                <div className="p-2 rounded-lg bg-zinc-100 text-zinc-950">
                  <Globe size={20} />
                </div>
                <p className="text-zinc-100 font-bold">
                  {REGIONAL_OFFERS.launch.message}
                </p>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20 font-mono">
                  {REGIONAL_OFFERS.launch.remainingReviews} reviews left
                </div>
              </>
            )}
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">
              {SECTIONS.pricing.title}
            </h2>
            <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
              {SECTIONS.pricing.subtitle}
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-xl w-fit">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                billingCycle === 'annual' 
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Annual
              <span className="ml-2 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={`${billingCycle}-${plan.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                  plan.popular 
                    ? 'bg-zinc-900 border-zinc-100 shadow-[0_0_40px_-15px_rgba(255,255,255,0.1)]' 
                    : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-100 text-zinc-950 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-zinc-100' : 'text-zinc-400'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-zinc-100">
                      {plan.price !== 'Custom' && '$'}{calculatePrice(plan.price)}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-zinc-500 text-sm font-mono">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    )}
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-xs text-zinc-500 line-through mt-1">
                      Was ${plan.price}
                    </p>
                  )}
                  <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                      <div className={`mt-0.5 p-0.5 rounded-full ${plan.popular ? 'bg-zinc-100 text-zinc-950' : 'bg-zinc-800 text-zinc-400'}`}>
                        <Check size={12} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                <motion.a
                  href={BRAND.cta.secondary.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                    plan.popular 
                      ? 'bg-zinc-100 text-zinc-950 hover:bg-white' 
                      : 'bg-zinc-900 text-zinc-100 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </motion.a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
