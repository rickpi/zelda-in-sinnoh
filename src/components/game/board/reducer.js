// import { actionsType } from './actions';

import level1 from '../../../assets/data/level1';

const initialState = {
  levels: [{
    id: '1',
    matrix: level1,
  }],
  currentLevel: '1',
};

const board = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default board;
