'use client'
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import config from '../data/config.json';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.overlay}></div>
        <img
          src="/assets/newcoversite.jpeg"
          alt="Hero background"
          className={styles.bgImage}
        />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {config.heroTitle}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {config.heroSubtitle}
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="#schedule" className={`btn ${styles.primaryBtn}`}>
            Înscrie-te la Sports
          </Link>
          <Link href="/despre-noi" className={styles.secondaryBtn}>
            Despre Noi
          </Link>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
