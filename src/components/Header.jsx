'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import config from '../data/config.json';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/logooo-site.png" alt={config.siteName} width={150} height={45} className={styles.logoImg} />
        </Link>
        <div className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
          <Link href="/" onClick={() => setMobileOpen(false)}>Acasă</Link>
          <Link href="/despre-noi" onClick={() => setMobileOpen(false)}>Despre Noi</Link>
          <Link href="/sport" onClick={() => setMobileOpen(false)}>Sport</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
        <button className={styles.menuBtn} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
