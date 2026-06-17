import React, { useState, useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageApi() {
  const { siteConfig } = useDocusaurusContext();
  const apiUrl = siteConfig.customFields?.cloudDictionaryApiUrl as string | undefined;
  const [words, setWords] = useState();

  const getData = () => {
    if (!apiUrl) return;

    fetch(apiUrl
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setWords(result.Data);
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  useEffect(() => {
    getData()
  }, []);

  if (!words) return null;

  return (
    <section className={styles.apiSection}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardLabel}>☁️ Cloud Term of the Day</div>
          <a href={words?.LearnMoreUrl} className={styles.wordLink}>
            <h4 className={styles.word}><strong>{words?.Word}</strong></h4>
          </a>
          <p className={styles.definition}>{words?.Content}</p>
          <div className={styles.authorRow}>
            <a href={words?.Author.Link} className={styles.author}>— {words?.Author.Name}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
