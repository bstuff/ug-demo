import { combineEpics } from 'redux-observable';

import releasesReducer from '../components/Releases/redux/releases.reducer';
import { fetchReleasesEpic } from '../components/Releases/redux/releases.epics';

export const reducers = {
  releases: releasesReducer,
};

export const rootEpic = combineEpics(
  fetchReleasesEpic,
);
