import React from 'react';
import { Link } from 'react-router-dom';
import gameStyles from '../css/Game.module.css';
import buttonStyles from '../css/Button.module.css';

const Error = () => {
  return (
    <div className={gameStyles.wrapper}>
      <h1 style={{ padding: '1rem 0' }}>Error - No such an Option</h1>
      <Link className={buttonStyles.button} to='/'>return</Link>
    </div>
  );
}

export default Error;