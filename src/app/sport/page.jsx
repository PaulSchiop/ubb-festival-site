'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Volleyball } from 'lucide-react';
import { FootballIcon } from '../../components/icons/FootballIcon';
import { BasketballIcon } from '../../components/icons/BasketballIcon';
import { TennisIcon } from '../../components/icons/TennisIcon';
import styles from './page.module.css';

const sports = [
  {
    id: 'football',
    title: 'Fotbal',
    description: 'Înscrie-ți echipa la competiția de fotbal.',
    icon: <FootballIcon size={50} />,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdRvOruyq2GhkYZb4feexUhXbHds8iGOnnQjRKBSyEUPPD44A/viewform', // TODO: Inserati linkul catre formularul de Inregistrare la Fotbal
  },
  {
    id: 'basketball',
    title: 'Baschet',
    description: 'Formează-ți echipa de baschet 3 la 3 și hai la UBB Festival Sports.',
    icon: <BasketballIcon size={50} />,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScbyRe72D9coJ_t2OVMrVWv9nauBn3ly_7QfMRrDp7DFl1g_g/viewform', // TODO: Inserati linkul catre formularul de Inregistrare la Baschet
  },
  {
    id: 'volleyball',
    title: 'Volei',
    description: 'Participă la turneul de volei alături de echipa ta!',
    icon: <Volleyball size={50} />,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScHdxlIvck462Hg-vXkPHVldamtMqYy0HlSJvjrJHEHW5EH-Q/viewform', // TODO: Inserati linkul catre formularul de Inregistrare la Volei
  },
  {
    id: 'tennis',
    title: 'Tenis',
    description: 'Înscrie-te individual pentru campionatul de tenis.',
    icon: <TennisIcon size={50} />,
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeUBEMEHckSv_e_NOb5PcH7CDp2zmcdRN9lIxhO0cF3KwVBpg/viewform', // TODO: Inserati linkul catre formularul de Inregistrare la Tenis
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
};

export default function SportRegistration() {
  return (
    <main className={styles.container}>
      <div className={styles.bgElements}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
      </div>

      <motion.h1
        className={`${styles.title} gradient-text`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        UBB Festival Sports
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Alege sportul preferat și înscrie-te la competițiile organizate în cadrul UBB Festival!
        Fie că vii cu echipa ta sau te înscrii individual, distracția e garantată.
      </motion.p>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {sports.map((sport) => (
          <motion.div key={sport.id} variants={itemVariants} style={{ height: '100%' }}>
            <a href={sport.href} className={styles.card} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconWrapper}>
                {sport.icon}
              </div>
              <h2 className={styles.cardTitle}>{sport.title}</h2>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
