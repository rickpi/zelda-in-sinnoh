export const actionsType = {
  NEXT_FRAME_NPC: 'NEXT_FRAME_NPC',
  CHANGE_ORIENTATION: 'CHANGE_ORIENTATION',
  NEXT_WORD: 'NEXT_WORD',
  NEXT_SENTENCE: 'NEXT_SENTENCE',
  NEXT_CINEMATIC: 'NEXT_CINEMATIC',
  START_CINEMATIC: 'START_CINEMATIC',
  END_CINEMATIC: 'END_CINEMATIC',
};

export const nextFrameNPC = () => ({
  type: actionsType.NEXT_FRAME_NPC,
});

export const changeOrientation = (orientation) => ({
  type: actionsType.CHANGE_ORIENTATION,
  orientation,
});

export const nextWord = () => ({
  type: actionsType.NEXT_WORD,
});

export const nextSentence = () => ({
  type: actionsType.NEXT_SENTENCE,
});

export const nextCinematic = () => ({
  type: actionsType.NEXT_CINEMATIC,
});

export const startCinematic = () => ({
  type: actionsType.START_CINEMATIC,
});

export const endCinematic = () => ({
  type: actionsType.END_CINEMATIC,
});
