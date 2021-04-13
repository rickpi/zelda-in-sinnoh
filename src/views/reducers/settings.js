import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  playerName: 'Link',
  character: 0,
  evolutionStep: 0,
  setUp: false,
  isLoading: false,
  level: 1,
  screen: 0,
};

const handleLoading = (state) => {
  const { isLoading } = state;

  return {
    ...state,
    isLoading: !isLoading,
  };
};

const handleNextLevel = (state) => {
  const { level } = state;

  return {
    ...state,
    level: level + 1,
  };
};

const handleUpdateScreen = (state, { newScreen }) => ({
  ...state,
  screen: newScreen,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_NAME:
      return {
        ...state,
        playerName: action.payload.name,
      };
    case actionTypes.SET_PLAYER_CHARACTER:
      return {
        ...state,
        character: action.payload.character,
      };
    case actionTypes.SET_UP_DONE:
      return {
        ...state,
        setUp: true,
      };
    case actionTypes.LOADING:
      return handleLoading(state);
    case actionTypes.NEXT_LEVEL:
      return handleNextLevel(state);
    case actionTypes.UPDATE_SCREEN:
      return handleUpdateScreen(state, action.payload);
    default:
      return state;
  }
};
