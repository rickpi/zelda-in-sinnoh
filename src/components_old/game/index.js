import React from 'react';

import Header from './header';
import Board from './board';

import '../../assets/css/game.css';

const Game = () => (
  <div className="game">
    <div className="game__container">
      <Header />
      <Board />
    </div>
  </div>
);

export default Game;
