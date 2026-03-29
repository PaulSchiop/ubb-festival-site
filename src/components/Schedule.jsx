'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EventCard from './EventCard';
import scheduleData from '../data/schedule.json';
import styles from './Schedule.module.css';

export default function Schedule() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="schedule" className={`section ${styles.scheduleSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`gradient-text ${styles.sectionTitle}`}>PROGRAMUL FESTIVALULUI</h2>
          <p className={styles.sectionSubtitle}>Alege ziua pentru a descoperi surprizele pe care vi le-am pregătit.</p>
        </div>
        
        <div className={styles.tabsContainer}>
          {scheduleData.map((day, idx) => (
            <button
              key={idx}
              className={`${styles.tabBtn} ${activeTab === idx ? styles.active : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <div className={styles.tabContent}>
                <span className={styles.tabDay}>{day.day}</span>
                <span className={styles.tabDate}>{day.date}</span>
              </div>
              {activeTab === idx && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeTabIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className={styles.eventsContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.eventsGrid}
            >
              {scheduleData[activeTab].events.map((event, idx) => (
                <EventCard key={idx} event={event} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
