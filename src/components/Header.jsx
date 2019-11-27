import React from 'react';
import styles from '../css/Header.module.css';

const Header = ({ dicesNumber }) => {
  return (
    <h1 className={styles.header}
    >{dicesNumber === 1 ? `1 dice game` : `${dicesNumber} dices game`} </h1>
  );
}

export default Header;