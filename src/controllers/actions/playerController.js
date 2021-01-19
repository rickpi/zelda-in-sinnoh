import * as actionTypes from '../../../assets/contants/actionTypes';

export const playerMoving = (x, y) => ({
  type: actionTypes.PLAYER_MOVING,
  payload: {
    x,
    y,
  },
});

export const nextFrame = () => ({
  type: actionTypes.NEXT_FRAME,
});
