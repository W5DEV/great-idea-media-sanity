import './globals.css';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-gradient-to-tl from-gray-100 to-gray-300'>
      <body>{children}</body>
    </html>
  );
}
