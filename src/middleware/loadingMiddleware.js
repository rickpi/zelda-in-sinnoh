import * as actionTypes from '../../assets/contants/actionTypes';
import * as settingsActions from '../views/actions/settings';

export default ({ dispatch }) => (next) => (action) => {
  // console.log(dispatch);
  // console.log(action);

  if (action.type === actionTypes.SET_UP_DONE) {
    dispatch(settingsActions.loading());
    next(action);
    setTimeout(() => dispatch(settingsActions.loading()), 3000);
  } else {
    next(action);
  }
};
