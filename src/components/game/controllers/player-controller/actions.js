export const actionsType = {
  SET_PLAYER_NAME: 'SET_PLAYER',
  SET_PLAYER_CHARACTER: 'SET_PLAYER_CHARACTER',
  EVOLVE: 'EVOLVE',
  SET_PLAYER_POS: 'SET_PLAYER_POS',
  START_PLAYER_MOVING: 'START_PLAYER_MOVING',
  STOP_PLAYER_MOVING: 'STOP_PLAYER_MOVING',
};

export const setPlayerName = (name) => ({
  type: actionsType.SET_PLAYER_NAME,
  name,
});

export const setPlayerCharacter = (character) => ({
  type: actionsType.SET_PLAYER_NAME,
  character,
});

export const evolve = () => ({
  type: actionsType.EVOLVE,
});

export const setPlayerPos = (x, y) => ({
  type: actionsType.SET_PLAYER_POS,
  x,
  y,
});

export const startPlayerMoving = () => ({
  type: actionsType.START_PLAYER_MOVING,
});

export const stopPlayerMoving = () => ({
  type: actionsType.STOP_PLAYER_MOVING,
});
