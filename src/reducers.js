import { combineReducers } from 'redux';

import board from './components/game/board/reducer';
import mainCharacter from './components/character/main-character/reducer';

export default combineReducers({
  board,
  mainCharacter,
});
