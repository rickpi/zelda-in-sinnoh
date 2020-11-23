import { actionsType } from './actions';

const initialState = {
  playerName: 'Link',
  character: 0,
  evolutionStep: 0,
  pos: {
    x: 3,
    y: 6,
  },
  isMoving: false,
};

const setPlayerName = (state, action) => ({
  ...state,
  name: action.name,
});

const setPlayerCharacter = (state, action) => ({
  ...state,
  character: action.character,
});

const evolve = (state) => {
  const { evolutionStep } = state;

  return ({
    ...state,
    evolutionStep: evolutionStep + 1,
  });
};

const setPlayerPos = (state, action) => ({
  ...state,
  x: action.x,
  y: action.y,
});

const startPlayerMoving = (state) => ({
  ...state,
  isMoving: true,
});

const stopPlayerMoving = (state) => ({
  ...state,
  isMoving: false,
});

const player = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.SET_PLAYER_NAME:
      return setPlayerName(state, action);
    case actionsType.SET_PLAYER_CHARACTER:
      return setPlayerCharacter(state, action);
    case actionsType.EVOLVE:
      return evolve(state);
    case actionsType.SET_PLAYER_POS:
      return setPlayerPos(state, action);
    case actionsType.START_PLAYER_MOVING:
      return startPlayerMoving(state);
    case actionsType.STOP_PLAYER_MOVING:
      return stopPlayerMoving(state);
    default:
      return state;
  }
};

export default player;
