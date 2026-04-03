'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

// Make sure to add these images to public/assets/
const images = [
  '/assets/1.jpg',
  '/assets/2.jpg',
  '/assets/3.jpg',
  '/assets/4.jpg',
  '/assets/5.jpg',
  '/assets/6.jpg',
  '/assets/7.jpg',
  '/assets/8.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{ 
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 1.05,
                  zIndex: currentIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              >
                <Image
                  src={src}
                  alt={`Imagine editie anterioara ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority={index === 0}
                />
              </motion.div>
            ))}
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
