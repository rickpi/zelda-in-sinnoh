import React from 'react';
import { connect } from 'react-redux';

import '../../../assets/css/tiplouf.css';
import '../../../assets/css/prinplouf.css';
import '../../../assets/css/pingoleon.css';
import '../../../assets/css/ouisticram.css';
import '../../../assets/css/chimpenfeu.css';
import '../../../assets/css/simiabraz.css';
import '../../../assets/css/tortipouss.css';
import '../../../assets/css/boskara.css';
import '../../../assets/css/torterra.css';

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
    this.interval = null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.interval = setInterval(() => store.dispatch(actions.nextFrame()), 250);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleMoving(posX, posY, movingAction) {
    store.dispatch(actions.moving());
    store.dispatch(movingAction());

    setTimeout(() => {
      store.dispatch(tilesActions.removeMainCharacter());
      store.dispatch(actions.removeMovingDirection());
      store.dispatch(tilesActions.addMainCharacter(posX, posY));
      store.dispatch(actions.moving());
    }, 500);
  }

  handleArrowUp() {
    const { character } = this.props;

    if (!character.isMoving) {
      this.handleMoving(character.posX, character.posY - 1, actions.moveUp);
    }
  }

  handleArrowDown() {
    const { character } = this.props;

    if (!character.isMoving) {
      this.handleMoving(character.posX, character.posY + 1, actions.moveDown);
    }
  }

  handleArrowLeft() {
    const { character } = this.props;

    if (!character.isMoving) {
      this.handleMoving(character.posX - 1, character.posY, actions.moveLeft);
    }
  }

  handleArrowRight() {
    const { character } = this.props;

    if (!character.isMoving) {
      this.handleMoving(character.posX + 1, character.posY, actions.moveRight);
    }
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

  render() {
    const { character } = this.props;
    const classNames = [
      'tile__content',
      `${character.name}-${character.orientation}-${character.frame}`,
    ];

    if (character.name === '') store.dispatch(actions.changeName('torterra'));

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
});

export default connect(mapToProps)(MainCharacter);
