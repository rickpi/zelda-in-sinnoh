import React from 'react';
import { connect } from 'react-redux';

import TileContent from '../tile-content';

const Tile = ({ base, content }) => (
  <div className={`tile ${base}`}>
    <TileContent content={content} />
  </div>
);

const mapToProps = (state, ownProps) => ({
  base: state.tiles[ownProps.index].base,
  content: state.tiles[ownProps.index].content,
});

export default connect(mapToProps)(Tile);
