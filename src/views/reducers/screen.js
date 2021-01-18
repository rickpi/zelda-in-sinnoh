import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  frame: 0,
  top: '',
  right: '',
  bottom: '',
  left: '',
  npc: [],
  tiles: [],
};

const handleNextFrame = (state) => {
  const { frame } = state;
  const nextFrame = frame === 3 ? 0 : frame + 1;

  return {
    ...state,
    frame: nextFrame,
  };
};

const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SCREEN:
      return {
        ...state,
        ...action.payload.screen,
      };
    case actionTypes.NEXT_FRAME:
      return handleNextFrame(state);
    default:
      return state;
  }
};

export default screenReducer;
