import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as gameActions from '../../actions';

const Tiles = () => (
  <div>
    Tiles
  </div>
);

const LoadingScreen = () => (
  <div className="loading-screen">
    Chargement ...
  </div>
);

class Board extends React.Component {
  componentDidMount() {
    setTimeout(() => store.dispatch(gameActions.stopLoading()), 2000);
  }

  render() {
    const { isLoading, board } = this.props;
    const renderedComponent = isLoading ? <LoadingScreen /> : <Tiles />;
    console.log(board);
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
