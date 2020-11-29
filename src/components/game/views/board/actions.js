export const actionsType = {
  LOAD_BOARDS: 'LOAD_BOARDS',
};

export const loadBoard = (boards) => ({
  type: actionsType.LOAD_BOARDS,
  boards,
});

// export const removeNPCFromBoard = (id) => ({
//   type: actionsType.LOAD_DOWN_BOARD,
//   id,
// });

// export const addCharacter = (name, x, y) => ({
//   type: actionsType.ADD_CHARACTER,
//   name,
//   x,
//   y,
// });

// export const removeCharacter = (name, x, y) => ({
//   type: actionsType.REMOVE_CHARACTER,
//   name,
//   x,
//   y,
// });
