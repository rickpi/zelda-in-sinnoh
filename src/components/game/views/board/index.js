import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as gameActions from '../../actions';

import LoadingScreen from './loading-screen';
import Tiles from './tiles';

class Board extends React.Component {
  componentDidMount() {
    setTimeout(() => store.dispatch(gameActions.stopLoading()), 2000);
  }

  render() {
    const { isLoading, board } = this.props;
    const renderedComponent = isLoading ? <LoadingScreen /> : <Tiles tiles={board.tiles} />;

    return (
      <div className="board">
        { renderedComponent }
      </div>
    );
  }
}

const mapToProps = (state) => ({
  isLoading: state.game.isLoading,
  board: state.board.boards[state.board.board],
});

export default connect(mapToProps)(Board);
