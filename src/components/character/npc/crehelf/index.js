import React from 'react';
import { connect } from 'react-redux';

import '../../../../assets/css/npc/crehelf.css';

import store from '../../../../store';
import * as actions from './actions';
// import * as tilesActions from '../../../game/board/tiles/actions';

class Crehelf extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => store.dispatch(actions.nextFrameNPC()), 150);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { character } = this.props;
    const classNames = [
      'tile__content',
      `${character.name}-${character.orientation}-${character.frame}`,
    ];

    return (
      <div
        className={classNames.join(' ')}
      />
    );
  }
}

const mapToProps = (state) => ({
  character: state.crehelf,
});

export default connect(mapToProps)(Crehelf);
