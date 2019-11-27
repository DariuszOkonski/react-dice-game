import React from 'react';
import styles from '../css/Dice.module.css';

const Dice = ({ number, rolling }) => {
  return (
    <div className={styles.dice}>
      <i className={`${rolling && styles.shaking} fas fa-dice-${number}`}></i>
    </div>
  );
}

export default Dice;