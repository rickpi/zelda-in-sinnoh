import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as playerControllerActions from './actions';
import * as playerActions from '../../views/player/actions';
import * as tilesActions from '../../views/board/tiles/actions';

class PlayerController extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleArrowUp = this.handleArrowUp.bind(this);
    this.handleArrowDown = this.handleArrowDown.bind(this);
    this.handleArrowLeft = this.handleArrowLeft.bind(this);
    this.handleArrowRigh = this.handleArrowRight.bind(this);
    this.playerMoving = this.playerMoving.bind(this);
    this.canGoHere = this.canGoHere.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    const { key } = event;
    const { playerController } = this.props;

    if (!playerController.isMoving) {
      switch (key) {
        case 'ArrowUp':
          this.handleArrowUp();
          break;
        case 'ArrowDown':
          this.handleArrowDown();
          break;
        case 'ArrowLeft':
          this.handleArrowLeft();
          break;
        case 'ArrowRight':
          this.handleArrowRight();
          break;
        default:
          break;
      }
    }
  }

  handleArrowUp() {
    const { playerController } = this.props;
    const { pos } = playerController;

    store.dispatch(playerActions.lookUp());
    this.playerMoving(pos.x, pos.y - 1);
  }

  handleArrowDown() {
    const { playerController } = this.props;
    const { pos } = playerController;

    store.dispatch(playerActions.lookDown());
    this.playerMoving(pos.x, pos.y + 1);
  }

  handleArrowLeft() {
    const { playerController } = this.props;
    const { pos } = playerController;

    store.dispatch(playerActions.lookLeft());
    this.playerMoving(pos.x - 1, pos.y);
  }

  handleArrowRight() {
    const { playerController } = this.props;
    const { pos } = playerController;

    store.dispatch(playerActions.lookRight());
    this.playerMoving(pos.x + 1, pos.y);
  }

  playerMoving(newX, newY) {
    const { playerController } = this.props;
    const { pos } = playerController;

    if (this.canGoHere(newX, newY)) {
      store.dispatch(playerControllerActions.startPlayerMoving());
      store.dispatch(playerControllerActions.setPlayerPos(newX, newY));
      setTimeout(() => {
        store.dispatch(tilesActions.removeCharacter('player', pos.x, pos.y));
        store.dispatch(tilesActions.addCharacter('player', newX, newY));
        store.dispatch(playerControllerActions.stopPlayerMoving());
      }, 200);
    }
  }

  canGoHere(x, y) {
    const { tiles } = this.props;

    return tiles[y * 15 + x].walkedOn;
  }

  render() {
    return null;
  }
}

const mapToProps = (state) => ({
  playerController: state.playerController,
  player: state.player,
  tiles: state.tiles.tiles,
});

export default connect(mapToProps)(PlayerController);
