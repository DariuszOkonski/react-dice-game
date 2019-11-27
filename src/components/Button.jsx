import React from 'react';
import styles from '../css/Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.click}
      className={styles.button}
      disabled={props.rolling}
    >
      {props.children}
    </button>
  );
}

export default Button;