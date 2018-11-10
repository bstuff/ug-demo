// @flow
// import { filter } from 'lodash-es';
import _ from 'lodash-es';
import * as types from './releases.types';

const initial = {
  favorites: [],
};


export default (state: typeof initial = initial, action: Object) => {
  switch (action.type) {
  case types.ADD_TO_FAVORITES: {
    const fav = action.payload;
    if (state.favorites.some(e => e.id === fav.id)) {
      return state;
    }
    return {
      ...state,
      favorites: [
        ...state.favorites,
        fav,
      ],
    };
  }
  case types.REMOVE_FROM_FAVORITES: {
    const fav = action.payload;
    return {
      ...state,
      favorites: _.filter(state.favorites, f => f.id !== fav.id),
    };
  }
  default:
    return state;
  }
};
