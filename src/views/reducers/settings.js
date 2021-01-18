import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  playerName: 'Link',
  character: 0,
  evolutionStep: 0,
  setUp: false,
  isLoading: false,
};

const handleLoading = (state) => {
  console.log(state);
  const { isLoading } = state;

  return {
    ...state,
    isLoading: !isLoading,
  };
};

const settingsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default settingsReducer;
