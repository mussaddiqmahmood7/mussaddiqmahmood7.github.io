import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['500', '600'], display: 'swap' });
const serif = Instrument_Serif({ subsets: ['latin'], variable: '--font-serif', weight: '400', style: ['normal', 'italic'], display: 'swap' });

const title = 'Mussaddiq Mahmood · Full-stack developer';
const description =
  'I turn manual business work into simple web apps: dashboards, booking and ordering systems, customer portals and AI features. React, Next.js, Node.js.';

export const metadata: Metadata = {
  metadataBase: new URL('https://mussaddiqmahmood7.github.io'),
  title,
  description,
  openGraph: { title, description, url: '/', siteName: 'Mussaddiq Mahmood', images: [{ url: '/og.jpg', width: 1200, height: 630 }], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
};

export const viewport: Viewport = { themeColor: '#e7f1ee' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
