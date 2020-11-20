import { actionsType } from './actions';

import level1 from '../../../../assets/data/level1';

const initialState = level1.tabs[0].tiles;

// const test = (state, action) => {
//   console.log('ouais');
//   return (
//     state.map((tile) => {
//       if (action.posX === tile.posX && action.posY === tile.posY) {
//         return {
//           ...tile,
//           content: ['test'],
//         };
//       }
//       return tile;
//     })
//   );
// };

const addMainCharacter = (state, action) => (
  state.map((tile) => {
    if (action.posX === tile.posX && action.posY === tile.posY) {
      return {
        ...tile,
        content: tile.content.concat(['main-character']),
      };
    }
    return tile;
  })
);

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_MAIN_CHARACTER:
      return addMainCharacter(state, action);
    default:
      return state;
  }
};

export default tiles;
