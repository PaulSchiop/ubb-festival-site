import Link from 'next/link';
import styles from './Sponsor.module.css';

export default function Sponsor() {
  return (
    <section className={styles.sponsorSection}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h3 className={styles.title}>Un proiect marca:</h3>
        <Link href="https://osubb.ro" target="_blank" rel="noreferrer" className={styles.logoLink}>
          <img
            src="/assets/yeyeyeyeyye.png"
            alt="OSUBB"
            className={styles.logo}
          />
        </Link>
      </div>
    </section>
  );
}
