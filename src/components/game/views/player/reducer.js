import { actionsType } from './actions';

const initialState = {
  character: '',
  orientation: 'right',
  frame: 0,
};

const setPlayerCharacterView = (state, action) => {
  let character = '';

  switch (action.character) {
    case 0:
      switch (action.evolutionStep) {
        case 0:
          character = 'tortipouss';
          break;
        case 1:
          character = 'boskara';
          break;
        case 2:
          character = 'torterra';
          break;
        default:
          character = '';
      }
      break;
    case 1:
      switch (action.evolutionStep) {
        case 0:
          character = 'ouisticram';
          break;
        case 1:
          character = 'chimpenfeu';
          break;
        case 2:
          character = 'simiabraz';
          break;
        default:
          character = '';
      }
      break;
    case 2:
      switch (action.evolutionStep) {
        case 0:
          character = 'tiplouf';
          break;
        case 1:
          character = 'prinplouf';
          break;
        case 2:
          character = 'pingoleon';
          break;
        default:
          character = '';
      }
      break;
    default:
      character = '';
      break;
  }

  return {
    ...state,
    character,
  };
};

const lookUp = (state) => ({
  ...state,
  orientation: 'up',
});

const lookDown = (state) => ({
  ...state,
  orientation: 'down',
});

const lookLeft = (state) => ({
  ...state,
  orientation: 'left',
});

const lookRight = (state) => ({
  ...state,
  orientation: 'right',
});

const nextPlayerFrame = (state) => {
  const { frame } = state;
  const nextFrame = frame === 2 ? 0 : frame + 1;

  return {
    ...state,
    frame: nextFrame,
  };
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.SET_PLAYER_CHARACTER_VIEW:
      return setPlayerCharacterView(state, action);
    case actionsType.LOOK_UP:
      return lookUp(state);
    case actionsType.LOOK_DOWN:
      return lookDown(state);
    case actionsType.LOOK_LEFT:
      return lookLeft(state);
    case actionsType.LOOK_RIGHT:
      return lookRight(state);
    case actionsType.NEXT_PLAYER_FRAME:
      return nextPlayerFrame(state);
    default:
      return state;
  }
};

export default player;
