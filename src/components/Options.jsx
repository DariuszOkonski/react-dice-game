import React from 'react';
import styles from '../css/Game.module.css';
import buttonStyles from '../css/Button.module.css';
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={buttonStyles.button} to='/game1'>1 Dice Game</Link>
      <Link className={buttonStyles.button} to='/game2'>2 Dices Game</Link>
      <Link className={buttonStyles.button} to='/game3'>3 Dices Game</Link>
      <Link className={buttonStyles.button} to='/game4'>4 Dices Game</Link>
    </div>
  );
}

export default Options;