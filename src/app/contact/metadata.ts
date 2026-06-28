import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const contactMetadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation | GSM DevOps Software Development',
  description:
    'Get in touch with GSM DevOps for Software Development. Request a free consultation for your web development, mobile app, AI chatbot, digital marketing, or web hosting project. Located in Alexandria, Egypt - serving clients worldwide.',
  keywords: [
    'contact gsmdevops',
    'gsmdevops consultation',
    'software development quote',
    'web development quote',
    'contact software company',
    'gsmdevops alexandria',
    'software company contact',
    'get website quote',
    'mobile app development quote',
    'web hosting inquiry',
    'digital marketing consultation',
  ],
  openGraph: {
    title: 'Contact Us - Get a Free Consultation',
    description:
      'Get in touch with GSM DevOps for Software Development. Request a free consultation for your next digital project.',
    url: 'https://gsmdevops.com/contact',
    siteName: 'GSM DevOps for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/gsm_logo_main.png',
        width: 1200,
        height: 630,
        alt: 'Contact GSM DevOps for Software Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact GSM DevOps - Get a Free Consultation',
    description:
      'Get in touch with GSM DevOps for your next web development, mobile app, or digital project.',
    images: ['/images/RowadLogo/gsm_logo_main.png'],
  },
  alternates: {
    canonical: 'https://gsmdevops.com/contact',
  },
};
