import React from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/Game.module.css';
import Header from './Header';
import Button from './Button';

const Game = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <DiceContainer />
      </div>
      <div className={styles.wrapper}>
        <p>Scores</p>
      </div>
      <div className={styles.wrapper}>
        <Button>Roll Dice</Button>
        <Button>Reset</Button>
        <Button>Options</Button>
      </div>
    </div>
  );
}

export default Game;