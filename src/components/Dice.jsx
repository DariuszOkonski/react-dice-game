import React from 'react';
import styles from '../css/Dice.module.css';

const Dice = ({ number }) => {
  return (
    <div className={styles.dice}>
      <i className={`fas fa-dice-${number}`}></i>
    </div>
  );
}

export default Dice;