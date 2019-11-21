import React from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/App.module.css';
import Header from './Header';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <DiceContainer />
      </div>
      <div className={styles.wrapper}>
        <button>Hello</button>
      </div>
    </>
  );
}

export default App;
