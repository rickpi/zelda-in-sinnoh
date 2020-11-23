export const actionsType = {
  UPDATE_TAB: 'UPDATE_TAB',
};

export const updateTab = (newTab) => ({
  type: actionsType.UPDATE_TAB,
  newTab,
});
