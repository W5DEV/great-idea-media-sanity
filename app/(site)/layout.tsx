import '../globals.css';
import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Great Idea Media',
  description: 'News and Sports. Nothing added.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_MEASUREMENT_ID='G-V1NEBK43ZT' />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
