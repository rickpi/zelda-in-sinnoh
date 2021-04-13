import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  top: '',
  right: '',
  bottom: '',
  left: '',
  tiles: [],
};

const handleSetScreenController = (state, {
  top,
  right,
  bottom,
  left,
  tiles,
}) => {
  const viewTiles = tiles.map(({ x, y, walkedOn }) => ({
    x,
    y,
    walkedOn,
  }));

  return {
    ...state,
    tiles: viewTiles,
    top,
    right,
    bottom,
    left,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREEN_CONTROLLER:
      return handleSetScreenController(state, action.payload.screen);
    default:
      return state;
  }
};
