import React from 'react';
import styles from '../css/Scores.module.css';

const Scores = ({ currentScore, totalScore, rolls }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Current score: {currentScore}</p>
      <p className={styles.paragraph}>Total score: {totalScore}</p>
      <p className={styles.paragraph}>Rolls: {rolls}</p>
    </div>
  );
}

export default Scores;