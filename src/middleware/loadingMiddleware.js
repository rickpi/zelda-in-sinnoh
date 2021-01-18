import * as actionTypes from '../../assets/contants/actionTypes';
import * as settingsActions from '../views/actions/settings';

import level1 from '../../assets/data/levels/level1';

const loadDataInLocalStorage = () => {
  level1.forEach((screen, index) => {
    localStorage.setItem(`level1_${index}`, JSON.stringify(screen));
  });
};

export default ({ dispatch }) => (next) => (action) => {
  if (action.type === actionTypes.SET_UP_DONE) {
    dispatch(settingsActions.loading());
    loadDataInLocalStorage();
    next(action);
    setTimeout(() => dispatch(settingsActions.loading()), 3000);
  } else {
    next(action);
  }
};
