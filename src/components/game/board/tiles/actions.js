export const actionsType = {
  ADD_MAIN_CHARACTER: 'ADD_MAIN_CHARACTER',
  REMOVE_MAIN_CHARACTER: 'REMOVE_MAIN_CHARACTER',
};

export const addMainCharacter = (posX, posY) => ({
  type: actionsType.ADD_MAIN_CHARACTER,
  posX,
  posY,
});

export const removeMainCharacter = () => ({
  type: actionsType.REMOVE_MAIN_CHARACTER,
});
