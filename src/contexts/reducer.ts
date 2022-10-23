import { DispatchActionType, InitStateType } from './types/types';
import { INIT_USER, INIT_USER_ROOM, RESET_APP, TOGGLE_MENU } from './actions';
import { InitState } from './Provider';

const Reducer = (state: InitStateType, action: DispatchActionType): InitStateType => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        toggleMenu: !state.toggleMenu,
      };
    case INIT_USER:
      return state;
    case INIT_USER_ROOM:
      return state;
    case RESET_APP:
      return InitState;

    default:
      return state;
  }
};

export default Reducer;
