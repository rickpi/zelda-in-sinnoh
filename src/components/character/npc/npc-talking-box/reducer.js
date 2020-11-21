import { actionsType } from './actions';

const initialState = {
  cinematic: false,
  isTalking: false,
  isReloading: false,
  sentence: '',
};

const startCinematic = (state) => ({
  ...state,
  cinematic: true,
});

const endCinematic = (state) => ({
  ...state,
  cinematic: false,
});

const startTalking = (state) => ({
  ...state,
  isTalking: true,
});

const endTalking = (state) => ({
  ...state,
  isTalking: false,
});

const startReloading = (state) => ({
  ...state,
  isReloading: true,
});

const endReloading = (state) => ({
  ...state,
  isReloading: false,
});

const updateSentence = (state, action) => ({
  ...state,
  sentence: action.sentence,
});

const NPCTalkingBox = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.START_CINEMATIC:
      return startCinematic(state);
    case actionsType.END_CINEMATIC:
      return endCinematic(state);
    case actionsType.START_TALKING:
      return startTalking(state);
    case actionsType.END_TALKING:
      return endTalking(state);
    case actionsType.START_RELOADING:
      return startReloading(state);
    case actionsType.END_RELOADING:
      return endReloading(state);
    case actionsType.UPDATE_SENTENCE:
      return updateSentence(state, action);
    default:
      return state;
  }
};

export default NPCTalkingBox;
