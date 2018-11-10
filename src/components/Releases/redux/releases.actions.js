import * as types from './releases.types';

export const fetchReleases = (payload: string) => ({
  type: types.FETCH_RELEASES,
  payload,
});

export const fetchReleasesComplete = (payload: mixed) => ({
  type: types.FETCH_RELEASES_COMPLETE,
  payload,
});

