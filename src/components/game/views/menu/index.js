import React from 'react';

import store from '../../../../store';
import * as gameActions from '../../actions';

const Menu = () => (
  <div className="board">
    <button type="button" onClick={() => store.dispatch(gameActions.init())}>
      {'Commencer l\'aventure'}
    </button>
  </div>
);

export default Menu;
