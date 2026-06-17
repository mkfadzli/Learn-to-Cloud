import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const stats = [
  { value: '100%', label: 'Free' },
  { value: '6', label: 'Phases' },
  { value: '∞', label: 'Potential' },
];

export default function HomepageHero(): JSX.Element {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('[data-animate]');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.hero} ref={heroRef}>
      <div className={styles.meshGradient} aria-hidden="true" />
      <div className={styles.decorCircle1} aria-hidden="true" />
      <div className={styles.decorCircle2} aria-hidden="true" />

      <div className={styles.container}>
        <span className={styles.badge}>Your cloud engineering journey starts here</span>

        <h1 className={styles.title} data-animate={styles.fadeInUp}>
          Learn to{' '}
          <span className={styles.gradientText}>Cloud</span>
        </h1>

        <p className={styles.subtitle} data-animate={styles.fadeInUp}>
          The most up-to-date, community-driven guide to becoming a cloud engineer.
          Six structured phases. Zero paywalls. Built by practitioners who've walked the path.
        </p>

        <div className={styles.actions} data-animate={styles.fadeInUp}>
          <Link to="/phase0" className={styles.ctaPrimary}>
            Start Your Journey <span className={styles.ctaArrow}>→</span>
          </Link>
          <a
            href="https://github.com/learntocloud/learn-to-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            View on GitHub
          </a>
        </div>

        <div className={styles.stats} data-animate={styles.fadeInUp}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
