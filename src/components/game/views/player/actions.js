export const actionsType = {
  SET_PLAYER_CHARACTER_VIEW: 'SET_PLAYER_CHARACTER_VIEW',
  LOOK_UP: 'LOOK_UP',
  LOOK_DOWN: 'LOOK_DOWN',
  LOOK_LEFT: 'LOOK_LEFT',
  LOOK_RIGHT: 'LOOK_RIGHT',
  NEXT_PLAYER_FRAME: 'NEXT_PLAYER_FRAME',
};

export const setPlayerCharacterView = (character, evolutionStep) => ({
  type: actionsType.SET_PLAYER_CHARACTER_VIEW,
  character,
  evolutionStep,
});

export const lookUp = () => ({
  type: actionsType.LOOK_UP,
});

export const lookDown = () => ({
  type: actionsType.LOOK_DOWN,
});

export const lookLeft = () => ({
  type: actionsType.LOOK_LEFT,
});

export const lookRight = () => ({
  type: actionsType.LOOK_RIGHT,
});

export const nextPlayerFrame = () => ({
  type: actionsType.NEXT_PLAYER_FRAME,
});
