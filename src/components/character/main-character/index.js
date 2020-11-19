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

class MainCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    setInterval(() => store.dispatch(actions.nextFrame()), 250);
  }

  handleKeyDown(event) {
    const { key } = event;

    switch (key) {
      case 'ArrowUp':
        store.dispatch(actions.moveUp());
        break;
      case 'ArrowDown':
        store.dispatch(actions.moveDown());
        break;
      case 'ArrowLeft':
        store.dispatch(actions.moveLeft());
        break;
      case 'ArrowRight':
        store.dispatch(actions.moveRight());
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

    if (character.name === '') store.dispatch(actions.changeName('simiabraz'));

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
