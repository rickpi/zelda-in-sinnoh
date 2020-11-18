import { combineReducers } from 'redux';

// import tasks from './components/home/tasks/reducer';
import board from './components/game/board/reducer';

export default combineReducers({
  board,
});
