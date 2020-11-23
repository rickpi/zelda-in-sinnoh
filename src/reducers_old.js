import { combineReducers } from 'redux';

import board from './components_old/game/board/reducer';
import mainCharacter from './components_old/character/main-character/reducer';
import crehelf from './components_old/character/npc/crehelf/reducer';
import NPCTalkingBox from './components_old/character/npc/npc-talking-box/reducer';
import tiles from './components_old/game/board/tiles/reducer';

export default combineReducers({
  board,
  mainCharacter,
  crehelf,
  NPCTalkingBox,
  tiles,
});
