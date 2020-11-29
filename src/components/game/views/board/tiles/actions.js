export const actionsType = {
  LOAD_TILES: 'LOAD_TILES',
  ADD_CHARACTER: 'ADD_CHARACTER',
};

export const loadTiles = (board) => ({
  type: actionsType.LOAD_TILES,
  board,
});

export const addCharacter = (name, x, y) => ({
  type: actionsType.ADD_CHARACTER,
  name,
  x,
  y,
});
