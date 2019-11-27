import React from 'react';
import Dice from './Dice';
import styles from '../css/DiceContainer.module.css';
import uuid from 'uuid/v1';

const DiceContainer = ({ dices, rolling }) => {
  return (
    <div className={styles.container}>
      {
        dices.map(dice =>
          <Dice
            key={uuid()}
            number={dice.number}
            rolling={rolling}
          />)
      }
    </div>
  );
}

export default DiceContainer;