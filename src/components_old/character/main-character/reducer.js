import { actionsType } from './actions';

const initialState = {
  name: '',
  frame: 0,
  orientation: 'front',
  posX: 14,
  posY: 5,
  isMoving: false,
  movingDirection: '',
};

const changeName = (state, action) => ({
  ...state,
  name: action.name,
});

const moveUp = (state) => {
  const { posY } = state;
  return ({
    ...state,
    orientation: 'back',
    movingDirection: 'up',
    posY: posY - 1,
  });
};

const moveDown = (state) => {
  const { posY } = state;
  return ({
    ...state,
    orientation: 'front',
    movingDirection: 'down',
    posY: posY + 1,
  });
};

const moveLeft = (state) => {
  const { posX } = state;
  return ({
    ...state,
    orientation: 'left',
    movingDirection: 'left',
    posX: posX - 1,
  });
};

const moveRight = (state) => {
  const { posX } = state;
  return {
    ...state,
    orientation: 'right',
    movingDirection: 'right',
    posX: posX + 1,
  };
};

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
  return ({
    ...state,
    isMoving: !isMoving,
  });
};

const removeMovingDirection = (state) => ({
  ...state,
  movingDirection: '',
});

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
    case actionsType.REMOVE_MOVING_DIRECTION:
      return removeMovingDirection(state);
    default:
      return state;
  }
};

export default mainCharacter;
