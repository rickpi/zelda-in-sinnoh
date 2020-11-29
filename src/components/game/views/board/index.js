import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as tilesActions from './tiles/actions';
// import * as gameActions from '../../actions';
import * as playerActions from '../player/actions';

import LoadingScreen from './loading-screen';
import Tiles from './tiles';

class Board extends React.Component {
  componentDidMount() {
    const { playerController, board } = this.props;
    const { pos, character, evolutionStep } = playerController;
    store.dispatch(tilesActions.loadTiles(board));
    store.dispatch(playerActions.setPlayerCharacterView(character, evolutionStep));
    store.dispatch(tilesActions.addCharacter('player', pos.x, pos.y));
    // setTimeout(() => store.dispatch(gameActions.stopLoading()), 2000);
  }

  render() {
    const { isLoading } = this.props;
    const renderedComponent = isLoading ? <LoadingScreen /> : <Tiles />;

    return (
      <div className="board">
        { renderedComponent }
      </div>
    );
  }
}

const mapToProps = (state) => ({
  isLoading: state.game.isLoading,
  board: state.board.boards[state.board.currentBoard],
  playerController: state.playerController,
});

export default connect(mapToProps)(Board);
