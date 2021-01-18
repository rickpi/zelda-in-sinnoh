import { combineReducers } from 'redux';

import viewsReducer from './views/reducers/reducer';

export default combineReducers({
  ...viewsReducer,
});
