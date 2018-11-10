import * as types from './releases.types';

export const fetchReleases = (payload: string) => ({
  type: types.FETCH_RELEASES,
  payload,
});

export const fetchReleasesComplete = (payload: mixed) => ({
  type: types.FETCH_RELEASES_COMPLETE,
  payload,
});

export const addToFavorites = (payload: mixed) => ({
  type: types.ADD_TO_FAVORITES,
  payload,
});

export const removeFromFavorites = (payload: mixed) => ({
  type: types.REMOVE_FROM_FAVORITES,
  payload,
});

