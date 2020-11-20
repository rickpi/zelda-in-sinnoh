import React from 'react';
import { connect } from 'react-redux';

import Tiles from './tiles';

import store from '../../../store';
import * as tilesActions from './tiles/actions';

class Board extends React.Component {
  componentDidMount() {
    const { mainPosX, mainPosY } = this.props;
    store.dispatch(tilesActions.addMainCharacter(mainPosX, mainPosY));
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
  tab: state.board.levels[state.board.currentLevel].tabs[state.board.currentTab],
  mainPosX: state.mainCharacter.posX,
  mainPosY: state.mainCharacter.posY,
});

export default connect(mapToProps)(Board);
