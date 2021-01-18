import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  frame: 0,
  npc: [],
  tiles: [],
};

const handleSetScreen = (state, { tiles }) => {
  const viewTiles = tiles.map(({ base, content }, index) => ({
    base,
    content,
    id: `tile-${index}`,
  }));

  return {
    ...state,
    tiles: viewTiles,
  };
};

const handleNextFrame = (state) => {
  const { frame } = state;
  const nextFrame = frame === 3 ? 0 : frame + 1;

  return {
    ...state,
    frame: nextFrame,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREEN:
      return handleSetScreen(state, action.payload.screen);
    case actionTypes.NEXT_FRAME:
      return handleNextFrame(state);
    default:
      return state;
  }
};
