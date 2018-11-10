// @flow
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import { reducers, rootEpic } from './reducers';

const dev = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage,
  debug: dev,
  whitelist: ['favorites'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers));

const epicMiddleware = createEpicMiddleware();


const enhancer = applyMiddleware(...[
  // routerMiddleware(history),
  epicMiddleware,
  dev && logger,
].filter(p => p));


export const configureStore = (initialState = {}) => {
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return {
    store,
    persistor,
  };
};
