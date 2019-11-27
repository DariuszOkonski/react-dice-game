import React from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/Game.module.css';
import buttonStyles from '../css/Button.module.css';
import Header from './Header';
import Button from './Button';
import Scores from './Scores'
import { Link } from 'react-router-dom';

const Game = (props) => {
  console.log(props);

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
        <Link className={buttonStyles.button} to='/'>Options</Link>
      </div>
    </div>
  );
}

export default Game;