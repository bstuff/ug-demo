import { combineEpics } from 'redux-observable';

import releasesReducer from '../components/Releases/redux/releases.reducer';
import favoritesReducer from '../components/Releases/redux/favorites.reducer';
import { fetchReleasesEpic } from '../components/Releases/redux/releases.epics';

export const reducers = {
  releases: releasesReducer,
  favorites: favoritesReducer,
};

export const rootEpic = combineEpics(
  fetchReleasesEpic,
);
