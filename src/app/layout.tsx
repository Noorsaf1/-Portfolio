import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import ParallaxBackground from '@/components/ParallaxBackground';

export const metadata: Metadata = {
  title: 'Min Portfolio',
  description: 'En personlig portfolio med mina projekt och erfarenheter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollProgress />
        <ParallaxBackground />
        <Navbar />
        <main className="min-h-screen pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 