import React from 'react';
import styles from '../css/Scores.module.css';

const Scores = () => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Current score: 1</p>
      <p className={styles.paragraph}>Total score: 2</p>
      <p className={styles.paragraph}>Rolls: 3</p>
    </div>
  );
}

export default Scores;