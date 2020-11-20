import { actionsType } from './actions';

import level1 from '../../../../assets/data/level1';

const initialState = level1.tabs[0].tiles;

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

const removeMainCharacter = (state) => (
  state.map((tile) => {
    if (tile.content.indexOf('main-character') > -1) {
      return {
        ...tile,
        content: tile.content.filter((item) => item !== 'main-character'),
      };
    }
    return tile;
  })
);

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_MAIN_CHARACTER:
      return addMainCharacter(state, action);
    case actionsType.REMOVE_MAIN_CHARACTER:
      return removeMainCharacter(state);
    default:
      return state;
  }
};

export default tiles;
