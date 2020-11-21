import React from 'react';
import { connect } from 'react-redux';

import '../../../assets/css/main/tiplouf.css';
import '../../../assets/css/main/prinplouf.css';
import '../../../assets/css/main/pingoleon.css';
import '../../../assets/css/main/ouisticram.css';
import '../../../assets/css/main/chimpenfeu.css';
import '../../../assets/css/main/simiabraz.css';
import '../../../assets/css/main/tortipouss.css';
import '../../../assets/css/main/boskara.css';
import '../../../assets/css/main/torterra.css';

import store from '../../../store';
import * as actions from './actions';
import * as tilesActions from '../../game/board/tiles/actions';

class MainCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMoving = this.handleMoving.bind(this);
    this.handleArrowUp = this.handleArrowUp.bind(this);
    this.handleArrowDown = this.handleArrowDown.bind(this);
    this.handleArrowLeft = this.handleArrowLeft.bind(this);
    this.handleArrowRight = this.handleArrowRight.bind(this);
    this.canGoHere = this.canGoHere.bind(this);
    this.interval = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.interval = setInterval(() => store.dispatch(actions.nextFrame()), 150);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleKeyDown(event) {
    const { key } = event;

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

  handleMoving(posX, posY, movingAction) {
    store.dispatch(actions.moving());
    store.dispatch(movingAction());

    setTimeout(() => {
      store.dispatch(tilesActions.removeMainCharacter());
      store.dispatch(actions.removeMovingDirection());
      store.dispatch(tilesActions.addMainCharacter(posX, posY));
      store.dispatch(actions.moving());
    }, 200);
  }

  handleArrowUp() {
    const { character } = this.props;

    if (this.canGoHere(character.posX, character.posY - 1)) {
      if (!character.isMoving) {
        this.handleMoving(character.posX, character.posY - 1, actions.moveUp);
      }
    }
  }

  handleArrowDown() {
    const { character } = this.props;

    if (this.canGoHere(character.posX, character.posY + 1)) {
      if (!character.isMoving) {
        this.handleMoving(character.posX, character.posY + 1, actions.moveDown);
      }
    }
  }

  handleArrowLeft() {
    const { character } = this.props;

    if (this.canGoHere(character.posX - 1, character.posY)) {
      if (!character.isMoving) {
        this.handleMoving(character.posX - 1, character.posY, actions.moveLeft);
      }
    }
  }

  handleArrowRight() {
    const { character } = this.props;

    if (this.canGoHere(character.posX + 1, character.posY)) {
      if (!character.isMoving) {
        this.handleMoving(character.posX + 1, character.posY, actions.moveRight);
      }
    }
  }

  canGoHere(posX, posY) {
    const { tiles } = this.props;
    return tiles[posY * 15 + posX].walkedOn;
  }

  render() {
    const { character } = this.props;
    const classNames = [
      'tile__content',
      `${character.name}-${character.orientation}-${character.frame}`,
    ];

    if (character.name === '') store.dispatch(actions.changeName('pingoleon'));

    if (character.movingDirection !== '') classNames.push([`moving-${character.movingDirection}`]);

    return (
      <div
        className={classNames.join(' ')}
      />
    );
  }
}

const mapToProps = (state) => ({
  character: state.mainCharacter,
  tiles: state.tiles,
});

export default connect(mapToProps)(MainCharacter);
