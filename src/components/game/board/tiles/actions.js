export const actionsType = {
  ADD_MAIN_CHARACTER: 'ADD_MAIN_CHARACTER',
};

export const addMainCharacter = (posX, posY) => ({
  type: actionsType.ADD_MAIN_CHARACTER,
  posX,
  posY,
});
