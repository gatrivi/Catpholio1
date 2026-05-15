// ============================================================================
// 🍽️ CARTA DIGITAL PARA RESTAURANTES Y LOCALES — VERSIÓN MVP
// ============================================================================
export const DIGITAL_MENU_CONTENT = {
  VERSION: "1.2.0-carta",
  NAV: [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precio", href: "#pricing" },
    { label: "Contacto", href: "#contact" },
  ],
  BRAND: {
    name: "Gatrivi",
    title: "Carta Digital para Restaurantes",
    bio: "Te armamos tu carta online en 24 horas. Tus clientes escanean un QR, ven fotos de tus platos y piden por WhatsApp. Sin comisiones. Sin apps. Sin que te vuelvan loco pidiendo el menú.",
    heroHeadline: [
      { text: "Tu carta", highlight: false },
      { text: "digital", highlight: true },
      { text: "en 24 horas.", highlight: false },
    ],
    heroBackground: "/20180528_192136.jpg",
    profilePicture: "/devtrivi-profile.jpg",
    whatsapp: "5491130055098",
    whatsappMessage: "Hola, tengo un local/restaurante y quiero armar mi carta digital. ¿Me pasan más info?",
    socials: {
      instagram: "https://instagram.com/gatrivi",
      email: "mailto:devtrivi@zengasoft.com"
    },
    cta: {
      primary: {
        label: "Pedir mi carta demo",
        link: "#contact"
      },
      secondary: {
        label: "Ver cómo funciona",
        link: "#como-funciona"
      }
    }
  },
  SECTIONS: {
    painPoints: {
      title: "¿Te pasa esto?",
      subtitle: "El problema",
    },
    howItWorks: {
      title: "Así de simple",
      subtitle: "Cómo funciona",
      description: "Cuatro pasos. Cero complicaciones."
    },
    pricing: {
      title: "Un solo plan. Un solo precio.",
      subtitle: "Sin letra chica",
      description: "$20.000 pesos argentinos por mes. Sin comisiones."
    },
    contact: {
      title: "Hablemos.",
      subtitle: "Tu carta lista mañana",
      description: "Mandanos un WhatsApp y te respondemos al toque."
    }
  },
  PAIN_POINTS: [
    { text: "Tus clientes te piden el menú por WhatsApp una y otra vez.", emoji: "📱" },
    { text: "Perdés ventas porque no tenés fotos de tus platos.", emoji: "📸" },
    { text: "Tu carta actual es un PDF que se ve mal en el celular.", emoji: "📄" },
    { text: 'Te saturan en hora pico con "¿tenés de esto?", "¿cuánto sale?".', emoji: "😵‍💫" }
  ],
  HOW_IT_WORKS: [
    {
      step: "01",
      title: "Nos pasás tu menú",
      description: "Nos mandás tu carta por WhatsApp, una foto, un PDF o lo que tengas a mano. No necesitás que esté ordenado ni bonito.",
      icon: "send"
    },
    {
      step: "02",
      title: "Te la armamos en 24hs",
      description: "Nosotros cargamos todos tus productos, precios y fotos. Vos no hacés nada. El setup inicial va por nuestra cuenta.",
      icon: "clock"
    },
    {
      step: "03",
      title: "Tus clientes escanean y piden",
      description: "Te damos un código QR para poner en tus mesas, folletos y redes sociales. Tus clientes escanean y ven tu carta siempre actualizada.",
      icon: "qr"
    },
    {
      step: "04",
      title: "Editás cuando querés",
      description: "¿Se te acabó algo? ¿Cambiaste un precio? Lo actualizás vos mismo en segundos desde tu celular. Sin depender de nadie.",
      icon: "edit"
    }
  ],
  PRICING: {
    plan: {
      name: "Carta Digital Full",
      price: "20.000",
      period: "/mes",
      annualNote: "O pagá $200.000 por año y ahorrá 2 meses.",
      description: "Todo incluido. Sin comisiones. Sin sorpresas.",
      features: [
        "Carta digital con todos tus productos",
        "Código QR ilimitado (mesas, folletos, redes)",
        "Fotos de platos incluidas",
        "Pedidos directos por WhatsApp",
        "Panel para editar precios y productos",
        "Hosting y dominio incluidos",
        "Soporte por WhatsApp",
        "Setup inicial bonificado"
      ],
      cta: "Quiero mi carta",
      promo: "🚀 Promo Lanzamiento Olivos: Setup 100% bonificado para locales del barrio"
    }
  },
  CONTACT: {
    headline: "Hablemos.",
    subheadline: "Mandanos un WhatsApp y te respondemos al toque. Sin formularios, sin robots.",
    email: "devtrivi@zengasoft.com",
    formEndpoint: "",
    calendlyLink: "",
  },
  UI: {
    pricing: {
      mostPopular: "Más elegido",
      wasLabel: "Antes",
      currency: "ARS",
    },
    footer: {
      navigation: "Navegación",
      social: "Redes",
      backToTop: "Volver arriba",
      rights: "TODOS LOS DERECHOS RESERVADOS",
      tagline: "Carta digital para restaurantes y locales de barrio. Sin comisiones.",
    },
    contact: {
      whatsappButton: "Escribime por WhatsApp",
      whatsappSubtext: "Respondemos en minutos. Sin formularios, sin robots.",
    }
  }
};
