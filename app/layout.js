import { Inter } from 'next/font/google';
import './globals.css';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anime poster',
  description: 'Anime Posters,Anime,Anime description,Anime site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
