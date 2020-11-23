import React from 'react';

import Controllers from './controllers';
import Header from './views/header';
import Menu from './views/menu';
import Board from './views/board';

import '../../assets/css/game.css';

const Game = ({ isInit }) => {
  const container = !isInit ? <Board /> : <Menu />;
  return (
    <div className="game">
      <Controllers />
      <div className="game__container">
        <Header />
        {container}
      </div>
    </div>
  );
};

export default Game;
