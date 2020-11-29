import React from 'react';
import { connect } from 'react-redux';

import Controllers from './controllers';
import Header from './views/header';
import Menu from './views/menu';
import Board from './views/board';

const Game = ({ isInit }) => {
  const container = !isInit ? <Menu /> : <Board />;
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

const mapToProps = (state) => ({
  isInit: state.game.isInit,
});

export default connect(mapToProps)(Game);
