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
          <Route exact path='/1' component={Game} />
          <Route exact path='/2' component={Game} />
          <Route exact path='/3' component={Game} />
          <Route exact path='/4' component={Game} />
          <Route component={Error} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;