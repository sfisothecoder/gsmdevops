import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CompanyConstants } from '@constants';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gsmdevops.com'),
  title: {
    default: 'GSM DevOps - Leading Software Development Company | Web, Mobile & AI Solutions',
    template: `%s | ${CompanyConstants.NAME}`,
  },
  description:
    'GSM DevOps is a premier software company specializing in web development, mobile app development, AI chatbots, digital marketing, and web hosting. Based in Alexandria, Egypt, we deliver innovative digital solutions that drive business growth.',
  keywords: [
    'gsmdevops',
    'gsmdevops software',
    'gsmdevops for software development',
    'software development company',
    'software development south africa',
    'software development johannesburg',
    'web development',
    'web development south africa',
    'web development johannesburg',
    'mobile app development',
    'mobile app development south africa',
    'AI chatbot',
    'AI chatbot development',
    'digital marketing',
    'digital marketing south africa',
    'web hosting',
    'web hosting south africa',
    'managed hosting',
    'cloud hosting',
    'software company south africa',
    'software company johannesburg',
    'custom software development',
    'responsive website design',
    'e-commerce development',
    'DevOps services',
    'cloud deployment',
    'UI/UX design',
    'progressive web apps',
    'PWA development',
  ],
  authors: [{ name: 'G Sfisokuhle Mkhwanazi', url: 'https://gsmdevops.com' }],
  creator: 'G Sfisokuhle Mkhwanazi',
  publisher: 'G Sfisokuhle Mkhwanazi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gsmdevops.co.za',
    siteName: 'GSM DevOps for Software Development',
    title: 'GSM DevOps - Leading Software Development Company | Web, Mobile & AI Solutions',
    description:
      'Premier software development company in Alexandria, Egypt. Specializing in web development, mobile apps, AI chatbots, digital marketing, and cloud hosting solutions.',
    images: [
      {
        url: '/images/RowadLogo/gsm_logo_main.png',
        width: 1200,
        height: 630,
        alt: 'GSM DevOps For Software Development Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSM DevOps - Leading Software Development Company',
    description:
      'Premier software development company specializing in web, mobile, AI chatbots, digital marketing & cloud hosting.',
    images: ['/images/RowadLogo/gsm_logo_main.png'],
    creator: '@G Sfisokuhle Mkhwanazi',
    site: '@gsmdevops',
  },
  verification: {
    google: 'enter-google-verification-code',
  },
  alternates: {
    canonical: 'https://gsmdevops.co.za',
  },
  icons: {
    icon: '/images/RowadLogo/gsm_icon_round.png',
    apple: '/images/RowadLogo/gsm_icon_round.png',
    shortcut: '/images/RowadLogo/gsm_icon_round.png',
  },
  manifest: '/manifest.json',
  category: 'technology',
  classification: 'Software Development',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'GSM DevOps',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://gsmdevops.co.za/#organization',
        name: 'GSM DevOps for Software Development',
        alternateName: ['GSM DevOps', 'GSM DevOps Software', 'GSM DevOps Tech'],
        url: 'https://gsmdevops.co.za',
        logo: {
          '@type': 'ImageObject',
          url: 'https://gsmdevops.co.za/images/RowadLogo/gsm_logo_main.png',
          width: 1200,
          height: 630,
        },
        image: 'https://gsmdevops.co.za/images/RowadLogo/gsm_logo_main.png',
        description:
          'GSM DevOps for Software Development is a premier software company specializing in web development, mobile app development, AI chatbots, digital marketing, and web hosting.',
        foundingDate: '2020',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          minValue: 10,
          maxValue: 50,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Johannesburg',
          addressLocality: 'Johannesburg',
          addressCountry: 'Gauteng',
          addressRegion: 'Gauteng, South Africa',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 31.2391,
          longitude: 29.9598,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+27 78 306 1787',
          contactType: 'customer service',
          email: 'team@gsmdevops.co.za',
          availableLanguage: ['English', 'isiZulu'],
        },
        sameAs: [
          'https://www.linkedin.com/company/gsmdevops-for-software-development',
          'https://facebook.com/gsmdevops',
          'https://wa.me/27783061787',
        ],
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'AI Chatbot Development',
          'Digital Marketing',
          'Web Hosting',
          'Cloud Computing',
          'DevOps',
          'UI/UX Design',
          'E-Commerce Development',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://gsmdevops.co.za/#website',
        url: 'https://gsmdevops.co.za',
        name: 'GSM DevOps for Software Development',
        description:
          'Premier software development company specializing in web development, mobile apps, AI chatbots, digital marketing, and cloud hosting.',
        publisher: {
          '@id': 'https://gsmdevops.co.za/#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://gsmdevops.co.za/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://gsmdevops.co.za/#localbusiness',
        name: 'GSM DevOps for Software Development',
        image: 'https://gsmdevops.co.za/images/RowadLogo/gsm_logo_main.png',
        url: 'https://gsmdevops.co.za',
        telephone: '+27 78 306 1787',
        email: 'team@gsmdevops.co.za',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Johannesburg',
          addressLocality: 'Johannesburg',
          addressCountry: 'ZA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 31.2391,
          longitude: 29.9598,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        areaServed: [
          { '@type': 'Country', name: 'South Africa' },
          { '@type': 'Country', name: 'Africa' },
          { '@type': 'Country', name: 'Johannesburg' },
          { '@type': 'Place', name: 'Durban' },
          { '@type': 'Place', name: 'South Africa' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description:
                  'Custom, responsive website development using modern frameworks like Next.js and React.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description:
                  'Native and cross-platform mobile application development for iOS and Android.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Chatbot Development',
                description:
                  'Intelligent chatbot solutions powered by AI for customer engagement and automation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Marketing',
                description:
                  'Comprehensive digital marketing strategies including SEO, social media, and content marketing.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Hosting & Cloud',
                description:
                  'Managed web hosting solutions with 99.9% uptime, SSL, and 24/7 monitoring.',
              },
            },
          ],
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://gsmdevops.co.za/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://gsmdevops.co.za/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About Us',
            item: 'https://gsmdevops.co.za/about',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Services',
            item: 'https://gsmdevops.co.za/services',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Clients',
            item: 'https://gsmdevops.co.za/clients',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Contact',
            item: 'https://gsmdevops.co.za/contact',
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans antialiased bg-slate-50 text-slate-900 dark:bg-dark-400 dark:text-slate-200 transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
