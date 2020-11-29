import { actionsType } from './actions';

import level1 from '../../../../assets/data/levels/level1';

// prod state
// const initialState = {
//   board: 0,
//   boards: [],
// };

// dev state
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

// const addCharacter = (state, action) => {
//   const { board: actualBoard, boards } = state;
//   const updatedBoard = [...boards];

//   updatedBoard[actualBoard]
//     .tiles[action.y * 15 + action.x]
//     .content.push(action.name);

//   console.log(updatedBoard);
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
    // case actionsType.ADD_CHARACTER:
    //   return addCharacter(state, action);
    // case actionsType.REMOVE_CHARACTER:
    //   return removeCharacter(state, action);
    default:
      return state;
  }
};

export default board;
