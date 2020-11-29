import React from 'react';
import { connect } from 'react-redux';

import store from '../../../../store';
import * as actions from './actions';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => store.dispatch(actions.nextPlayerFrame()), 150);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { player, playerController } = this.props;
    const classNames = [
      'tile__content',
      `${player.character}-${player.orientation}-${player.frame}`,
    ];

    if (playerController.isMoving) classNames.push([`moving-${player.orientation}`]);

    return (
      <div
        className={classNames.join(' ')}
      />
    );
  }
}

const mapToProps = (state) => ({
  player: state.player,
  playerController: state.playerController,
});

export default connect(mapToProps)(Player);
