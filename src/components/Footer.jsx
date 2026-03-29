import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import config from '../data/config.json';
import styles from './Footer.module.css';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerCol}>
          <h3 className={styles.logo}>{config.siteName}</h3>
          <p className={styles.description}>{config.heroSubtitle}</p>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Link-uri Utile</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Acasă</Link></li>
            <li><Link href="/despre-noi">Despre Noi</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.contactList}>
            <li><MapPin size={18} /> {config.contact.address}</li>
            <li><Mail size={18} /> {config.contact.email}</li>
            <li><Phone size={18} /> {config.contact.phone}</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4 className={styles.colTitle}>Urmărește-ne</h4>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/ubbfestival/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/UBBFestival" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {config.siteName}. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
