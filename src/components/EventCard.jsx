'use client'
import { motion } from 'framer-motion';
import { Clock, MapPin, Building } from 'lucide-react';
import styles from './EventCard.module.css';

export default function EventCard({ event, index }) {
  return (
    <motion.div
      className={`glass-panel ${styles.card}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
    >
      <div className={styles.timeWrapper}>
        <Clock size={16} className={styles.timeIcon} />
        <span className={styles.time}>{event.time}</span>
      </div>
      <h3 className={styles.title}>{event.title}</h3>
      
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <MapPin size={16} className={styles.icon} />
          <span>{event.location}</span>
        </div>
        <div className={styles.detailItem}>
          <Building size={16} className={styles.icon} />
          <span>{event.organizer}</span>
        </div>
      </div>
      <div className={styles.glowEffect}></div>
    </motion.div>
  );
}
