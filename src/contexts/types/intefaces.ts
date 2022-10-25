import { INIT_USER, INIT_USER_ROOM, RESET_APP, TOGGLE_MENU } from '../actions';
import { UserStateType } from './types';

export interface IToggleMenu {
  type: typeof TOGGLE_MENU;
  payload: number;
}

export interface IUser {
  type: typeof INIT_USER;
  payload: UserStateType;
}

export interface IRoom {
  type: typeof INIT_USER_ROOM;
  payload: string;
}

export interface IReset {
  type: typeof RESET_APP;
}
