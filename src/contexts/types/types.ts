import React from 'react';
import { IReset, IRoom, IToggleMenu, IUser } from './intefaces';

export type UserStateType = {
  id: number;
  username: string;
  status: 'online' | 'offline' | string;
};

export type UserMessageType = {
  id: number;
  username: string;
  message: string;
};

export type InitStateType = {
  toggleMenu: boolean;
  user: UserStateType;
  friends: string[];
  roomId: string;
  messages: UserMessageType[];
};

export type DefaultProps = {
  children: React.ReactNode;
};

export type DispatchActionType = IToggleMenu | IUser | IRoom | IReset;
