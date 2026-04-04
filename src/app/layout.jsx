import { Krona_One, Lora, Kumbh_Sans } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/next"

const kronaOne = Krona_One({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const kumbhSans = Kumbh_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'UBB FESTIVAL',
  description: 'Primul și cel mai mare festival studențesc din Cluj-Napoca',
  icons: {
    icon: '/assets/logooo-site.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={`${kronaOne.variable} ${lora.variable} ${kumbhSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
