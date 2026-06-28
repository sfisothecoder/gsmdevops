import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const clientsMetadata: Metadata = {
  title: 'Our Clients & Success Stories - Trusted by Industry Leaders | Rowad',
  description:
    'See the businesses and industry leaders that trust Rowad for Software Development. Discover how our web development, mobile apps, and digital solutions have driven success for clients across Egypt and the Middle East.',
  keywords: [
    'GSM DevOps clients',
    'GSM DevOps success stories',
    'GSM DevOps portfolio',
    'GSM DevOps case studies',
    'trusted software company',
    'software development testimonials',
    'client success Johannesburg',
    'digital transformation success',
    'best software company Johannesburg',
    'GSM DevOps partners',
  ],
  openGraph: {
    title: 'Our Clients & Success Stories - Trusted by Industry Leaders',
    description:
      'See the businesses and industry leaders that trust GSM DevOps for Software Development for web development, mobile apps, and digital solutions.',
    url: 'https://rowad.com/clients',
    siteName: 'GSM DevOps for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/gsm_logo_main.png',
        width: 1200,
        height: 630,
        alt: 'GSM DevOps Clients and Success Stories',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients & Success Stories | GSM DevOps',
    description: 'Discover the industry leaders that trust GSM DevOps for their digital transformation.',
    images: ['/images/RowadLogo/gsm_logo_main.png'],
  },
  alternates: {
    canonical: 'https://rowad.com/clients',
  },
};
