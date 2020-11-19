import { actionsType } from './actions';

const initialState = {
  name: '',
  frame: 0,
  orientation: 'front',
  isMoving: false,
  posX: 5,
  posY: 5,
};

const changeName = (state, action) => {
  const newState = { ...state };

  newState.name = action.name;
  return newState;
};

const moveUp = (state) => {
  const newState = { ...state };

  newState.orientation = 'back';
  return newState;
};

const moveDown = (state) => {
  const newState = { ...state };

  newState.orientation = 'front';
  return newState;
};

const moveLeft = (state) => {
  const newState = { ...state };

  newState.orientation = 'left';
  return newState;
};

const moveRight = (state) => {
  const newState = { ...state };

  newState.orientation = 'right';
  return newState;
};

const nextFrame = (state) => {
  const { frame } = state;
  const newState = { ...state };

  newState.frame = frame >= 3 ? 0 : frame + 1;
  return newState;
};

const updatePos = (state, action) => {
  const { posX, posY } = action;
  const newState = { ...state };

  newState.posX = posX;
  newState.posY = posY;
  return newState;
};

const moving = (state) => {
  const { isMoving } = state;
  const newState = { ...state };

  newState.isMoving = !isMoving;
  return newState;
};

const mainCharacter = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.CHANGE_NAME:
      return changeName(state, action);
    case actionsType.MOVE_UP:
      return moveUp(state);
    case actionsType.MOVE_DOWN:
      return moveDown(state);
    case actionsType.MOVE_LEFT:
      return moveLeft(state);
    case actionsType.MOVE_RIGHT:
      return moveRight(state);
    case actionsType.NEXT_FRAME:
      return nextFrame(state);
    case actionsType.UPDATE_POS:
      return updatePos(state, action);
    case actionsType.MOVING:
      return moving(state);
    default:
      return state;
  }
};

export default mainCharacter;
