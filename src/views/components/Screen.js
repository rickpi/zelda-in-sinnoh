import React from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen';
import Tiles from './Tiles';

const Screen = ({ isLoading }) => (
  <div className="screen">
    { isLoading ? <LoadingScreen /> : <Tiles /> }
  </div>
);

const mapToProps = (state) => ({
  isLoading: state.settings.isLoading,
});

export default connect(mapToProps)(Screen);
