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
    currentScore: 0,
    totalScore: 0,
    rolls: 0,
    rolling: false,
  }

  drawDices() {
    this.setState({
      rolling: true,
    })

    const dices = [];
    for (let i = 0; i < this.props.dices; i++) {
      dices.push(dicesArray[Math.floor(Math.random() * dicesArray.length)])
    }

    this.countScores(dices);

    this.setState({
      dices
    })

    setTimeout(() => {
      this.setState({
        rolling: false
      })
    }, 800);
  }

  countScores(dices) {
    let currentScore = 0;
    dices.forEach(dice => {
      currentScore += dice.points
    })

    this.setState(prevState => ({
      currentScore,
      totalScore: prevState.totalScore + currentScore,
      rolls: prevState.rolls + 1,
    }))
  }

  reset() {
    this.setState({
      dices: [],
      currentScore: 0,
      totalScore: 0,
      rolls: 0,
    })
  }

  handleRollDice = () => {
    this.drawDices();
  }

  handleReset = () => {
    this.reset();
  }

  render() {
    const { dices, rolling } = this.state;

    const linkStyle = rolling ? { visibility: 'hidden' } : { visibility: 'visible' }

    return (
      <div>
        <div className={styles.wrapper}>
          <Header dicesNumber={this.props.dices} />
          <DiceContainer dices={dices} rolling={rolling} />
        </div>
        <div className={styles.wrapper}>
          <Scores {...this.state} />
        </div>
        <div className={styles.wrapper}>
          <Button
            click={this.handleRollDice}
            rolling={rolling}
          >{rolling ? 'Rolling...' : 'Roll Dice'}</Button>

          <Button
            click={this.handleReset}
            rolling={rolling}
          >Reset</Button>

          <Link style={linkStyle} className={buttonStyles.button} to='/'>Options</Link>
        </div>
      </div>
    );
  }
}

export default Game;