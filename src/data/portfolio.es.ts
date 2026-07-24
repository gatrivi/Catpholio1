import {
  BRAND as BRAND_EN,
  CONTACT as CONTACT_EN,
  EXPERIENCE as EXPERIENCE_EN,
  FEATURED_PROJECTS as FEATURED_PROJECTS_EN,
  PORTFOLIO_CONTENT as PORTFOLIO_CONTENT_EN,
  SKILLS as SKILLS_EN,
  type FeaturedProject,
} from './portfolio';

export const BRAND = {
  ...BRAND_EN,
  title: 'Desarrollador React · Intérprete médico · Constructor de productos',
  bio: 'Construyo software que uso para trabajar — y lo entrego con calidad para que otros también puedan depender de ello. CatIntAssist ejecuta mis sesiones de interpretación. CatReader sincroniza mi biblioteca. Tmm Store, Rosario y Cathedral atienden usuarios reales todos los días. Cuando producción falla, yo lo arreglo. Ese es el estándar con el que código.',
};

export const SKILLS = SKILLS_EN.map((group) => {
  const categoryMap: Record<string, string> = {
    Frontend: 'Frontend',
    'Backend & APIs': 'Backend y APIs',
    'Tools & Platforms': 'Herramientas y plataformas',
    Design: 'Diseño',
  };

  return {
    ...group,
    category: categoryMap[group.category] ?? group.category,
  };
});

export const EXPERIENCE = EXPERIENCE_EN.map((job) => {
  const roleMap: Record<string, string> = {
    'Founding Developer & End User': 'Desarrollador fundador y usuario principal',
    'Medical Interpreter': 'Intérprete médico',
  };

  const idx = EXPERIENCE_EN.findIndex((j) => j.role === job.role);
  if (idx === 0) {
    return {
      ...job,
      role: roleMap[job.role] ?? job.role,
      period: job.period.replace('Present', 'Presente'),
      description:
        'Construí y publiqué un panel de interpretación médica en tiempo real que se usa a diario en sesiones clínicas reales. Fui desarrollador y usuario principal a la vez: prioricé estabilidad, velocidad y despliegues sin downtime (cero paradas).',
      bullets: [
        'Envié features a producción real donde el downtime = ingresos perdidos',
        'Armé un flujo de “safe deploy”: cambios atómicos pequeños, rollback inmediato, cero releases rompibles en 12+ meses',
        'Debuggear bajo presión durante llamadas activas: intuición sobre qué bugs son “cosméticos” vs. fatal para la sesión',
        'Mejoré UX observando mis propias reacciones de estrés en llamadas médicas de alta exigencia',
        'Gestioné costos de APIs y rate limits (Deepgram, Google Translate) con un presupuesto realista',
        'Respondí incidentes full-stack: desde caídas de transcripción hasta cascadas de traducción, sin un equipo de ops dedicado',
      ],
    };
  }

  if (idx === 1) {
    return {
      ...job,
      role: roleMap[job.role] ?? job.role,
      description:
        'Realicé interpretación médica bilingüe en contextos clínicos de alta complejidad. Esa experiencia alimentó directamente los requisitos del producto de CatIntAssist.',
      bullets: [
        'Familiaridad profunda con terminología médica, flujos tipo HIPAA-adjacent y la carga cognitiva de interpretar simultáneamente',
        'Conocí de primera mano los problemas que CatIntAssist resuelve: pestañas, minutos facturables, y verificación de traducciones bajo presión de tiempo',
      ],
    };
  }

  return job;
});

export const CONTACT = {
  ...CONTACT_EN,
  headline: 'Construyamos algo que se mantenga en pie.',
  subline: 'Disponible para freelance, colaboración o roles full‑stack donde importa entregar.',
};

export const FEATURED_PROJECTS: FeaturedProject[] = FEATURED_PROJECTS_EN.map((p) => {
  if (p.id === 'catintassist') {
    return {
      ...p,
      tagline: 'Workspace de interpretación médica en tiempo real — pulsa verde, captura audio, y gana',
      description:
        'Pulsa el botón verde. Elegí la pestaña del navegador donde corre la llamada médica. La IA captura el audio, detecta inglés y español en tiempo real y muestra ambos idiomas en columnas paralelas — transcripción a la izquierda, traducción a la derecha, con señales de fuente y color para que sepas cuál es cuál al instante. El timer corre, el total en efectivo sube y, al terminar, una “bolsa de dinero” explota para sumar tus ganancias al total del día. No es un juguete: lo uso para trabajar.',
      workflow: [
        'Pulsa el botón verde para iniciar una sesión',
        'Selecciona la pestaña del navegador donde está la llamada médica (o usá YouTube para probar)',
        'El audio se captura y se transmite al motor de IA en tiempo real',
        'La IA detecta el idioma y rellena la columna correcta (ENG/SPA) en vivo',
        ...p.workflow.slice(4),
      ],
    };
  }

  if (p.id === 'catreader') {
    return {
      ...p,
      tagline: 'Lector de PDF y TXT entre dispositivos con sincronización sin autenticación',
      description:
        'Un e-reader estándar del mercado que sincroniza tu progreso entre dispositivos sin login. Incluye enriquecimiento de biblioteca con IA, integración con Google Drive y un pre-buffering de PDFs bien fluido.',
    };
  }

  if (p.id === 'tmm-store') {
    return {
      ...p,
      tagline: 'SPA de pedidos por WhatsApp sin backend para pymes',
      description:
        'Un sistema de menú y carrito para sitios estáticos que convierte cualquier chat de WhatsApp en un canal de ventas. Sin base de datos, sin backend y sin fees de SaaS: solo `menu.json` y un paso de build.',
    };
  }

  if (p.id === 'rosario') {
    return {
      ...p,
      tagline: 'Compañero de oración digital — rosario interactivo católico',
      description:
        'Una app web contemplativa para rezar el rosario en formato digital. UI limpia por tarjetas, seguimiento del progreso por misterios y una experiencia tranquila, sin distracciones, pensada para la devoción diaria.',
    };
  }

  if (p.id === 'cathedral') {
    return {
      ...p,
      tagline: 'Compañero litúrgico para el Oficio Divino',
      description:
        'Una web para la oración litúrgica católica: organiza el Oficio Divino del día en un formato legible y navegable. Hecha para un ritmo contemplativo y claridad textual.',
    };
  }

  return p;
});

// Keep existing shape for any legacy consumers (Navbar/Footer/etc.)
export const PORTFOLIO_CONTENT = {
  ...PORTFOLIO_CONTENT_EN,
  BRAND: {
    ...PORTFOLIO_CONTENT_EN.BRAND,
    title: BRAND.title,
    bio: BRAND.bio,
    heroHeadline: [
      { text: 'Construyendo el', highlight: false },
      { text: 'futuro digital', highlight: true },
      { text: 'un pixel a la vez.', highlight: false },
    ],
  },
  PROJECTS: FEATURED_PROJECTS_MAP(FEATURED_PROJECTS),
} as typeof PORTFOLIO_CONTENT_EN;

function FEATURED_PROJECTS_MAP(projects: FeaturedProject[]) {
  return projects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    image: p.image,
    tags: p.tech,
    demo: p.liveUrl || undefined,
    repo: p.repoUrl || undefined,
    highlights: p.features,
  }));
}

