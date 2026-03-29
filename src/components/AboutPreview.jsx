'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import config from '../data/config.json';
import styles from './AboutPreview.module.css';

export default function AboutPreview() {
  return (
    <section className={`section ${styles.aboutPreview}`}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`gradient-text ${styles.title}`}>{config.aboutUs.title}</h2>
          <p className={styles.description}>
            {config.aboutUs.description.substring(0, 250)}...
          </p>
          <Link href="/despre-noi" className="btn">
            AFLĂ MAI MULTE
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
