import React from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/Game.module.css';
import Header from './Header';
import Button from './Button';
import Scores from './Scores';

const Game = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <DiceContainer />
      </div>
      <div className={styles.wrapper}>
        <Scores />
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