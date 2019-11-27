import React from 'react';
import Game from './Game';
import styles from '../css/App.module.css';
import Options from './Options';


function App() {
  return (
    <div className={styles.container}>
      <Game />
      <Options />
    </div>
  );
}

export default App;
