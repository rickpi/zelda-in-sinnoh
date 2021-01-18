import React from 'react';
import { connect } from 'react-redux';

// import Controllers from './controllers/components/Controllers';
import Header from './views/components/Header';
import Settings from './views/components/Settings';
import Screen from './views/components/Screen';

const Game = ({ setUp }) => {
  const container = !setUp ? <Settings /> : <Screen />;
  return (
    <div className="game">
      {/* <Controllers /> */}
      <div className="game__container">
        <Header />
        {container}
      </div>
    </div>
  );
};

const mapToProps = (state) => ({
  setUp: state.settings.setUp,
});

export default connect(mapToProps)(Game);
