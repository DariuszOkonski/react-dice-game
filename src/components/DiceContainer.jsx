import React from 'react';
import Dice from './Dice';
import styles from '../css/DiceContainer.module.css';

const DiceContainer = () => {
  return (
    <div className={styles.container}>
      <Dice number="one" />
      <Dice number="two" />
      <Dice number="three" />
      <Dice number="four" />
    </div>
  );
}

export default DiceContainer;