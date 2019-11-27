import React from 'react';
import Button from './Button';
import styles from '../css/Game.module.css';

const Options = () => {
  return (
    <div className={styles.wrapper}>
      <Button>1 Dice Game</Button>
      <Button>2 Dices Game</Button>
      <Button>3 Dices Game</Button>
      <Button>4 Dices Game</Button>
    </div>
  );
}

export default Options;