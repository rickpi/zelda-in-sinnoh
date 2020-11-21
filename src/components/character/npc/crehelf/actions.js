export const actionsType = {
  NEXT_FRAME_NPC: 'NEXT_FRAME_NPC',
  NEXT_WORD: 'NEXT_WORD',
  NEXT_SENTENCE: 'NEXT_SENTENCE',
};

export const nextFrameNPC = () => ({
  type: actionsType.NEXT_FRAME_NPC,
});

export const nextWord = () => ({
  type: actionsType.NEXT_WORD,
});

export const nextSentence = () => ({
  type: actionsType.NEXT_SENTENCE,
});
