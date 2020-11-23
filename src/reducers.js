import { combineReducers } from 'redux';

import game from './components/game/reducer';
import player from './components/game/controllers/player-controller/reducer';
import board from './components/game/views/board/reducer';

export default combineReducers({
  game,
  player,
  board,
});
