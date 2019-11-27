import React, { Component } from 'react';
import DiceContainer from './DiceContainer';
import styles from '../css/Game.module.css';
import buttonStyles from '../css/Button.module.css';
import Header from './Header';
import Button from './Button';
import Scores from './Scores'
import { Link } from 'react-router-dom';

const dicesArray = [
  { id: 0, number: "one", points: 1 },
  { id: 1, number: "two", points: 2 },
  { id: 2, number: "three", points: 3 },
  { id: 3, number: "four", points: 4 },
  { id: 4, number: "five", points: 5 },
  { id: 5, number: "six", points: 6 },
]
class Game extends Component {
  state = {
    dices: [],

    currentScore: 11,
    totalScore: 12,
    rolls: 13,
  }

  componentDidMount() {
    this.drawDices();
  }

  drawDices = () => {
    const dices = [];
    for (let i = 0; i < this.props.dices; i++) {
      dices.push(dicesArray[Math.floor(Math.random() * dicesArray.length)])
    }

    this.setState({
      dices
    })
  }


  render() {
    const { dices } = this.state;

    return (
      <div>
        <div className={styles.wrapper}>
          <Header />
          <DiceContainer dices={dices} />
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
}

export default Game;