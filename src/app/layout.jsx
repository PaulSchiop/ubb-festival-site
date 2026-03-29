import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'UBB FESTIVAL',
  description: 'Primul și cel mai mare festival studențesc din Cluj-Napoca',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
