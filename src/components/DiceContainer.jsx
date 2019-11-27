import React from 'react';
import Dice from './Dice';
import styles from '../css/DiceContainer.module.css';
import uuid from 'uuid/v1';

const DiceContainer = ({ dices }) => {
  return (
    <div className={styles.container}>
      {
        dices.map(dice => <Dice key={uuid()} number={dice.number} />)
      }
    </div>
  );
}

export default DiceContainer;