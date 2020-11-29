import { actionsType } from './actions';

import level1 from '../../../../assets/data/levels/level1';

// const initialState = {
//   board: 0,
//   boards: [],
// };
// dev mode

const initialState = {
  ...level1,
};

const loadBoard = (state, action) => ({
  ...state,
  ...action.board,
});

const removeNPCFromBoard = (state, action) => {
  const { board: actualBoard, boards } = state;
  const updatedBoard = boards[actualBoard].NPC
    .filter((name) => name !== action.name);

  return {
    ...state,
    boards: updatedBoard,
  };
};

const board = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.LOAD_BOARD:
      return loadBoard(state, action);
    case actionsType.REMOVE_NPC_FROM_BOARD:
      return removeNPCFromBoard(state, action);
    // case actionsType.ADD_CHARACTER:
    //   return addCharacter(state, action);
    // case actionsType.REMOVE_CHARACTER:
    //   return removeCharacter(state, action);
    default:
      return state;
  }
};

export default board;
