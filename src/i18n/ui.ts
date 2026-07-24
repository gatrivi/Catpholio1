import type { Locale } from './locale';

const format = (template: string, vars: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`));

export type Ui = {
  portfolio: {
    workLabel: string;
    featuredProjectsLabel: string;
    featuredProjectsSubtitle: string;
  };
  originStory: {
    originLabel: string;
    whyTitle: string;
    whySubtitle: string;
    problemTitle: string;
    problemBody: string;
    fixTitle: string;
    fixBody: string;
    proofTitle: string;
    proofBody: string;
    quote: string;
  };
  skills: {
    toolkitLabel: string;
    skillsTitle: string;
  };
  experience: {
    backgroundLabel: string;
    experienceTitle: string;
  };
  contact: {
    contactLabel: string;
  };
  projectCard: {
    screensLabel: string;
    theLoopLabel: string;
    moreStepsTemplate: (n: number) => string;
    featuresCta: string;
    liveAppCta: string;
    liveCta: string;
    repoCta: string;
    repoTitle: string;
  };
  projectGallery: {
    hideFeatures: string;
    viewFeaturesTemplate: (n: number) => string;
    viewCodeTitle: string;
    closeEscTitle: string;
    interpreterFirstFeaturesLabel: (n: number) => string;
    featuresLabel: (n: number) => string;
  };
  appStore: {
    viewProduct: string;
  };
  menuContact: {
    doubtsTitle: string;
    h2Title: string;
  };
  footer: {
    portfolioRights: string;
    allRightsReserved: string;
    portfolioTagline: string;
  };
};

export const UI_TEXT: Record<Locale, Ui> = {
  'en-GB': {
    portfolio: {
      workLabel: 'Work',
      featuredProjectsLabel: 'Featured Projects',
      featuredProjectsSubtitle: 'Production-grade tools shipped to real users. Live demos available.',
    },
    originStory: {
      originLabel: 'Origin',
      whyTitle: 'Why I Built This',
      whySubtitle: 'I already knew how to code. I needed to know I could be responsible for production.',
      problemTitle: 'The Problem',
      problemBody:
        'As a freelance interpreter, I had no way to track billable hours, off-call gaps, or daily productivity. I was flying blind — guessing at my own output.',
      fixTitle: 'The Fix',
      fixBody:
        'I built an automatic session tracker: the app detects call start/end, starts an off-call timer instantly, and renders a live progress bar — orange for idle, blue for active.',
      proofTitle: 'The Proof',
      proofBody:
        'For the first time, I can see at a glance how productive my day has been. The same tool I use to work is the tool that tells me how well I\'m working — and it hasn\'t broken once.',
      quote: '“I didn\'t need to learn to code. I needed to prove I could ship something that stays up.”',
    },
    skills: {
      toolkitLabel: 'Toolkit',
      skillsTitle: 'Skills',
    },
    experience: {
      backgroundLabel: 'Background',
      experienceTitle: 'Experience',
    },
    contact: {
      contactLabel: 'Contact',
    },
    projectCard: {
      screensLabel: 'Screens',
      theLoopLabel: 'The Loop',
      moreStepsTemplate: (n) => `+ ${n} more steps →`,
      featuresCta: 'Features',
      liveAppCta: 'Live App',
      liveCta: 'Live',
      repoCta: 'Repo',
      repoTitle: 'View Code',
    },
    projectGallery: {
      hideFeatures: 'Hide Features',
      viewFeaturesTemplate: (n) => format('View {n} Features', { n }),
      viewCodeTitle: 'View Code',
      closeEscTitle: 'Close (Esc)',
      interpreterFirstFeaturesLabel: (n) => `${n} Interpreter-First Features`,
      featuresLabel: (n) => `${n} Features`,
    },
    appStore: {
      viewProduct: 'View Product',
    },
    menuContact: {
      doubtsTitle: 'Questions? Write to us.',
      h2Title: 'Your menu is ready tomorrow.',
    },
    footer: {
      portfolioRights: 'All rights reserved.',
      allRightsReserved: 'All rights reserved.',
      portfolioTagline: 'Building pragmatic tools with React, TypeScript & AI.',
    },
  },
  'es-ES': {
    portfolio: {
      workLabel: 'Trabajo',
      featuredProjectsLabel: 'Proyectos destacados',
      featuredProjectsSubtitle: 'Herramientas listas para producción y usadas por personas reales. Demo en vivo disponible.',
    },
    originStory: {
      originLabel: 'Origen',
      whyTitle: 'Por qué lo construí',
      whySubtitle: 'Ya sabía programar. Necesitaba demostrar que podía hacerse responsable de producción.',
      problemTitle: 'El problema',
      problemBody:
        'Como intérprete freelance, no tenía forma de medir horas facturables, los tiempos entre llamadas ni mi productividad diaria. Iba a ciegas: adivinaba mi propio ritmo.',
      fixTitle: 'La solución',
      fixBody:
        'Construí un sistema automático de seguimiento: la app detecta el inicio y fin de la llamada, arranca el temporizador fuera de llamada al instante y muestra una barra de progreso en vivo: naranja para inactividad, azul para actividad.',
      proofTitle: 'La prueba',
      proofBody:
        'Por primera vez, puedo ver de un vistazo qué tan productivo fue mi día. La misma herramienta con la que trabajo es la que me muestra qué tan bien estoy trabajando — y nunca se rompió.',
      quote:
        '“No necesitaba aprender a programar. Necesitaba probar que podía entregar algo que se mantiene en pie.”',
    },
    skills: {
      toolkitLabel: 'Herramientas',
      skillsTitle: 'Habilidades',
    },
    experience: {
      backgroundLabel: 'Antecedentes',
      experienceTitle: 'Experiencia',
    },
    contact: {
      contactLabel: 'Contacto',
    },
    projectCard: {
      screensLabel: 'Capturas',
      theLoopLabel: 'El ciclo',
      moreStepsTemplate: (n) => `+ ${n} pasos más →`,
      featuresCta: 'Funciones',
      liveAppCta: 'App en vivo',
      liveCta: 'En vivo',
      repoCta: 'Repo',
      repoTitle: 'Ver código',
    },
    projectGallery: {
      hideFeatures: 'Ocultar funciones',
      viewFeaturesTemplate: (n) => format('Ver {n} funciones', { n }),
      viewCodeTitle: 'Ver código',
      closeEscTitle: 'Cerrar (Esc)',
      interpreterFirstFeaturesLabel: (n) => `${n} Funciones enfocadas en intérpretes`,
      featuresLabel: (n) => `${n} Funciones`,
    },
    appStore: {
      viewProduct: 'Ver producto',
    },
    menuContact: {
      doubtsTitle: '¿Dudas? Escribinos.',
      h2Title: 'Tu carta lista mañana mismo.',
    },
    footer: {
      portfolioRights: 'Todos los derechos reservados.',
      allRightsReserved: 'Todos los derechos reservados.',
      portfolioTagline: 'Construyendo herramientas pragmáticas con React, TypeScript y IA.',
    },
  },
};

export function getUiText(locale: Locale) {
  return UI_TEXT[locale];
}

