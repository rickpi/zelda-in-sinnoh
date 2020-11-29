import { actionsType } from './actions';

// prod state
// const initialState = {
//   board: 0,
//   boards: [],
// };

// dev state
import level1 from '../../../../assets/data/levels/level1';

const initialState = {
  ...level1,
};

const loadBoards = (state, action) => ({
  ...state,
  ...action.boards,
});

// const removeNPCFromBoard = (state, action) => {
//   const { board: actualBoard, boards } = state;
//   const updatedBoard = boards[actualBoard].NPC
//     .filter((name) => name !== action.name);

//   return {
//     ...state,
//     boards: updatedBoard,
//   };
// };

const board = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.LOAD_BOARDS:
      return loadBoards(state, action);
    // case actionsType.REMOVE_NPC_FROM_BOARD:
    //   return removeNPCFromBoard(state, action);
    // case actionsType.REMOVE_CHARACTER:
    //   return removeCharacter(state, action);
    default:
      return state;
  }
};

export default board;
