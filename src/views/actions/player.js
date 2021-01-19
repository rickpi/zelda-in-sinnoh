import * as actionTypes from '../../../assets/contants/actionTypes';

export const setPlayerOrientation = (orientation) => ({
  type: actionTypes.SET_PLAYER_ORIENTATION,
  payload: {
    orientation,
  },
});

export const setPlayerCharacter = (character, evolutionStep) => ({
  type: actionTypes.SET_PLAYER_CHARACTER_NAME,
  payload: {
    character,
    evolutionStep,
  },
});

export const playerIsMoving = () => ({
  type: actionTypes.SET_PLAYER_MOVING,
});

export const setPlayerPosition = (x, y) => ({
  type: actionTypes.SET_PLAYER_POSITION,
  payload: {
    x,
    y,
  },
});
