import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  orientation: 'down',
  x: 3,
  y: 5,
  character: 'tortipouss',
};

const handleSetPlayerCharacter = (state, { character, evolutionStep }) => {
  let characterName = '';

  switch (character) {
    case 0:
      switch (evolutionStep) {
        case 0:
          characterName = 'tortipouss';
          break;
        case 1:
          characterName = 'boskara';
          break;
        case 2:
          characterName = 'torterra';
          break;
        default:
          characterName = '';
      }
      break;
    case 1:
      switch (evolutionStep) {
        case 0:
          characterName = 'ouisticram';
          break;
        case 1:
          characterName = 'chimpenfeu';
          break;
        case 2:
          characterName = 'simiabraz';
          break;
        default:
          characterName = '';
      }
      break;
    case 2:
      switch (evolutionStep) {
        case 0:
          characterName = 'tiplouf';
          break;
        case 1:
          characterName = 'prinplouf';
          break;
        case 2:
          characterName = 'pingoleon';
          break;
        default:
          characterName = '';
      }
      break;
    default:
      characterName = '';
      break;
  }

  return {
    ...state,
    character: characterName,
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYER_ORIENTATION:
      return {
        ...state,
        orientation: action.payload.orientation,
      };
    case actionTypes.SET_PLAYER_CHARACTER_NAME:
      return handleSetPlayerCharacter(state, action.payload);
    default:
      return state;
  }
};
