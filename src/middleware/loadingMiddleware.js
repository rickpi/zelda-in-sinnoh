import * as actionTypes from '../../assets/contants/actionTypes';
import * as settingsActions from '../views/actions/settings';
import * as screenActions from '../views/actions/screen';

import level1 from '../../assets/data/levels/level1';

const loadDataInLocalStorage = new Promise((resolve) => {
  level1.forEach((screen, index) => {
    localStorage.setItem(`level1_${index}`, JSON.stringify(screen));
  });
  resolve();
});

const loadScreen = ({ settings }, dispatch) => new Promise((resolve) => {
  const { screen, level } = settings;
  const newScreen = JSON.parse(localStorage.getItem(`level${level}_${screen}`));

  dispatch(screenActions.setScreen(newScreen));
  setTimeout(() => resolve(), 2000);
});

export default ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === actionTypes.SET_UP_DONE) {
    dispatch(settingsActions.loading());
    next(action);
    loadDataInLocalStorage
      .then(() => loadScreen(getState(), dispatch))
      .then(() => dispatch(settingsActions.loading()));
  } else {
    next(action);
  }
};
