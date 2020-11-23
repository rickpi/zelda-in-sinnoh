export const actionsType = {
  LOAD_BOARD: 'LOAD_BOARD',
  REMOVE_NPC_FROM_BOARD: 'REMOVE_NPC_FROM_BOARD',
  ADD_CHARACTER: 'ADD_CHARACTER',
  REMOVE_CHARACTER: 'REMOVE_CHARACTER',
};

export const loadBoard = (board) => ({
  type: actionsType.LOAD_BOARD,
  board,
});

export const removeNPCFromBoard = (id) => ({
  type: actionsType.LOAD_DOWN_BOARD,
  id,
});

export const addCharacter = (name) => ({
  type: actionsType.ADD_CHARACTER,
  name,
});

export const removeCharacter = (name) => ({
  type: actionsType.REMOVE_CHARACTER,
  name,
});
