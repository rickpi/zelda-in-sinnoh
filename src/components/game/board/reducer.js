import { actionsType } from './actions';

import level1 from '../../../assets/data/level1';

const initialState = {
  levels: [{
    ...level1,
  }],
  currentLevel: 0,
  currentTab: 0,
};

const updateTab = (state, action) => ({
  ...state,
  currentTab: action.newTab,
});

const board = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.UPDATE_TAB:
      return updateTab(state, action);
    default:
      return state;
  }
};

export default board;
