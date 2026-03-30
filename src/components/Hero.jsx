'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import config from '../data/config.json';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.bgWrapper}>
        <div className={styles.overlay}></div>
        <motion.img 
          src="/assets/newcoversite.jpeg" 
          alt="Hero background" 
          className={styles.bgImage} 
          style={{ y, scale: 1.05 }}
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
            Vezi Programul
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
