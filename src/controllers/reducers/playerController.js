import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  x: 3,
  y: 5,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_MOVING:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
      };
    default:
      return state;
  }
};
