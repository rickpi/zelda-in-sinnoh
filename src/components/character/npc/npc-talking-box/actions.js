export const actionsType = {
  START_CINEMATIC: 'START_CINEMATIC',
  END_CINEMATIC: 'END_CINEMATIC',
  START_TALKING: 'START_TALKING',
  END_TALKING: 'END_TALKING',
  START_RELOADING: 'START_RELOADING',
  END_RELOADING: 'END_RELOADING',
  UPDATE_SENTENCE: 'UPDATE_SENTENCE',
};

export const startTalking = () => ({
  type: actionsType.START_TALKING,
});

export const endTalking = () => ({
  type: actionsType.END_TALKING,
});

export const startCinematic = () => ({
  type: actionsType.START_CINEMATIC,
});

export const endCinematic = () => ({
  type: actionsType.END_CINEMATIC,
});

export const startReloading = () => ({
  type: actionsType.START_RELOADING,
});

export const endReloading = () => ({
  type: actionsType.END_RELOADING,
});

export const updateSentence = (sentence) => ({
  type: actionsType.UPDATE_SENTENCE,
  sentence,
});
