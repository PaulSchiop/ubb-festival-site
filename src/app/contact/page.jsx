'use client'
import { motion } from 'framer-motion';
import config from '../../data/config.json';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.info}>
            <h1 className={`gradient-text ${styles.title}`}>Contactează-ne</h1>
            <p className={styles.description}>Ai o întrebare sau vrei să fii partener? Scrie-ne pe email și echipa noastră îți va răspunde.</p>

            <div className={styles.contactDetails}>

              <div className={styles.detailItem}>
                <strong>Email:</strong>
                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
              </div>

              <div className={styles.detailItem}>
                <strong>Telefon:</strong>
                <a>Ilca Andreea - Coordonator Principal</a>
                <a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a>
              </div>

              <div className={styles.detailItem}>
                <strong>Adresă:</strong>
                <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47490e809171d439:0xbf81fdd421ec007b?sa=X&ved=1t:8290&ictx=111" target="_blank" rel="noopener noreferrer">{config.contact.address}</a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
