import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: '💵',
    title: 'Free & Open Source',
    description: 'No paywalls. Community-driven and always free.',
  },
  {
    icon: '📝',
    title: 'Hands-on Learning',
    description: 'Practical tasks and real-world projects for your portfolio.',
  },
  {
    icon: '👷🏽‍♀️',
    title: 'Built from Experience',
    description: 'Created by cloud professionals who\'ve walked the path.',
  },
  {
    icon: '🚀',
    title: 'Structured Path',
    description: 'Clear roadmap from fundamentals to advanced topics.',
  },
  {
    icon: '🌐',
    title: 'Cloud Agnostic',
    description: 'Learn concepts that apply across AWS, Azure, and GCP.',
  },
  {
    icon: '🤝',
    title: 'Community Support',
    description: 'Join thousands of learners in our Discussions.',
  },
];

function FeatureCard({ icon, title, description }: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.featuresHeader}>
          <span className={styles.sectionLabel}>02 — Why</span>
          <h2 className={styles.featuresTitle}>Why Learn to Cloud?</h2>
          <p className={styles.featuresSubtitle}>
            Everything you need to start your cloud career, completely free.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
