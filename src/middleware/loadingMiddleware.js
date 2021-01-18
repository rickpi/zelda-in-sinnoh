import * as actionTypes from '../../assets/contants/actionTypes';
import * as settingsActions from '../views/actions/settings';
import * as screenActions from '../views/actions/screen';
import * as playerActions from '../views/actions/player';

import level1 from '../../assets/data/levels/level1';

const loadDataInLocalStorage = new Promise((resolve) => {
  level1.forEach((screen, index) => {
    localStorage.setItem(`level1_${index}`, JSON.stringify(screen));
  });
  resolve();
});

const loadScreenData = ({ settings }, dispatch) => new Promise((resolve) => {
  const { screen, level } = settings;
  const newScreen = JSON.parse(localStorage.getItem(`level${level}_${screen}`));

  dispatch(screenActions.setScreen(newScreen));
  resolve();
});

const loadPlayerData = ({ settings }, dispatch) => new Promise((resolve) => {
  const { character, evolutionStep } = settings;

  dispatch(playerActions.setPlayerCharacter(character, evolutionStep));
  setTimeout(() => resolve(), 2000);
});

export default ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === actionTypes.SET_UP_DONE) {
    dispatch(settingsActions.loading());
    next(action);
    loadDataInLocalStorage
      .then(() => loadScreenData(getState(), dispatch))
      .then(() => loadPlayerData(getState(), dispatch))
      .then(() => dispatch(settingsActions.loading()));
  } else {
    next(action);
  }
};
