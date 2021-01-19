import { useEffect } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import * as playerActions from '../../views/actions/player';
import * as playerControllerActions from '../actions/playerController';

const KeyInputController = ({ xPlayer, yPlayer, tiles }) => {
  const canGoHere = (xDest, yDest) => {
    const dest = tiles.filter(({ x, y }) => x === xDest && y === yDest);

    if (dest.length === 1) return dest[0].walkedOn;
    return false;
  };

  const handleArrowUp = () => {
    store.dispatch(playerActions.setPlayerOrientation('up'));
    if (canGoHere(xPlayer, yPlayer - 1)) {
      store.dispatch(
        playerControllerActions.playerMoving(xPlayer, yPlayer - 1),
      );
    }
  };

  const handleArrowDown = () => {
    store.dispatch(playerActions.setPlayerOrientation('down'));
    if (canGoHere(xPlayer, yPlayer + 1)) {
      store.dispatch(
        playerControllerActions.playerMoving(xPlayer, yPlayer + 1),
      );
    }
  };

  const handleArrowLeft = () => {
    store.dispatch(playerActions.setPlayerOrientation('left'));
    if (canGoHere(xPlayer - 1, yPlayer)) {
      store.dispatch(
        playerControllerActions.playerMoving(xPlayer - 1, yPlayer),
      );
    }
  };

  const handleArrowRight = () => {
    store.dispatch(playerActions.setPlayerOrientation('right'));
    if (canGoHere(xPlayer + 1, yPlayer)) {
      store.dispatch(
        playerControllerActions.playerMoving(xPlayer + 1, yPlayer),
      );
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      case 'ArrowUp':
        handleArrowUp();
        break;
      case 'ArrowDown':
        handleArrowDown();
        break;
      case 'ArrowLeft':
        handleArrowLeft();
        break;
      case 'ArrowRight':
        handleArrowRight();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return null;
};

const mapToProps = (state) => ({
  xPlayer: state.playerController.x,
  yPlayer: state.playerController.y,
  tiles: state.screenController.tiles,
});

export default connect(mapToProps)(KeyInputController);
