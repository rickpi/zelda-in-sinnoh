import React from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen';

const Screen = ({ isLoading }) => (
  <div className="screen">
    { isLoading ? <LoadingScreen /> : 'screen' }
  </div>
);

const mapToProps = (state) => ({
  isLoading: state.settings.isLoading,
});

export default connect(mapToProps)(Screen);
