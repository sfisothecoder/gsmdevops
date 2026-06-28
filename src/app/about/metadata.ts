import type { Metadata } from 'next';
import { CompanyConstants } from '@constants';

export const aboutMetadata: Metadata = {
  title: 'About GSM DevOps - Our Story, Mission & Core Values | Software Development Company',
  description:
    'Discover GSM DevOps for Software Development - your trusted partner in digital transformation. Learn about our mission, vision, core values, and the team behind our innovative software solutions in Alexandria, Egypt.',
  keywords: [
    'about gsm devops',
    'gsm devops company',
    'gsm devops story',
    'software company alexandria',
    'software development team',
    'digital transformation egypt',
    'gsm devops mission',
    'gsm devops values',
    'tech company egypt',
    'software developers alexandria',
  ],
  openGraph: {
    title: 'About GSM DevOps - Our Story, Mission & Core Values',
    description:
      'Discover GSM DevOps for Software Development - your trusted partner in digital transformation. Learn about our mission, vision, and core values.',
    url: 'https://gsmdevops.com/about',
    siteName: 'GSM DevOps for Software Development',
    type: 'website',
    images: [
      {
        url: '/images/RowadLogo/gsm_logo_main.png',
        width: 1200,
        height: 630,
        alt: 'About GSM DevOps - Software Development Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About GSM DevOps - Our Story & Mission',
    description:
      'Discover GSM DevOps for Software Development - your trusted partner in digital transformation.',
    images: ['/images/RowadLogo/gsm_logo_main.png'],
  },
  alternates: {
    canonical: 'https://gsmdevops.com/about',
  },
};
