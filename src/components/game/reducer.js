import { actionsType } from './actions';

import level1 from '../../assets/data/levels/level1';

// prod state
// const initialState = {
//   isInit: false,
//   isLoading: false,
//   level: 0,
//   levels: [{
//     ...level1,
//   }],
// };

// dev state
const initialState = {
  isInit: true,
  isLoading: false,
  level: 0,
  levels: [{
    ...level1,
  }],
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
    case actionsType.STOP_LOADING:
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
