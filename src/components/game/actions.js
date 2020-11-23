export const actionsType = {
  INIT: 'INIT',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  PREVIOUS_LEVEL: 'PREVIOUS_LEVEL',
  NEXT_LEVEL: 'NEXT_LEVEL',
};

export const init = () => ({
  type: actionsType.INIT,
});

export const startLoading = () => ({
  type: actionsType.START_LOADING,
});

export const stopLoading = () => ({
  type: actionsType.STOP_LOADING,
});

export const previousLevel = () => ({
  type: actionsType.PREVIOUS_LEVEL,
});

export const nextLevel = () => ({
  type: actionsType.NEXT_LEVEL,
});
