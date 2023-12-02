import { Middleware, Store, applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END, Saga, Task } from 'redux-saga';

import { actions } from 'src/actions';
import { APP_VERSION } from 'src/constants/env';
import { ReduxState, initialState, rootReducer } from 'src/reducers';
import { rootSaga } from 'src/sagas';

interface IExtendedStore extends Store<ReduxState> {
  runSaga?: <S extends Saga>(saga: S, ...args: Parameters<S>) => Task;
  close?: () => void;
}

const persistConfig = {
  key: APP_VERSION,
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

const THROTTLE_TIMEOUT = 3000;

const THROTTLE_ACTIONS = [
  actions.api.client.phoneVerifyStart.started,
  actions.api.client.phoneVerifyEnd.started.type,
  actions.api.appointments.addAppointment.started.type,
];

const progress: Record<string, number> = {};

const throttleMiddleware: Middleware = () => (next) => (action) => {
  const now = Date.now();

  if (THROTTLE_ACTIONS.includes(action.type)) {
    const inProgress = progress[action.type];

    if (inProgress && now - inProgress < THROTTLE_TIMEOUT) {
      return next({ type: 'empty' });
    }

    Object.keys(progress).forEach((item) => {
      if (now - progress[item] >= THROTTLE_TIMEOUT) {
        delete progress[item];
      }
    });

    progress[action.type] = now;
  }

  return next(action);
};

const enhancer = applyMiddleware(throttleMiddleware, sagaMiddleware);

export const store = createStore(
  persistedReducer,
  initialState,
  enhancer
) as IExtendedStore;

store.runSaga = sagaMiddleware.run;
store.close = () => store.dispatch(END);
store.runSaga(rootSaga);

export const persistor = persistStore(store);
