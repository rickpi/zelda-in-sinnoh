import * as actionTypes from '../../../assets/contants/actionTypes';

export const setScreenController = (screen) => ({
  type: actionTypes.SET_SCREEN_CONTROLLER,
  payload: {
    screen,
  },
});

export const nextFrame = () => ({
  type: actionTypes.NEXT_FRAME,
});
