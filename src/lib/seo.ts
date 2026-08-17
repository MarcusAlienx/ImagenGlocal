import type { Metadata } from 'next'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://imagenglocal.netlify.app').replace(/\/$/, '')

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  language: 'es' | 'en'
}

export const seoConfig: Record<'es' | 'en', SEOConfig> = {
  es: {
    title: 'Conexión Glocal - Agencia de Marketing Digital | Imagen Global, Poder Local',
    description: 'Somos el puente entre lo Global y lo Local. Agencia de marketing digital que transforma ideas en experiencias que marcan la diferencia. Servicios de SEO, Redes Sociales, Desarrollo Web y más.',
    keywords: [
      'agencia marketing digital',
      'marketing digital México',
      'SEO Guadalajara',
      'redes sociales',
      'desarrollo web',
      'e-commerce',
      'branding',
      'publicidad digital',
      'transformación digital',
      'consultoría digital',
      'imagen glocal',
      'marketing local',
      'estrategia digital',
      'GEO marketing',
      'optimización para motores generativos',
      'agencia SEO Cancún',
      'agencia SEO Guadalajara'
    ],
    ogTitle: 'Conexión Glocal - Transformamos tu marca con estrategias digitales innovadoras',
    ogDescription: 'Agencia de marketing digital especializada en conectar marcas con audiencias locales y globales. Estrategias personalizadas que generan resultados.',
    twitterTitle: 'Conexión Glocal - Agencia de Marketing Digital',
    twitterDescription: 'Transformamos ideas en experiencias digitales que marcan la diferencia',
    language: 'es'
  },
  en: {
    title: 'Conexión Glocal - Digital Marketing Agency | Global Image, Local Power',
    description: 'We are the bridge between Global and Local. Digital marketing agency that transforms ideas into experiences that make a difference. SEO, Social Media, Web Development services and more.',
    keywords: [
      'digital marketing agency',
      'digital marketing Mexico',
      'SEO Guadalajara',
      'social media marketing',
      'web development',
      'e-commerce solutions',
      'branding agency',
      'digital advertising',
      'digital transformation',
      'digital consulting',
      'imagen glocal',
      'local marketing',
      'digital strategy',
      'generative engine optimization',
      'SEO agency Mexico',
      'AI search optimization'
    ],
    ogTitle: 'Conexión Glocal - Transform your brand with innovative digital strategies',
    ogDescription: 'Digital marketing agency specialized in connecting brands with local and global audiences. Personalized strategies that generate results.',
    twitterTitle: 'Conexión Glocal - Digital Marketing Agency',
    twitterDescription: 'We transform ideas into digital experiences that make a difference',
    language: 'en'
  }
}

export function generateSEOMetadata(language: 'es' | 'en' = 'es', page?: string): Metadata {
  const config = seoConfig[language]

  const pageTitle = page ? `${page} | ${config.title}` : config.title

  return {
    title: pageTitle,
    description: config.description,
    keywords: config.keywords.join(', '),
    authors: [{ name: 'Conexión Glocal' }],
    creator: 'Conexión Glocal',
    publisher: 'Conexión Glocal',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}${page ? `/${page}` : ''}`,
    },
    openGraph: {
      title: config.ogTitle || pageTitle,
      description: config.ogDescription || config.description,
      url: `${siteUrl}${page ? `/${page}` : ''}`,
      siteName: 'Conexión Glocal',
      locale: language === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.twitterTitle || pageTitle,
      description: config.twitterDescription || config.description,
      creator: '@imagenglocal',
      site: '@imagenglocal',
    },
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Conexión Glocal',
  alternateName: 'Conexión Glocal Agency',
  url: siteUrl,
  logo: `${siteUrl}/logo-dark.png`,
  description: 'Agencia de marketing digital especializada en estrategias glocales',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Cancún',
      addressRegion: 'Quintana Roo',
      addressCountry: 'MX',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Guadalajara',
      addressRegion: 'Jalisco',
      addressCountry: 'MX',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-998-920-3002',
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
  email: 'hola@imagen-glocal.com',
  areaServed: ['México', 'Cancún', 'Guadalajara'],
  sameAs: [
    'https://www.facebook.com/share/1E4jzo55sd/',
    'https://x.com/imagenglocal',
    'https://www.instagram.com/imagenglocal/',
    'https://www.tiktok.com/@imagen.glocal',
  ],
  industry: 'Digital Marketing',
  knowsAbout: ['SEO', 'Generative Engine Optimization', 'Brand Strategy', 'UX/UI Design', 'Web Development', 'E-commerce', 'Artificial Intelligence'],
  services: [
    'Digital Marketing',
    'SEO',
    'Social Media Marketing',
    'Web Development',
    'E-commerce',
    'Branding',
    'Digital Advertising',
  ],
}
