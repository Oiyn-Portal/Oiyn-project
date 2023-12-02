import { combineReducers } from 'redux';

import { State as StateFiles, files } from 'src/reducers/files';
import { State as StateLoader, loader } from 'src/reducers/loader';
import { State as StateModals, modals } from 'src/reducers/modals';
import {
  State as StateNotifications,
  notifications,
} from 'src/reducers/notifications';
import { State as StateUser, user } from 'src/reducers/user';

export interface ReduxState {
  user: StateUser;
  files: StateFiles;
  loader: StateLoader;
  modals: StateModals;
  notifications: StateNotifications;
}

export const initialState = {
  user: user.initialState,
  files: files.initialState,
  loader: loader.initialState,
  modals: modals.initialState,
  notifications: notifications.initialState,
};

export const rootReducer = combineReducers<ReduxState>({
  user: user.reducer,
  files: files.reducer,
  loader: loader.reducer,
  modals: modals.reducer,
  notifications: notifications.reducer,
});
