import React from 'react';
import { connect } from 'react-redux';

import Tiles from './tiles';

import store from '../../../store';
import * as tilesActions from './tiles/actions';

class Board extends React.Component {
  componentDidMount() {
    const {
      mainPosX,
      mainPosY,
      crehelfPosX,
      crehelfPosY,
    } = this.props;
    store.dispatch(tilesActions.addMainCharacter(mainPosX, mainPosY));
    store.dispatch(tilesActions.addNPC(crehelfPosX, crehelfPosY, 'crehelf'));
  }

  render() {
    const { tab } = this.props;

    return (
      <div className="board">
        <Tiles tiles={tab.tiles} />
      </div>
    );
  }
}

const mapToProps = (state) => ({
  tab: state.board
    .levels[state.board.currentLevel]
    .tabs[state.board.currentTab],
  mainPosX: state.mainCharacter.posX,
  mainPosY: state.mainCharacter.posY,
  crehelfPosX: state.crehelf.posX,
  crehelfPosY: state.crehelf.posY,
});

export default connect(mapToProps)(Board);
