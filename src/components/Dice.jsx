import React from 'react';

const Dice = ({ number }) => {
  return (
    <div>
      <i className={`fas fa-dice-${number}`}></i>
    </div>
  );
}

export default Dice;