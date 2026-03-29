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
            <li><MapPin size={18} />
              <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47490e809171d439:0xbf81fdd421ec007b?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer">
                {config.contact.address}
              </a>
            </li>
            <li><Mail size={18} />
              <a href={`mailto:${config.contact.email}`}>
                {config.contact.email}
              </a>
            </li>
            <li><Phone size={18} />
              <a href={`tel:${config.contact.phone}`}>
                {config.contact.phone}
              </a>
            </li>
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
