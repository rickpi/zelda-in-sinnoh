import { actionsType } from './actions';

const initialState = {
  name: 'crehelf',
  frame: 0,
  orientation: 'front',
  posX: 12,
  posY: 5,
  isMoving: false,
  movingDirection: '',
};

const nextFrameNPC = (state) => {
  const { frame } = state;

  return {
    ...state,
    frame: frame >= 3 ? 0 : frame + 1,
  };
};

const crehelf = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.NEXT_FRAME_NPC:
      return nextFrameNPC(state);
    default:
      return state;
  }
};

export default crehelf;
