// @flow
import React from 'react';

import { AlbumItem, type Album } from '../AlbumItem';

export function ReleaseList({
  releases = [],
}: {
  releases: Album[],
}) {
  return (
    <div>
      {releases.map(album => <AlbumItem album={album} />)}
    </div>
  );
}
