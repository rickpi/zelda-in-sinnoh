import { actionsType } from './actions';

const initialState = {
  top: -1,
  bottom: -1,
  left: -1,
  right: -1,
  npc: [],
  tiles: [],
};

const loadTiles = (state, action) => ({
  ...state,
  ...action.board,
});

const addCharacter = (state, action) => {
  const tiles = state.tiles.map((tile) => {
    if (action.x === tile.x && action.y === tile.y) {
      return {
        ...tile,
        content: tile.content.concat([action.name]),
        walkedOn: false,
      };
    }
    return tile;
  });

  return {
    ...state,
    tiles,
  };
};

const removeCharacter = (state, action) => {
  const tiles = state.tiles.map((tile) => {
    if (action.x === tile.x && action.y === tile.y) {
      return {
        ...tile,
        content: tile.content.filter((item) => item !== action.name),
        walkedOn: true,
      };
    }
    return tile;
  });

  return {
    ...state,
    tiles,
  };
};

const tiles = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.LOAD_TILES:
      return loadTiles(state, action);
    // case actionsType.REMOVE_NPC_FROM_BOARD:
    //   return removeNPCFromBoard(state, action);
    case actionsType.ADD_CHARACTER:
      return addCharacter(state, action);
    case actionsType.REMOVE_CHARACTER:
      return removeCharacter(state, action);
    default:
      return state;
  }
};

export default tiles;
