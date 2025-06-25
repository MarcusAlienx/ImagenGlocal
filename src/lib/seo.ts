import type { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  canonical?: string
  language: 'es' | 'en'
}

export const seoConfig: Record<'es' | 'en', SEOConfig> = {
  es: {
    title: 'Imagen Glocal - Agencia de Marketing Digital | Imagen Global, Poder Local',
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
      'estrategia digital'
    ],
    ogTitle: 'Imagen Glocal - Transformamos tu marca con estrategias digitales innovadoras',
    ogDescription: 'Agencia de marketing digital especializada en conectar marcas con audiencias locales y globales. Estrategias personalizadas que generan resultados.',
    ogImage: 'https://imagen-glocal.com/og-image-es.jpg',
    twitterTitle: 'Imagen Glocal - Agencia de Marketing Digital',
    twitterDescription: 'Transformamos ideas en experiencias digitales que marcan la diferencia',
    language: 'es'
  },
  en: {
    title: 'Imagen Glocal - Digital Marketing Agency | Global Image, Local Power',
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
      'digital strategy'
    ],
    ogTitle: 'Imagen Glocal - Transform your brand with innovative digital strategies',
    ogDescription: 'Digital marketing agency specialized in connecting brands with local and global audiences. Personalized strategies that generate results.',
    ogImage: 'https://imagen-glocal.com/og-image-en.jpg',
    twitterTitle: 'Imagen Glocal - Digital Marketing Agency',
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
    authors: [{ name: 'Imagen Glocal' }],
    creator: 'Imagen Glocal',
    publisher: 'Imagen Glocal',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://imagen-glocal.com'),
    alternates: {
      canonical: `https://imagen-glocal.com${page ? `/${page}` : ''}`,
      languages: {
        'es': 'https://imagen-glocal.com',
        'en': 'https://paginamuestra.3.isparkcorp.com',
      },
    },
    openGraph: {
      title: config.ogTitle || pageTitle,
      description: config.ogDescription || config.description,
      url: `https://imagen-glocal.com${page ? `/${page}` : ''}`,
      siteName: 'Imagen Glocal',
      images: [
        {
          url: config.ogImage || 'https://imagen-glocal.com/og-image-default.jpg',
          width: 1200,
          height: 630,
          alt: config.ogTitle || pageTitle,
        },
      ],
      locale: language === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: config.twitterTitle || pageTitle,
      description: config.twitterDescription || config.description,
      images: [config.ogImage || 'https://imagen-glocal.com/og-image-default.jpg'],
      creator: '@imagenglocal',
      site: '@imagenglocal',
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
    verification: {
      google: 'google-site-verification-code',
      other: {
        'facebook-domain-verification': 'facebook-verification-code',
      },
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Imagen Glocal',
  alternateName: 'Imagen Glocal Agency',
  url: 'https://imagen-glocal.com',
  logo: 'https://imagen-glocal.com/logo.png',
  description: 'Agencia de marketing digital especializada en estrategias glocales',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Guadalajara',
    addressLocality: 'Guadalajara',
    addressRegion: 'Jalisco',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-33-1962-7565',
    contactType: 'customer service',
    availableLanguage: ['Spanish', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/share/1E4jzo55sd/',
    'https://x.com/imagenglocal',
    'https://www.instagram.com/imagenglocal/',
    'https://www.tiktok.com/@imagen.glocal',
  ],
  foundingDate: '2020',
  numberOfEmployees: '10-50',
  industry: 'Digital Marketing',
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
