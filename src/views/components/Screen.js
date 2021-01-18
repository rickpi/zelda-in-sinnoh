import React from 'react';
import { connect } from 'react-redux';

const Screen = ({ isLoading }) => (
  <div className="screen">
    { isLoading ? 'loading' : 'screen' }
  </div>
);

const mapToProps = (state) => ({
  isLoading: state.settings.isLoading,
});

export default connect(mapToProps)(Screen);
