// @flow
import * as types from './releases.types';

const initial = {
  isLoading: false,
  searchResults: [],
};


export default (state: typeof initial = initial, action) => {
  switch (action.type) {
  case types.FETCH_RELEASES:
    return {
      ...state,
      isLoading: true,
    };
  case types.FETCH_RELEASES_COMPLETE:
    return {
      ...state,
      isLoading: false,
      searchResults: action.payload,
    };
  case types.FETCH_RELEASES_FAILED:
    return {
      ...state,
      isLoading: false,
    };
  default:
    return state;
  }
};
