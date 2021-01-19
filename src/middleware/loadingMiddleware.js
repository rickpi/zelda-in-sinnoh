import * as actionTypes from '../../assets/contants/actionTypes';
import * as settingsActions from '../views/actions/settings';
import * as screenActions from '../views/actions/screen';
import * as screenControllerActions from '../controllers/actions/screenController';
import * as playerActions from '../views/actions/player';

import level1 from '../../assets/data/levels/level1';

const saveDataInLocalStorage = ({
  settings,
  screen,
  screenController,
}) => new Promise((resolve) => {
  const { screen: currentScreen, level } = settings;
  const { tiles } = screen;
  const { tiles: tilesData } = screenController;
  const screenToSave = tilesData.map((tileData, index) => {
    const { id, ...tile } = tiles[index];
    return {
      ...tileData,
      ...tile,
    };
  });

  localStorage.setItem(`level${level}_${currentScreen}`, JSON.stringify(screenToSave));
  resolve();
});

const loadDataInLocalStorage = new Promise((resolve) => {
  level1.forEach((screen, index) => {
    localStorage.setItem(`level1_${index}`, JSON.stringify(screen));
  });
  resolve();
});

const loadScreenData = ({ settings }, dispatch) => new Promise((resolve) => {
  const { screen, level } = settings;
  console.log(settings);
  const newScreen = JSON.parse(localStorage.getItem(`level${level}_${screen}`));

  dispatch(screenActions.setScreen(newScreen));
  dispatch(screenControllerActions.setScreenController(newScreen));
  resolve();
});

const loadPlayerData = ({ settings }, dispatch) => new Promise((resolve) => {
  const { character, evolutionStep } = settings;

  dispatch(playerActions.setPlayerCharacter(character, evolutionStep));
  resolve();
});

export default ({ getState, dispatch }) => (next) => (action) => {
  switch (action.type) {
    case actionTypes.SET_UP_DONE:
      dispatch(settingsActions.loading());
      next(action);
      loadDataInLocalStorage
        .then(() => loadScreenData(getState(), dispatch))
        .then(() => loadPlayerData(getState(), dispatch))
        .then(() => {
          setTimeout(() => dispatch(settingsActions.loading()), 2000);
        });
      break;
    case actionTypes.UPDATE_SCREEN:
      dispatch(settingsActions.loading());
      saveDataInLocalStorage(getState())
        .then(() => {
          console.log(action);
          next(action);
          loadScreenData(getState(), dispatch);
        })
        .then(() => {
          setTimeout(() => dispatch(settingsActions.loading()), 2000);
        });
      break;
    default:
      next(action);
      break;
  }
};
