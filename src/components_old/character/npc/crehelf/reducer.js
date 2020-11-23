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
        'Sinnoh est en danger...',
        'Tu dois nous aider.',
        'Suis moi.',
      ],
    },
  ],
  currentSentence: 0,
  currentWord: 0,
  cinematics: [
    {
      function: null,
      orientation: 'right',
      duration: 2000,
    },
  ],
  currentCinematic: 0,
  cinematic: false,
};

const nextFrameNPC = (state) => {
  const { frame } = state;

  return {
    ...state,
    frame: frame >= 3 ? 0 : frame + 1,
  };
};

const changeOrientation = (state, action) => ({
  ...state,
  orientation: action.orientation,
});

const nextWord = (state) => {
  const { currentWord } = state;
  const newWord = currentWord + 1 !== state.words.length ? currentWord + 1 : 0;

  return {
    ...state,
    currentWord: newWord,
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

const nextCinematic = (state) => {
  const { currentCinematic } = state;
  const newCinematic = currentCinematic + 1 !== state.cinematics.length ? currentCinematic + 1 : 0;

  return {
    ...state,
    currentCinematic: newCinematic,
  };
};

const startCinematic = (state) => ({
  ...state,
  cinematic: true,
});

const endCinematic = (state) => ({
  ...state,
  cinematic: false,
});

const crehelf = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.NEXT_FRAME_NPC:
      return nextFrameNPC(state);
    case actionsType.CHANGE_ORIENTATION:
      return changeOrientation(state, action);
    case actionsType.NEXT_WORD:
      return nextWord(state);
    case actionsType.NEXT_SENTENCE:
      return nextSentence(state);
    case actionsType.NEXT_CINEMATIC:
      return nextCinematic(state);
    case actionsType.START_CINEMATIC:
      return startCinematic(state);
    case actionsType.END_CINEMATIC:
      return endCinematic(state);
    default:
      return state;
  }
};

export default crehelf;
