export const actionsType = {
  CHANGE_NAME: 'CHANGE_NAME',
  MOVE_UP: 'MOVE_UP',
  MOVE_DOWN: 'MOVE_DOWN',
  MOVE_LEFT: 'MOVE_LEFT',
  MOVE_RIGHT: 'MOVE_RIGHT',
  NEXT_FRAME: 'NEXT_FRAME',
  UPDATE_POS: 'UPDATE_POS',
  MOVING: 'MOVING',
  REMOVE_MOVING_DIRECTION: 'REMOVE_MOVING_DIRECTION',
};

export const changeName = (name) => ({
  type: actionsType.CHANGE_NAME,
  name,
});

export const moveUp = () => ({
  type: actionsType.MOVE_UP,
});

export const moveDown = () => ({
  type: actionsType.MOVE_DOWN,
});

export const moveLeft = () => ({
  type: actionsType.MOVE_LEFT,
});

export const moveRight = () => ({
  type: actionsType.MOVE_RIGHT,
});

export const nextFrame = () => ({
  type: actionsType.NEXT_FRAME,
});

export const updatePos = (posX, posY) => ({
  type: actionsType.UPDATE_POS,
  posX,
  posY,
});

export const moving = () => ({
  type: actionsType.MOVING,
});

export const removeMovingDirection = () => ({
  type: actionsType.REMOVE_MOVING_DIRECTION,
});
