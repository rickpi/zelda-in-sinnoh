import React from 'react';
import { connect } from 'react-redux';

import Tilesets from './tilesets';

const Board = ({ levels }) => (
  <div className="board">
    <Tilesets matrix={levels[0].matrix} />
  </div>
);

const mapToProps = (state) => ({
  levels: state.board.levels,
  currentLevel: state.board.currentLevel,
});

export default connect(mapToProps)(Board);
