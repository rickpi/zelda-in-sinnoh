export const actionsType = {
  ADD_MAIN_CHARACTER: 'ADD_MAIN_CHARACTER',
  REMOVE_MAIN_CHARACTER: 'REMOVE_MAIN_CHARACTER',
  ADD_NPC: 'ADD_NPC',
  REMOVE_NPC: 'REMOVE_NPC',
  UPDATE_TILES: 'UPDATE_TILES',
};

export const addMainCharacter = (posX, posY) => ({
  type: actionsType.ADD_MAIN_CHARACTER,
  posX,
  posY,
});

export const removeMainCharacter = () => ({
  type: actionsType.REMOVE_MAIN_CHARACTER,
});

export const addNPC = (posX, posY, name) => ({
  type: actionsType.ADD_NPC,
  posX,
  posY,
  name,
});

export const removeNPC = (name) => ({
  type: actionsType.REMOVE_NPC,
  name,
});

export const updateTiles = (tiles) => ({
  type: actionsType.UPDATE_TILES,
  tiles,
});
