'use client'
import { motion } from 'framer-motion';
import config from '../../data/config.json';
import team from '../../data/team.json';
import styles from './DespreNoi.module.css';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function DespreNoi() {
  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`gradient-text ${styles.title}`}>{config.aboutUs.title}</h1>
          <p className={styles.description}>{config.aboutUs.description}</p>
          <p className={styles.mission}><strong>Misiunea noastră:</strong> {config.aboutUs.mission}</p>
        </motion.div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={`gradient-text ${styles.subtitle}`}>UBB Festival Sports</th>
              <th className={`gradient-text ${styles.subtitle}`}>UBB Festival Kick-Off</th>
              <th className={`gradient-text ${styles.subtitle}`}>UBB Festival</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.description}>{config.aboutUs.sportsDescription}</td>
              <td className={styles.description}>{config.aboutUs.kickOffDescription}</td>
              <td className={styles.description}>{config.aboutUs.festivalDescription}</td>
            </tr>
          </tbody>
        </table>

        <motion.div
          className={styles.teamSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className={`gradient-text ${styles.subtitle}`}>Echipa Noastră</h2>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <motion.div
                key={member.id}
                className={`glass-panel ${styles.teamCard}`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
              >
                <div className={styles.imageWrapper}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      style={{ objectFit: 'cover' }}
                      className={styles.memberImage}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}></div>
                  )}
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  {member.social && (
                    <a href={member.social} target="_blank" rel="noreferrer" className={styles.socialLink}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
