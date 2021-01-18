import { useEffect } from 'react';
// import { connect } from 'react-redux';

const KeyInputController = () => {
  const handleKeyDown = (event) => {
    const { key } = event;

    console.log(key);
  };

  useEffect(() => document.addEventListener('keydown', handleKeyDown));

  return null;
};

// const mapToProps = (state) => ({
//   orientation: state.player.orientation,
//   x: state.player.x,
//   y: state.player.y,
//   character: state.player.character
// });

// export default connect(mapToProps)(KeyInputController);
export default KeyInputController;
