export interface Translations {
  nav: {
    home: string;
    services: string;
    about: string;
    plans: string;
    creativeProcess: string;
    contact: string;
    language: string;
  };
  hero: {
    agency: string;
    title: string;
    description: string;
    subtitle: string;
  };
  brand: {
    title: string;
    subtitle: string;
    boldText: string;
    ideas: {
      title: string;
      description: string;
    };
    adaptability: {
      title: string;
      description: string;
    };
    clients: {
      title: string;
      description: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    strategy: {
      title: string;
      items: string[];
    };
    advertising: {
      title: string;
      items: string[];
    };
    transformation: {
      title: string;
      items: string[];
    };
    development: {
      title: string;
      items: string[];
    };
    description: string;
    tagline: string;
    digitalPresence: {
      title: string;
      description: string;
      cta: string;
    };
    stats: {
      growth: string;
      loyalty: string;
    };
  };
  innovation: {
    title: string;
    description: string;
    cta: string;
  };
  plans: {
    title: string;
    subtitle: string;
    local: {
      title: string;
      features: string[];
      cta: string;
    };
    global: {
      title: string;
      features: string[];
      cta: string;
    };
    leadership: {
      title: string;
      features: string[];
      cta: string;
    };
  };
  additionalServices: {
    title: string;
    consulting: string;
    socialMedia: {
      title: string;
    };
    webDesign: {
      title: string;
    };
    communication: {
      title: string;
    };
    audiovisual: {
      title: string;
    };
    chatbot: {
      title: string;
    };
    ecommerce: {
      title: string;
    };
    production: {
      title: string;
    };
    branding: {
      title: string;
    };
    brandDna: {
      title: string;
      description: string;
    };
    aiMicroApps: {
      title: string;
      description: string;
    };
    techDescription: string;
    techTitle: string;
    techCta: string;
  };
  intelligence: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  focus: {
    title: string;
    subtitle: string;
    cta: string;
    growing: {
      title: string;
      cta: string;
    };
    innovative: {
      title: string;
      cta: string;
    };
    premium: {
      title: string;
      cta: string;
    };
    diverse: {
      title: string;
      cta: string;
    };
  };
  newsletter: {
    title: string;
    subtitle: string;
    description: string;
    placeholder: string;
    button: string;
  };
  brandDna: {
    badge: string;
    title: string;
    description: string;
    formUrlLabel: string;
    formUrlPlaceholder: string;
    formNameLabel: string;
    formNamePlaceholder: string;
    formContactLabel: string;
    formContactPlaceholder: string;
    submitButton: string;
    loadingMessages: string[];
    processing: string;
    successTitle: string;
    successDescription: string;
    analyzeAnother: string;
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successDescription: string;
    contactInfoTitle: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
    whatsappButton: string;
    hoursTitle: string;
    hoursWeekdays: string;
    hoursSaturday: string;
    hoursSunday: string;
    services: string[];
    locationTitle: string;
    locationValue: string;
  };
  footer: {
    description: string;
    navigation: string;
    support: string;
    copyright: string;
    company: string;
  };
}

export const translations: Record<'en' | 'es', Translations> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      plans: 'Plans',
      creativeProcess: 'Creative Process',
      contact: 'Contact',
      language: 'Español'
    },
    hero: {
      agency: 'Conexión Glocal Agency',
      title: 'We Are the Bridge Between Global and Local',
      description: 'We believe every brand deserves a strategy as unique as the market it aims to reach. We\'re passionate about creating ideas that transcend boundaries and adapt with authenticity—because we know local success isn\'t just possible; it\'s our purpose.',
      subtitle: 'We transform ideas into experiences that make a difference.'
    },
    brand: {
      title: 'We Shape Your Brand',
      subtitle: 'Together, we make ideas transcend borders.',
      boldText: 'Brands that Inspire and Connect',
      ideas: {
        title: 'Ideas',
        description: 'An agency that transforms strategies into unique opportunities for every brand.'
      },
      adaptability: {
        title: 'Adaptability',
        description: 'We translate the ever-changing digital world into tangible growth for your business.'
      },
      clients: {
        title: 'More Clients',
        description: 'Your presence becomes fresh, consistent, and strategically positioned to convert opportunities into sales.'
      }
    },
    services: {
      title: 'We Connect the World with Your Brand',
      subtitle: 'Conexión Glocal',
      strategy: {
        title: 'Strategy & Creativity',
        items: [
          'Creative Campaigns',
          'Social Media Management',
          'Digital Content',
          'Video Production'
        ]
      },
      advertising: {
        title: 'Advertising & Positioning',
        items: [
          'Search Engine Advertising',
          'Social Media Advertising',
          'Web Positioning (SEO)',
          'Online Reputation Management'
        ]
      },
      transformation: {
        title: 'Digital Transformation & Sales',
        items: [
          'Digital Transformation Consulting',
          'Digital Tools: CRM & ERP',
          'Artificial Intelligence in Business'
        ]
      },
      development: {
        title: 'Development & E-Commerce',
        items: [
          'Web Design & Hosting',
          'App Development',
          'E-Commerce Solutions'
        ]
      },
      description: 'We Are Your Digital Marketing Agency – Change Is Constant, and We Evolve With You.',
      tagline: 'Innovation, adaptability, disruption, and personalization. We\'re an agency that doesn\'t just follow trends – we reinvent them for each client.',
      digitalPresence: {
        title: 'High-Level Digital Presence',
        description: 'We take your projects to the next level. With Artificial Intelligence, gain profound insights into your customers\' habits.',
        cta: 'Elevate Your Business with AI'
      },
      stats: {
        growth: 'Estimated Growth',
        loyalty: 'Brand Loyalty'
      }
    },
    innovation: {
      title: 'Local Innovation with a Global Perspective',
      description: 'We are an agency that blends strategy, creativity, and adaptability to connect brands with their audience—both locally and globally. We connect ideas, people, and markets through innovative strategies that merge global trends with local needs. With a disruptive mindset, we help brands stand out, create impact, and build meaningful connections in a constantly evolving world.',
      cta: 'Transform Your Brand with High-Impact Strategies'
    },
    plans: {
      title: 'Our Plans',
      subtitle: 'When standard services aren\'t enough, we offer fully customized solutions tailored to the specific needs of your business.',
      local: {
        title: 'Local Connection',
        features: [
          'Social Media Management',
          'Creative Campaigns',
          'SEO Web Positioning',
          'Social Media Advertising (SMA)'
        ],
        cta: 'Ideal'
      },
      global: {
        title: 'Global Impact',
        features: [
          'Glocal Brand Consulting and Strategy',
          'Personalized Digital Content',
          'Digital Transformation',
          'Search Engine Advertising (SEA/SEM)',
          'Social Selling'
        ],
        cta: 'Perfect'
      },
      leadership: {
        title: 'Digital Leadership',
        features: [
          'Complete Social Media Management',
          'Creative Campaigns and Social Media Advertising (SMA/SEA)',
          'SEO Web Positioning',
          'Digital Events and Webinars',
          'Glocal Brand Consulting and Strategy'
        ],
        cta: 'Complete Solution'
      }
    },
    additionalServices: {
      title: 'At Your Disposal',
      consulting: 'Consulting',
      socialMedia: {
        title: 'Boost Your Brand on Social Media'
      },
      webDesign: {
        title: 'Web Design and Development'
      },
      communication: {
        title: 'Communication Strategy and Management'
      },
      audiovisual: {
        title: 'Audiovisual Production: Telling Your Story with Impact'
      },
      chatbot: {
        title: 'Advanced AI Chatbot Service'
      },
      ecommerce: {
        title: 'E-Commerce Solutions'
      },
      production: {
        title: 'Professional Commercial and Podcast Production'
      },
      branding: {
        title: 'Elevate Your Image with Customized Branding'
      },
      brandDna: {
        title: 'AI Brand DNA Diagnostics',
        description: 'We scan your web presence to extract your company\'s visual essence, color palette, typography, and tone of voice. We generate automated campaigns and content with 100% brand consistency.'
      },
      aiMicroApps: {
        title: 'AI Micro-Apps Studio',
        description: 'We transform complex workflows into smart, no-code micro-apps. Automate customer service, quoting, and internal tools powered by generative models.'
      },
      techDescription: 'By integrating artificial intelligence and innovative solutions, we deliver personalized services that optimize your digital strategy, enhance your customer experience, and maximize your brand\'s impact.',
      techTitle: 'Elevate Your Brand with Cutting-Edge Technology',
      techCta: 'Discover Our Tech-Driven Approach'
    },
    intelligence: {
      title: 'Information Analysis and Strategic Intelligence Consulting',
      subtitle: 'Strategic Intelligence: The Foundation for Brilliant Decisions',
      description: 'We provide advanced information analysis services to help you understand the media landscape and your brand\'s perception in the market. Through our network of experts, we deliver data analysis, trend reports, and communication consulting to empower informed, strategic decisions—tailored to the local and global needs of your brand.',
      cta: 'Discover Our Impact'
    },
    focus: {
      title: 'Our Focus:',
      subtitle: 'From SMEs to large corporations, we have the perfect solution to propel your brand.',
      cta: 'Our Solutions',
      growing: {
        title: 'Growing Businesses (SMEs)',
        cta: 'Drive Your Business Forward'
      },
      innovative: {
        title: 'Innovative Brands',
        cta: 'Transform Your Strategy'
      },
      premium: {
        title: 'Premium and Established Companies',
        cta: 'Stand Out with Distinctive Impact'
      },
      diverse: {
        title: 'Diverse Projects',
        cta: 'Connect Authentically with Your Audience'
      }
    },
    newsletter: {
      title: 'Sign Up for Free!',
      subtitle: 'Transforming the Business Landscape',
      description: 'Subscribe to our Glocal Newsletter and stay at the forefront with key trends and strategies shaping the future of business.',
      placeholder: 'Enter your email',
      button: 'Subscribe'
    },
    brandDna: {
      badge: 'AI Lead Magnet',
      title: 'Analyze Your Brand\'s DNA in Real Time',
      description: 'Enter your website link and our AI engine will analyze your visual identity and tone of voice to send you a free diagnostic.',
      formUrlLabel: 'Your Website URL',
      formUrlPlaceholder: 'https://yourcompany.com',
      formNameLabel: 'Name',
      formNamePlaceholder: 'Your name',
      formContactLabel: 'Email / WhatsApp',
      formContactPlaceholder: 'Email or Phone',
      submitButton: 'Get Free DNA Diagnostic',
      loadingMessages: [
        'Analyzing color palette...',
        'Evaluating typography...',
        'Checking tone of voice...',
        'Extracting visual essence...',
        'Generating DNA report...'
      ],
      processing: 'Processing',
      successTitle: 'Analysis Completed!',
      successDescription: 'We have sent the detailed report of your brand\'s DNA to the provided contact',
      analyzeAnother: 'Analyze another brand'
    },
    contact: {
      title: 'Ready to Transform Your Brand?',
      subtitle: 'Contact us and discover how we can take your business to the next level with innovative digital strategies.',
      formTitle: 'Send us a message',
      nameLabel: 'Full Name *',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email *',
      emailPlaceholder: 'you@email.com',
      phoneLabel: 'Phone',
      phonePlaceholder: '+1 xxx xxx xxxx',
      serviceLabel: 'Service of Interest',
      servicePlaceholder: 'Select a service',
      messageLabel: 'Message *',
      messagePlaceholder: 'Tell us about your project...',
      submitButton: 'Send Message',
      submitting: 'Sending...',
      successTitle: 'Message Sent!',
      successDescription: 'Your data has been sent to direccion@imagen-glocal.com and we have redirected you to WhatsApp. We will reply shortly.',
      contactInfoTitle: 'Contact Information',
      whatsappTitle: 'Prefer WhatsApp?',
      whatsappSubtitle: 'Immediate response',
      whatsappButton: 'Chat Now',
      hoursTitle: 'Business Hours',
      hoursWeekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
      hoursSaturday: 'Saturdays: 10:00 AM - 2:00 PM',
      hoursSunday: 'Sundays: Closed',
      services: [
        'Strategy and Creativity',
        'Advertising and Positioning',
        'Digital Transformation',
        'Web Development and E-Commerce',
        'Comprehensive Consulting',
        'Other service'
      ],
      locationTitle: 'Location',
      locationValue: 'Cancún, Quintana Roo (HQ) | Guadalajara, Jalisco (Branch)'
    },
    footer: {
      description: 'We are your strategic partner in driving your brand\'s digital evolution.',
      navigation: 'Navigation',
      support: 'Support',
      copyright: 'Copyright © 2025. All rights reserved.',
      company: 'Web Design Agency of Conexión Glocal'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      plans: 'Planes',
      creativeProcess: 'Proceso Creativo',
      contact: 'Contacto',
      language: 'English'
    },
    hero: {
      agency: 'Agencia Conexión Glocal',
      title: 'Somos el puente entre lo Global y lo Local',
      description: 'Creemos que cada marca merece una estrategia tan única como el mercado al que se dirige. Nos apasiona crear ideas que rompan fronteras y se adapten con autenticidad, porque sabemos que el éxito local no es solo posible: es nuestro propósito.',
      subtitle: 'Transformamos ideas en experiencias que marcan la diferencia'
    },
    brand: {
      title: 'Ideamos tu Marca',
      subtitle: 'Juntos, logramos que las ideas trasciendan fronteras',
      boldText: 'Marcas que inspiran y conectan',
      ideas: {
        title: 'Ideas',
        description: 'Una agencia que convierte estrategias en oportunidades únicas para cada marca.'
      },
      adaptability: {
        title: 'Adaptabilidad',
        description: 'Transformamos el cambiante mundo digital a tu negocio.'
      },
      clients: {
        title: 'Más Clientes',
        description: 'Tu presencia se vuelve fresca, constante y lista para convertir oportunidades en ventas.'
      }
    },
    services: {
      title: 'Conectamos al Mundo con tu Marca',
      subtitle: 'Conexión Glocal',
      strategy: {
        title: 'Estrategia y Creatividad',
        items: [
          'Campañas Creativas',
          'Gestión de Redes Sociales',
          'Contenido Digital',
          'Producción de Video'
        ]
      },
      advertising: {
        title: 'Publicidad y Posicionamiento',
        items: [
          'Publicidad SEA/SEM',
          'Publicidad SMA',
          'SEO',
          'Online Reputation Management'
        ]
      },
      transformation: {
        title: 'Transformación Digital',
        items: [
          'Consultoría',
          'CRM/ERP',
          'Inteligencia Artificial en Negocios'
        ]
      },
      development: {
        title: 'Desarrollo y Comercio Electrónico',
        items: [
          'Diseño Web & Hosting',
          'Desarrollo de Apps',
          'Comercio Electrónico'
        ]
      },
      description: 'Somos tu agencia de marketing digital, el cambio es constante, y nosotros lo hacemos contigo.',
      tagline: 'Innovación, adaptación, disrupción, y personalización. Somos una agencia que no solo sigue tendencias, sino que las reinventa para cada cliente.',
      digitalPresence: {
        title: 'Presencia Digital de Alto Nivel',
        description: 'Llevamos tus proyectos a otro nivel, con Inteligencia Artificial, conoce los hábitos de tus clientes.',
        cta: 'Eleva tu negocio con IA'
      },
      stats: {
        growth: 'Crecimiento estimado',
        loyalty: 'Fidelización de marca'
      }
    },
    innovation: {
      title: 'Innovación Local con un enfoque Global',
      description: 'Somos una agencia que combina estrategia, creatividad y adaptabilidad para conectar marcas con su audiencia a nivel local y global. Conectamos ideas, personas y mercados con estrategias innovadoras que fusionan tendencias globales y necesidades locales. Con un enfoque disruptivo, ayudamos a las marcas a destacar, generar impacto y crear conexiones significativas en un mundo en constante evolución.',
      cta: 'Transforma tu marca con estrategias de impacto'
    },
    plans: {
      title: 'Nuestros Planes',
      subtitle: 'Cuando los servicios estándar no son suficientes, ofrecemos una solución completamente personalizada, adaptada a las necesidades específicas de tu empresa.',
      local: {
        title: 'Conexión Local',
        features: [
          'Gestión de Redes Sociales',
          'Campañas Creativas',
          'SEO',
          'Publicidad SMA'
        ],
        cta: 'Ideal'
      },
      global: {
        title: 'Impacto Global',
        features: [
          'Consultoría de Marca y Estrategia Glocal',
          'Contenido Digital Personalizado',
          'Transformación Digital',
          'Publicidad SEA/SEM',
          'Social Selling'
        ],
        cta: 'Perfecto'
      },
      leadership: {
        title: 'Liderazgo Digital',
        features: [
          'Gestión Completa de Redes Sociales',
          'Campañas Creativas y de Publicidad SMA/SEA',
          'SEO',
          'Eventos Digitales y Webinars',
          'Consultoría de Marca y Estrategia Glocal'
        ],
        cta: 'Completo'
      }
    },
    additionalServices: {
      title: 'A tu disposición',
      consulting: 'Asesoría',
      socialMedia: {
        title: 'Potencia tu Marca en Redes Sociales'
      },
      webDesign: {
        title: 'Diseño y Desarrollo de Páginas Web'
      },
      communication: {
        title: 'Estrategia y Gestión de Comunicación'
      },
      audiovisual: {
        title: 'Producción Audiovisual: Contamos tu Historia con Impacto'
      },
      chatbot: {
        title: 'Servicio de Chatbot con IA Avanzada'
      },
      ecommerce: {
        title: 'E-Commerce'
      },
      production: {
        title: 'Producción de Comerciales y Podcasts Profesionales'
      },
      branding: {
        title: 'Impulsa tu Imagen con branding Personalizados'
      },
      brandDna: {
        title: 'Diagnóstico de ADN de Marca con IA',
        description: 'Escaneamos tu presencia web para extraer la esencia visual, paleta de colores, tipografías y tono de voz de tu empresa. Generamos campañas automatizadas y contenido con 100% de coherencia de marca.'
      },
      aiMicroApps: {
        title: 'Estudio de Micro-Apps de IA',
        description: 'Transformamos flujos de trabajo complejos en micro-aplicaciones inteligentes sin código. Automatiza atención al cliente, cotizaciones y herramientas internas potenciadas por modelos generativos.'
      },
      techDescription: 'Integrando inteligencia artificial y soluciones innovadoras, ofrecemos servicios personalizados que optimizan tu estrategia digital, mejoran la experiencia de tus clientes y maximizan el impacto de tu marca.',
      techTitle: 'Potencia Tu Marca con Tecnología de Vanguardia',
      techCta: 'Descubre Nuestro Enfoque Tecnológico'
    },
    intelligence: {
      title: 'Análisis Informativo y Consultoría de Información Estratégica',
      subtitle: 'Información Estratégica para Decisiones Inteligentes',
      description: 'Proporcionamos un servicio de análisis informativo avanzado para ayudarte a entender el contexto mediático y la percepción de tu marca en el mercado. A través de nuestra red de expertos, brindamos análisis de datos, informes de tendencias y asesoría en comunicación que te permiten tomar decisiones informadas y estratégicas, adaptadas a las necesidades locales y globales de tu marca.',
      cta: 'Mira Nuestro Impacto'
    },
    focus: {
      title: 'Nos dirigimos a',
      subtitle: 'Desde PyMEs hasta grandes corporaciones, tenemos la solución perfecta para catapultar tu marca.',
      cta: 'Conoce Nuestras Soluciones',
      growing: {
        title: 'Empresas en Crecimiento (PyMEs)',
        cta: 'Impulsa tu negocio'
      },
      innovative: {
        title: 'Marcas Innovadoras',
        cta: 'Transforma tu estrategia'
      },
      premium: {
        title: 'Empresas Premium y Consolidadas',
        cta: 'Destaca con impacto'
      },
      diverse: {
        title: 'Proyectos Diversos',
        cta: 'Conéctate con tu audiencia'
      }
    },
    newsletter: {
      title: '¡Inscríbete Gratis!',
      subtitle: 'Transformando el panorama empresarial.',
      description: 'Suscríbete a nuestro Newsletter Glocal y mantente a la vanguardia con las tendencias y estrategias clave que están moldeando el futuro de los negocios.',
      placeholder: 'Ingresa tu correo electrónico',
      button: 'Suscribirse'
    },
    brandDna: {
      badge: 'Lead Magnet IA',
      title: 'Analiza el ADN de tu Marca en Tiempo Real',
      description: 'Ingresa el enlace de tu sitio web y nuestro motor de IA analizará tu identidad visual y tono de voz para enviarte un diagnóstico gratuito.',
      formUrlLabel: 'URL de tu sitio web',
      formUrlPlaceholder: 'https://tuempresa.com',
      formNameLabel: 'Nombre',
      formNamePlaceholder: 'Tu nombre',
      formContactLabel: 'Correo / WhatsApp',
      formContactPlaceholder: 'Email o Teléfono',
      submitButton: 'Obtener Diagnóstico de ADN Gratuito',
      loadingMessages: [
        'Analizando paleta de colores...',
        'Evaluando tipografías...',
        'Comprobando tono de voz...',
        'Extrayendo esencia visual...',
        'Generando reporte de ADN...'
      ],
      processing: 'Procesando',
      successTitle: '¡Análisis Completado!',
      successDescription: 'Hemos enviado el reporte detallado del ADN de tu marca al contacto proporcionado',
      analyzeAnother: 'Analizar otra marca'
    },
    contact: {
      title: '¿Listo para transformar tu marca?',
      subtitle: 'Contáctanos y descubre cómo podemos impulsar tu negocio al siguiente nivel con estrategias digitales innovadoras.',
      formTitle: 'Envíanos un mensaje',
      nameLabel: 'Nombre completo *',
      namePlaceholder: 'Tu nombre completo',
      emailLabel: 'Email *',
      emailPlaceholder: 'tu@email.com',
      phoneLabel: 'Teléfono',
      phonePlaceholder: '+52 xxx xxx xxxx',
      serviceLabel: 'Servicio de interés',
      servicePlaceholder: 'Selecciona un servicio',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Cuéntanos sobre tu proyecto...',
      submitButton: 'Enviar mensaje',
      submitting: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successDescription: 'Tus datos han sido enviados a direccion@imagen-glocal.com y te hemos redirigido a WhatsApp. Responderemos pronto.',
      contactInfoTitle: 'Información de contacto',
      whatsappTitle: '¿Prefieres WhatsApp?',
      whatsappSubtitle: 'Respuesta inmediata',
      whatsappButton: 'Chatear ahora',
      hoursTitle: 'Horarios de atención',
      hoursWeekdays: 'Lunes - Viernes: 9:00 AM - 6:00 PM',
      hoursSaturday: 'Sábados: 10:00 AM - 2:00 PM',
      hoursSunday: 'Domingos: Cerrado',
      services: [
        'Estrategia y Creatividad',
        'Publicidad y Posicionamiento',
        'Transformación Digital',
        'Desarrollo Web y E-Commerce',
        'Consultoría Integral',
        'Otro servicio'
      ],
      locationTitle: 'Ubicación',
      locationValue: 'Cancún, Quintana Roo (HQ) | Guadalajara, Jalisco (Sucursal)'
    },
    footer: {
      description: 'Somos tu socio estratégico para impulsar la evolución digital de tu marca.',
      navigation: 'Navegación',
      support: 'Soporte',
      copyright: 'Copyright © 2025. All rights reserved.',
      company: 'Agencia de Diseño Web de Conexión Glocal'
    }
  }
};
