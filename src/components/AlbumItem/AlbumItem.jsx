// @flow
import React from 'react';

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
}: {
  album: Album,
}) {
  if (!album) {
    return null;
  }

  return (
    <div>
      <div>{`Название: ${album.title}`}</div>
    </div>
  );
}
