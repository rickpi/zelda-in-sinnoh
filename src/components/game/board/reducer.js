// import { actionsType } from './actions';

import level1 from '../../../assets/data/level1';

const initialState = {
  levels: [{
    ...level1,
  }],
  currentLevel: 0,
  currentTab: 0,
};

const board = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default board;
