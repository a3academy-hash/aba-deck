import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deck.academyball.com'),
  title: {
    default: 'ABA — Built for the Next Era of Amateur Baseball',
    template: '%s · ABA',
  },
  description:
    'The Academy Baseball Association is a modern competitive, media, and technology infrastructure for elite baseball academies and private school programs.',
  openGraph: {
    title: 'ABA — Built for the Next Era of Amateur Baseball',
    description:
      'A modern competitive, media, and technology infrastructure for elite baseball academies and private school programs.',
    url: 'https://deck.academyball.com',
    siteName: 'Academy Baseball Association',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white text-navy">{children}</body>
    </html>
  );
}
