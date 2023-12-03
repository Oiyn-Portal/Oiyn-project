import { combineReducers } from 'redux';

import { State as StateGames, games } from 'src/reducers/games';
import { State as StateLoader, loader } from 'src/reducers/loader';
import { State as StateModals, modals } from 'src/reducers/modals';
import {
  State as StateNotifications,
  notifications,
} from 'src/reducers/notifications';
import { State as StateUser, user } from 'src/reducers/user';

export interface ReduxState {
  user: StateUser;
  loader: StateLoader;
  modals: StateModals;
  notifications: StateNotifications;
  games: StateGames;
}

export const initialState = {
  user: user.initialState,
  loader: loader.initialState,
  modals: modals.initialState,
  notifications: notifications.initialState,
  games: games.initialState,
};

export const rootReducer = combineReducers<ReduxState>({
  user: user.reducer,
  loader: loader.reducer,
  modals: modals.reducer,
  notifications: notifications.reducer,
  games: games.reducer,
});
