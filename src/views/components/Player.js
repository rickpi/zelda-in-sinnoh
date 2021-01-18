import React from 'react';
import { connect } from 'react-redux';

const Player = ({
  orientation,
  x,
  y,
  character,
  frame,
}) => {
  const position = {
    top: `${y * 40 - 24}px`,
    left: `${x * 40 - 12}px`,
  };

  return (
    <div
      className={`character ${character}-${orientation}-${frame}`}
      style={position}
    />
  );
};

const mapToProps = (state, { frame }) => ({
  orientation: state.player.orientation,
  x: state.player.x,
  y: state.player.y,
  character: state.player.character,
  // actions: state.player.actions,
  frame,
});

export default connect(mapToProps)(Player);
