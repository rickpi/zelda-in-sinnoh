import { actionsType } from './actions';

const initialState = {
  name: 'crehelf',
  frame: 0,
  orientation: 'front',
  posX: 12,
  posY: 5,
  isMoving: false,
  movingDirection: '',
  words: [
    {
      sentences: [
        'Tu dois sauver le monde.',
        'Suis moi.',
      ],
    },
  ],
  currentSentence: 0,
  currentWord: 0,
};

const nextFrameNPC = (state) => {
  const { frame } = state;

  return {
    ...state,
    frame: frame >= 3 ? 0 : frame + 1,
  };
};

const nextWord = (state) => {
  const { currentWord } = state;

  return {
    ...state,
    currentWord: currentWord + 1,
    currentSentence: 0,
  };
};

const nextSentence = (state) => {
  const { currentSentence } = state;

  return {
    ...state,
    currentSentence: currentSentence + 1,
  };
};

const crehelf = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.NEXT_FRAME_NPC:
      return nextFrameNPC(state);
    case actionsType.NEXT_WORD:
      return nextWord(state);
    case actionsType.NEXT_SENTENCE:
      return nextSentence(state);
    default:
      return state;
  }
};

export default crehelf;
