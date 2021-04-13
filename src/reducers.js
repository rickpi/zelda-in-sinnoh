import { combineReducers } from 'redux';

import viewsReducer from './views/reducers/reducer';
import controllersReducer from './controllers/reducers/reducer';

export default combineReducers({
  ...viewsReducer,
  ...controllersReducer,
});
