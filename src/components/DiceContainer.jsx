import React from 'react';
import Dice from './Dice';

const DiceContainer = () => {
  return (
    <div>
      <Dice number="one" />
      <Dice number="two" />
    </div>
  );
}

export default DiceContainer;