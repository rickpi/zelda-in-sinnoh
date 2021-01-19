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
  const classNameBulk = [
    'character',
    `${character}-${orientation}-${frame}`,
  ];

  // if (isMoving) classNameBulk.push(`moving-${orientation}`);

  return (
    <div
      className={classNameBulk.join(' ')}
      style={position}
    />
  );
};

const mapToProps = (state, { frame }) => ({
  orientation: state.player.orientation,
  x: state.player.x,
  y: state.player.y,
  character: state.player.character,
  isMoving: state.player.isMoving,
  // actions: state.player.actions,
  frame,
});

export default connect(mapToProps)(Player);
