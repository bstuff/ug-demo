// @flow
import React from 'react';

import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import { addToFavorites, removeFromFavorites } from '../Releases/redux/releases.actions';


export type Album = {
  id: string,
  score: number,
  count: number,
  title: string,
  status: string,
  packaging: string,
};

export function AlbumItem({
  album,
  isFavorite = false,
  onClick = console.log,
}: {
  album: Album,
  isFavorite: boolean,
  onClick: Function,
}) {
  if (!album) {
    return null;
  }

  return (
    <div>
      <div>{`Название: ${album.title}`}</div>
      <button
        type="button"
        onClick={onClick}
      >
        {isFavorite ? 'Удалить' : 'Добавить'}
      </button>
    </div>
  );
}

export const ConnectedAlbumItem = compose(
  connect(
    (state, ownProps) => ({
      isFavorite: state.favorites.favorites.some(e => e.id === ownProps.album.id),
    }),
    (dispatch, ownProps) => ({
      addToFavorites: () => dispatch(addToFavorites(ownProps.album)),
      removeFromFavorites: () => dispatch(removeFromFavorites(ownProps.album)),
    }),
  ),
  mapProps(
    ownProps => ({
      album: ownProps.album,
      isFavorite: ownProps.isFavorite,
      onClick: ownProps.isFavorite ? ownProps.removeFromFavorites : ownProps.addToFavorites,
    }),
  ),
)(AlbumItem);
