'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import config from '../../data/config.json';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.info}>
            <h1 className={`gradient-text ${styles.title}`}>Contactează-ne</h1>
            <p className={styles.description}>Ai o întrebare sau vrei să fii partener? Trimite-ne un mesaj și echipa noastră îți va răspunde în cel mai scurt timp.</p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <strong>Email:</strong>
                <a href={`mailto:${config.contact.email}`}>{config.contact.email}</a>
              </div>
              <div className={styles.detailItem}>
                <strong>Telefon:</strong>
                Ilca Andreea - Coordonator Principal:
                <br></br>
                <a href={`tel:${config.contact.phone}`}>{config.contact.phone}</a>
              </div>
              <div className={styles.detailItem}>
                <strong>Adresă:</strong> {config.contact.address}
              </div>
            </div>
          </div>

          <div className={`glass-panel ${styles.formWrapper}`}>
            {submitted ? (
              <div className={styles.successMessage}>
                <h3>Mesaj trimis!</h3>
                <p>Îți mulțumim pentru mesaj. Vom reveni cu un răspuns în curând.</p>
                <button className="btn" onClick={() => setSubmitted(false)}>Trimite alt mesaj</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nume</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn">Trimite Mesajul</button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
