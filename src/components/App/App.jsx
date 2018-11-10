// @flow
import React from 'react';
// import { hot, setConfig } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import styles from './App.styl';

import { Releases } from '../Releases';
import { configureStore } from '../../redux/configureStore';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.app}>
        <Releases />
      </div>
    </PersistGate>
  </Provider>
);

// setConfig({ logLevel:process.env.NODE_ENV === 'development' ? 'info' : 'error' });

// export default hot(module)(App);
export default (App);
