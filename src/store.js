import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';
import loadingMiddleware from './middleware/loadingMiddleware';
import playerActionsMiddleware from './middleware/playerActionsMiddleware';

const middlewareEnhancer = applyMiddleware(
  loadingMiddleware,
  playerActionsMiddleware,
);
const reduxDevtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = () => (
  createStore(
    reducers,
    compose(middlewareEnhancer, reduxDevtoolsEnhancer),
  )
);

export default store();
