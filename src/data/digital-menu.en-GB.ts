import { DIGITAL_MENU_CONTENT as DIGITAL_MENU_CONTENT_ES } from './digital-menu';

// English (UK) translation of the Carta Digital landing page.
// Keep anchor hrefs (e.g. "#como-funciona") as-is so existing sections still work.
export const DIGITAL_MENU_CONTENT = {
  ...DIGITAL_MENU_CONTENT_ES,
  VERSION: '1.2.0-carta-en',
  NAV: [
    { label: 'How it works', href: '#como-funciona' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  BRAND: {
    ...DIGITAL_MENU_CONTENT_ES.BRAND,
    title: 'Digital Menu for Restaurants',
    heroHeadline: [
      { text: 'Your', highlight: false },
      { text: 'digital', highlight: true },
      { text: 'menu in 24 hours.', highlight: false },
    ],
    bio: 'We set up your online menu in 24 hours. Your customers scan a QR, see photos of your dishes, and order via WhatsApp. No commissions. No apps. No stress asking for your menu.',
    whatsappMessage:
      'Hi, I have a restaurant/store and want to set up my digital menu. Can you share more info?',
    cta: {
      primary: { label: 'Get my demo menu', link: '#contact' },
      secondary: { label: 'See how it works', link: '#como-funciona' },
    },
  },
  SECTIONS: {
    painPoints: {
      title: 'Is this happening to you?',
      subtitle: 'The problem',
    },
    howItWorks: {
      title: 'So simple',
      subtitle: 'How it works',
      description: 'Four steps. Zero hassle.',
    },
    pricing: {
      title: 'One plan. One price.',
      subtitle: 'No fine print',
      description: '$20.000 Argentine pesos per month. No commissions.',
    },
    contact: {
      title: "Let’s talk.",
      subtitle: 'Menu ready tomorrow',
      description: 'Send us a WhatsApp and we reply right away.',
    },
  },
  PAIN_POINTS: [
    { emoji: '📱', text: 'Your customers ask for the menu on WhatsApp over and over.' },
    { emoji: '📸', text: "You lose sales because you don’t have photos of your dishes." },
    { emoji: '📄', text: 'Your current menu is a PDF that looks bad on mobile.' },
    { emoji: '😵‍💫', text: 'You get overwhelmed at peak hours with “Do you have this?” “How much is it?”' },
  ],
  HOW_IT_WORKS: [
    {
      step: '01',
      title: 'You send us your menu',
      description:
        'Send your menu via WhatsApp: a photo, a PDF, or whatever you already have. It does not need to be organized or “pretty”.',
      icon: 'send',
    },
    {
      step: '02',
      title: 'We build it in 24h',
      description:
        'We load all your products, prices, and photos. You don’t have to do anything. The initial setup is on us.',
      icon: 'clock',
    },
    {
      step: '03',
      title: 'Customers scan and order',
      description:
        'We give you a QR code to place on tables, flyers, and social media. Customers scan it and see your menu updated all the time.',
      icon: 'qr',
    },
    {
      step: '04',
      title: 'Edit whenever you want',
      description:
        'Finished something? Changed a price? Update it yourself in seconds from your phone. No dependency on anyone.',
      icon: 'edit',
    },
  ],
  PRICING: {
    plan: {
      ...DIGITAL_MENU_CONTENT_ES.PRICING.plan,
      name: 'Digital Menu Full',
      price: '20.000',
      period: '/month',
      annualNote: 'Or pay $200.000 per year and save 2 months.',
      description: 'Everything included. No commissions. No surprises.',
      features: [
        'Digital menu with all your products',
        'Unlimited QR code (tables, flyers, social media)',
        'Dish photos included',
        'Direct orders via WhatsApp',
        'Panel to edit prices and products',
        'Hosting and domain included',
        'WhatsApp support',
        'Launch setup discounted',
      ],
      cta: 'Get my menu',
      promo: 'Launching promo: 100% discounted setup for local neighborhood places',
    },
  },
  CONTACT: {
    ...DIGITAL_MENU_CONTENT_ES.CONTACT,
    headline: "Let’s talk.",
    subheadline: 'Message us on WhatsApp and we reply right away. No forms, no bots.',
  },
  UI: {
    ...DIGITAL_MENU_CONTENT_ES.UI,
    pricing: {
      ...DIGITAL_MENU_CONTENT_ES.UI.pricing,
      mostPopular: 'Most popular',
      wasLabel: 'Was',
      currency: 'ARS',
    },
    footer: {
      ...DIGITAL_MENU_CONTENT_ES.UI.footer,
      navigation: 'Navigation',
      social: 'Social',
      backToTop: 'Back to top',
      rights: 'ALL RIGHTS RESERVED',
      tagline: 'Digital menus for restaurants and local neighbourhood places. No commissions.',
    },
    contact: {
      ...DIGITAL_MENU_CONTENT_ES.UI.contact,
      whatsappButton: 'Message me on WhatsApp',
      whatsappSubtext: 'We reply within minutes. No forms, no bots.',
    },
  },
};

