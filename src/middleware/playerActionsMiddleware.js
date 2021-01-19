import * as actionTypes from '../../assets/contants/actionTypes';
import * as playerActions from '../views/actions/player';

const handleMovingPlayerAnimation = ({ player }, dispatch, next, action) => {
  const { isMoving, x, y } = player;

  if (!isMoving) {
    dispatch(playerActions.playerIsMoving());
    next(action);
    setTimeout(() => {
      dispatch(playerActions.setPlayerPosition(
        action.payload.x,
        action.payload.y,
      ));
      dispatch(playerActions.playerIsMoving());
    }, 200);
  } else {
    next({
      ...action,
      payload: {
        x,
        y,
      },
    });
  }
};

export default ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === actionTypes.PLAYER_MOVING) {
    handleMovingPlayerAnimation(getState(), dispatch, next, action);
  } else {
    next(action);
  }
};
