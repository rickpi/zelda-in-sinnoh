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

  render() {
    const { player } = this.props;
    const classNames = [
      'tile__content',
      `${player.character}-${player.orientation}-${player.frame}`,
    ];

    // if (player.movingDirection !== '') classNames.push([`moving-${player.movingDirection}`]);

    return (
      <div
        className={classNames.join(' ')}
      />
    );
  }
}

const mapToProps = (state) => ({
  player: state.player,
});

export default connect(mapToProps)(Player);
