import { actionsType } from './actions';

import level1 from '../../../../assets/data/level1';

const initialState = level1.tabs[0].tiles;

const addMainCharacter = (state, action) => (
  state.map((tile) => {
    if (action.posX === tile.posX && action.posY === tile.posY) {
      return {
        ...tile,
        content: tile.content.concat(['main-character']),
        walkedOn: false,
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
        walkedOn: true,
      };
    }
    return tile;
  })
);

const addNPC = (state, action) => (
  state.map((tile) => {
    if (action.posX === tile.posX && action.posY === tile.posY) {
      return {
        ...tile,
        content: tile.content.concat([`npc-${action.name}`]),
        walkedOn: false,
      };
    }
    return tile;
  })
);

const removeNPC = (state, action) => (
  state.map((tile) => {
    if (tile.content.indexOf(`npc-${action.name}`) > -1) {
      return {
        ...tile,
        content: tile.content.filter((item) => item !== `npc-${action.name}`),
        walkedOn: true,
      };
    }
    return tile;
  })
);

const updateTiles = (state, action) => action.tiles;

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.ADD_MAIN_CHARACTER:
      return addMainCharacter(state, action);
    case actionsType.REMOVE_MAIN_CHARACTER:
      return removeMainCharacter(state);
    case actionsType.ADD_NPC:
      return addNPC(state, action);
    case actionsType.REMOVE_NPC:
      return removeNPC(state, action);
    case actionsType.UPDATE_TILES:
      return updateTiles(state, action);
    default:
      return state;
  }
};

export default tiles;
