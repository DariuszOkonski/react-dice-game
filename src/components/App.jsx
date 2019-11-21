import React from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/App.module.css';
import Header from './Header';
import Button from './Button';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <DiceContainer />
      </div>
      <div className={styles.wrapper}>
        <Button>Roll Dice</Button>
        <Button>Reset</Button>
        <Button>Options</Button>
      </div>
    </>
  );
}

export default App;
