'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageCarousel.module.css';

// Make sure to add these images to public/assets/
const images = [
  '/assets/Poze-basket_01-890x664.jpg',
  '/assets/Poze-volei_10-890x664.jpg',
  '/assets/MG_1352-Enhanced-NR-scaled.jpg'
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className={`section ${styles.carouselSection}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>THE UBB FESTIVAL EXPERIENCE</h2>
        <div className={styles.carouselContainer}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.imageWrapper}>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                className={styles.carouselImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                alt={`Imagine editie anterioara ${currentIndex + 1}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:gray;">Adaugă imaginea în folderul assets!</div>';
                }}
              />
            </AnimatePresence>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>

          <div className={styles.indicators}>
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.indicator} ${idx === currentIndex ? styles.active : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
