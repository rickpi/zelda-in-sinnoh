import { combineReducers } from 'redux';

import board from './components/game/board/reducer';
import mainCharacter from './components/character/main-character/reducer';
import tiles from './components/game/board/tiles/reducer';

export default combineReducers({
  board,
  mainCharacter,
  tiles,
});
