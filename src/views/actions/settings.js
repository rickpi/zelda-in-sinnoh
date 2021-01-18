import * as actionTypes from '../../../assets/contants/actionTypes';

export const setPlayerName = (name) => ({
  type: actionTypes.SET_PLAYER_NAME,
  payload: {
    name,
  },
});

export const setPlayerCharacter = (character) => ({
  type: actionTypes.SET_PLAYER_CHARACTER,
  payload: {
    character,
  },
});

export const setUpDone = () => ({
  type: actionTypes.SET_UP_DONE,
});

export const loading = () => ({
  type: actionTypes.LOADING,
});
