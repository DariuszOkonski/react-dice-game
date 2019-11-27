import React from 'react';
import Game from './Game';
import styles from '../css/App.module.css';
import Options from './Options';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from './Error';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className={styles.container}>
        <Switch>
          <Route exact path='/' component={Options} />
          <Route exact path='/game1' component={() => <Game dices={1} />} />
          <Route exact path='/game2' component={() => <Game dices={2} />} />
          <Route exact path='/game3' component={() => <Game dices={3} />} />
          <Route exact path='/game4' component={() => <Game dices={4} />} />
          <Route component={Error} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;