import React, { createContext, Dispatch, useContext, useReducer } from 'react';
import { DefaultProps, DispatchActionType, InitStateType } from './types/types';
import Reducer from './reducer';

export const InitState = {
  // system
  toggleMenu: 0,
  // others
  user: {
    id: 0,
    username: '',
    status: 'online',
  },
  friends: [],
  roomId: '',
  messages: [],
};

const Ctx = createContext<{ state: InitStateType; dispatch: Dispatch<DispatchActionType> }>({
  state: InitState,
  dispatch: () => null,
});

export function useDispatch() {
  return useContext(Ctx);
}

const Provider: React.FC<DefaultProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitState);

  return (
    <Ctx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Ctx.Provider>
  );
};

export default Provider;
