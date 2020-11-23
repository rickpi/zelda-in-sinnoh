export const actionsType = {
  START_DISCUSSION: 'START_DISCUSSION',
  END_DISCUSSION: 'END_DISCUSSION',
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

export const startDiscussion = () => ({
  type: actionsType.START_DISCUSSION,
});

export const endDiscussion = () => ({
  type: actionsType.END_DISCUSSION,
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
