import React from 'react';
import { connect } from 'react-redux';

import Controllers from './controllers/components/Controllers';
import Header from './views/components/Header';
import Settings from './views/components/Settings';
import Screen from './views/components/Screen';

const Game = ({ setUp }) => (
  <div className="game">
    {setUp ? <Controllers /> : null}
    <div className="game__container">
      <Header />
      {!setUp ? <Settings /> : <Screen />}
    </div>
  </div>
);

const mapToProps = (state) => ({
  setUp: state.settings.setUp,
});

export default connect(mapToProps)(Game);
