import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Game from './components/game';

import './assets/css/index.css';
import './assets/css/game.css';
import './assets/css/player/tortipouss.css';
import './assets/css/player/boskara.css';
import './assets/css/player/torterra.css';
import './assets/css/player/ouisticram.css';
import './assets/css/player/chimpenfeu.css';
import './assets/css/player/simiabraz.css';
import './assets/css/player/tiplouf.css';
import './assets/css/player/prinplouf.css';
import './assets/css/player/pingoleon.css';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('app'),
);
