import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emerce - Smart Warehouse Rental Solutions',
  description:
    'Find the perfect warehouse space for your business. Modern facilities, strategic locations, competitive rates. Premium warehouse rental solutions across India.',
  keywords:
    'warehouse rental, storage solutions, industrial space, logistics, distribution center, Mumbai, Pune, Bangalore',
  authors: [{ name: 'Emerce' }],
  openGraph: {
    title: 'Emerce - Smart Warehouse Rental Solutions',
    description:
      'Find the perfect warehouse space for your business. Modern facilities, strategic locations, competitive rates.',
    url: 'https://emerce.in',
    siteName: 'Emerce',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emerce Warehouse Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerce - Smart Warehouse Rental Solutions',
    description:
      'Find the perfect warehouse space for your business. Modern facilities, strategic locations, competitive rates.',
    images: ['/og-image.jpg'],
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
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://emerce.in" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="5000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
