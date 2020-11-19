import React from 'react';
import { connect } from 'react-redux';

import Tileset from './tileset';

const Board = ({ levels }) => (
  <div className="board">
    <Tileset matrix={levels[0].matrix} />
  </div>
);

const mapToProps = (state) => ({
  levels: state.board.levels,
  currentLevel: state.board.currentLevel,
});

export default connect(mapToProps)(Board);
