import React from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen';
import Tiles from './Tiles';

const Screen = ({ isLoading, tiles }) => (
  <div className="screen">
    { isLoading ? <LoadingScreen /> : <Tiles tiles={tiles} /> }
  </div>
);

const mapToProps = (state) => ({
  isLoading: state.settings.isLoading,
  tiles: state.screen.tiles,
});

export default connect(mapToProps)(Screen);
