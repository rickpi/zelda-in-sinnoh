import { combineReducers } from 'redux';

import game from './components/game/reducer';
import playerController from './components/game/controllers/player-controller/reducer';
import board from './components/game/views/board/reducer';
import tiles from './components/game/views/board/tiles/reducer';
import player from './components/game/views/player/reducer';

export default combineReducers({
  game,
  playerController,
  board,
  tiles,
  player,
});
