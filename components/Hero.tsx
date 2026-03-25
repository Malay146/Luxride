"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Michroma, Inter } from 'next/font/google';
import { motion } from 'motion/react';
import styles from './Hero.module.css';

const michroma = Michroma({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Hero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).preloaderFinished) {
      setIsReady(true);
    } else {
      const handleLoad = () => setIsReady(true);
      window.addEventListener('preloaderFinished', handleLoad);
      return () => window.removeEventListener('preloaderFinished', handleLoad);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }, 
    },
  } as any;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  } as any;

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  } as any;

  return (
    <section className={`${styles.heroSection} ${inter.className}`}>
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={isReady ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }} 
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=1470&auto=format&fit=crop"
          alt="Luxury car skyline sunset"
          fill
          className={styles.backgroundImage}
          style={{ objectFit: 'cover' }}
          priority
        />
      </motion.div>
      <div className={styles.backgroundOverlay} />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className={styles.header}
      >
        <div className={styles.logo}>Luxride</div>
        
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Fleet</a>
          <a href="#">Services</a>
          <a href="#">About</a>
        </nav>

        <button className={styles.bookNow}>
          Book Now
          <div className={styles.iconCircle}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </motion.header>

      {/* Social Sidebar (Left) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        className={styles.socialSidebar}
      >
        {/* Github */}
        <motion.a variants={fadeRight} href="#" className={styles.socialIcon}>
          <svg viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        </motion.a>
        {/* WhatsApp */}
        <motion.a variants={fadeRight} href="#" className={styles.socialIcon}>
          <svg viewBox="0 0 24 24">
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </motion.a>
        {/* Instagram */}
        <motion.a variants={fadeRight} href="#" className={styles.socialIcon}>
          <svg viewBox="0 0 24 24">
             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </motion.a>
        {/* Facebook */}
        <motion.a variants={fadeRight} href="#" className={styles.socialIcon}>
          <svg viewBox="0 0 24 24">
             <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
          </svg>
        </motion.a>
        {/* LinkedIn */}
        <motion.a variants={fadeRight} href="#" className={styles.socialIcon}>
          <svg viewBox="0 0 24 24">
             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      </motion.div>

      {/* Right Stats */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={isReady ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
        className={styles.statsRight}
      >
        <div className={styles.statsNumber}>
          <span className={styles.statsValue}>50+</span>
          <span className={styles.statsText}>luxury cars</span>
        </div>
        <div className={styles.statsSubText}>
          Available in major cities
        </div>
      </motion.div>

      {/* Main Content (Title and Description) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className={styles.mainContent}
      >
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title} ${michroma.className}`}>
            Drive the World&apos;s<br/>Finest Luxury Cars
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            Experience the raw power and surgical handling of the world&apos;s
            most iconic supercars, meticulously maintained and ready to
            transform a simple journey into an adrenaline-fueled masterclass
            in performance.
          </p>
        </div>
      </motion.div>

      {/* Bottom Bar Info */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isReady ? "visible" : "hidden"}
        className={styles.bottomBar}
      >
        {[
          { label: "Rental Period", value: "Mar 19, 9:30 AM — Mar 22, 6 PM" },
          { label: "Pick-Up Location", value: "Downtown Service Center" },
          { label: "Drop-Off Location", value: "City Airport Terminal" },
          { label: "Vehicle Class", value: "Mid-Size SUV" },
          { label: "Add-Ons", value: "Collision Cover - GPS" },
          { label: "Estimated Total", value: "$347.80" }
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp} className={styles.bottomItem}>
            <div className={styles.itemHeader}>
              {item.label}
              <div className={styles.checkIconContainer}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
            </div>
            <div className={styles.itemValue}>{item.value}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
