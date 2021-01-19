import * as actionTypes from '../../../assets/contants/actionTypes';

const initialState = {
  orientation: 'right',
  x: 13,
  y: 3,
  character: 'tortipouss',
  isMoving: false,
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

const handleSetPlayerMoving = (state) => {
  const { isMoving } = state;

  return {
    ...state,
    isMoving: !isMoving,
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
    case actionTypes.SET_PLAYER_MOVING:
      return handleSetPlayerMoving(state);
    case actionTypes.SET_PLAYER_POSITION:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
      };
    default:
      return state;
  }
};
