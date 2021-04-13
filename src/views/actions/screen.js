import * as actionTypes from '../../../assets/contants/actionTypes';

export const setScreen = (screen) => ({
  type: actionTypes.SET_SCREEN,
  payload: {
    screen,
  },
});

export const nextFrame = () => ({
  type: actionTypes.NEXT_FRAME,
});
