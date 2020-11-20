import { actionsType } from './actions';

const initialState = {
  name: '',
  frame: 0,
  orientation: 'front',
  isMoving: false,
  posX: 7,
  posY: 6,
};

const changeName = (state, action) => ({
  ...state,
  name: action.name,
});

const moveUp = (state) => ({
  ...state,
  orientation: 'back',
});

const moveDown = (state) => ({
  ...state,
  orientation: 'front',
});

const moveLeft = (state) => ({
  ...state,
  orientation: 'left',
});

const moveRight = (state) => ({
  ...state,
  orientation: 'right',
});

const nextFrame = (state) => {
  const { frame } = state;

  return {
    ...state,
    frame: frame >= 3 ? 0 : frame + 1,
  };
};

const updatePos = (state, action) => ({
  ...state,
  posX: action.posX,
  posY: action.posY,
});

const moving = (state) => {
  const { isMoving } = state;

  return {
    ...state,
    isMoving: !isMoving,
  };
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
