import { actionsType } from './actions';

const initialState = {
  isInit: false,
  isLoading: false,
  level: 0,
};

const init = (state) => ({
  ...state,
  isInit: true,
});

const startLoading = (state) => ({
  ...state,
  isLoading: true,
});

const stopLoading = (state) => ({
  ...state,
  isLoading: false,
});

const previousLevel = (state) => {
  const { level } = state;

  return ({
    ...state,
    level: level - 1,
  });
};

const nextLevel = (state) => {
  const { level } = state;

  return ({
    ...state,
    level: level + 1,
  });
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.INIT:
      return init(state);
    case actionsType.START_LOADING:
      return startLoading(state);
    case actionsType.stopLoading:
      return stopLoading(state);
    case actionsType.previousLevel:
      return previousLevel(state);
    case actionsType.nextLevel:
      return nextLevel(state);
    default:
      return state;
  }
};

export default game;
