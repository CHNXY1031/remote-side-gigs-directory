import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://remote-side-gigs-directory.vercel.app'),
  title: {
    default: 'Remote Side Gigs — Global Freelance & Side Hustle Directory',
    template: '%s | Remote Side Gigs',
  },
  description: 'Discover verified remote side gigs, freelance platforms, paid research, testing, tutoring and AI training work worldwide.',
  keywords: ['remote side gigs', 'freelance platforms', 'work from home', 'online side hustles', 'remote jobs'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Remote Side Gigs',
    title: 'Remote Side Gigs — Earn from anywhere',
    description: 'Compare 132 trusted platforms for remote work, freelance projects and flexible side income.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Remote Side Gigs — 120+ trusted platforms to earn from anywhere' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remote Side Gigs — Earn from anywhere',
    description: 'Compare 132 trusted platforms for remote work, freelance projects and flexible side income.',
    images: ['/og.png'],
  },
  verification: { google: 'google4bf79fc737f0ba77' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
