import '../globals.css';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GoogleAnalytics from '@/app/components/GoogleAnalytics';
import React from 'react';

export const metadata: Metadata = {
  title: 'Great Idea Media',
  description: 'News and Sports. Nothing added.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      <html lang='en'>
        <body className='bg-gradient-to-tl from-gray-100 to-gray-300'>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
