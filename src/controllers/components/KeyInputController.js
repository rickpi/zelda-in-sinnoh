import { useEffect } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import * as settingsActions from '../../views/actions/settings';
import * as playerActions from '../../views/actions/player';
import * as playerControllerActions from '../actions/playerController';

const KeyInputController = ({
  xPlayer,
  yPlayer,
  tiles,
  nextScreen,
}) => {
  const isOutOfBound = (xDest, yDest) => {
    const {
      top,
      // bottom,
      // left,
      right,
    } = nextScreen;

    if (yDest === -1) {
      store.dispatch(settingsActions.updateScreen(top.split('_')[1]));
    }
    if (xDest === 15) {
      store.dispatch(settingsActions.updateScreen(right.split('_')[1]));
    }
  };

  const canGoHere = (xDest, yDest) => {
    const dest = tiles.filter(({ x, y }) => x === xDest && y === yDest);

    if (dest.length === 1) {
      return dest[0].walkedOn;
    }
    return false;
  };

  const handleArrowKey = (direction, xDest, yDest) => {
    store.dispatch(playerActions.setPlayerOrientation(direction));
    isOutOfBound(xDest, yDest);
    if (canGoHere(xDest, yDest)) {
      store.dispatch(
        playerControllerActions.playerMoving(xDest, yDest),
      );
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      case 'ArrowUp':
        handleArrowKey('up', xPlayer, yPlayer - 1);
        break;
      case 'ArrowDown':
        handleArrowKey('down', xPlayer, yPlayer + 1);
        break;
      case 'ArrowLeft':
        handleArrowKey('left', xPlayer - 1, yPlayer);
        break;
      case 'ArrowRight':
        handleArrowKey('right', xPlayer + 1, yPlayer);
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
  nextScreen: {
    top: state.screenController.top,
    bottom: state.screenController.bottom,
    left: state.screenController.left,
    right: state.screenController.right,
  },
});

export default connect(mapToProps)(KeyInputController);
