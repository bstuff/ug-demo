// @flow
import React from 'react';
import delay from 'delay';

import { ReleaseList } from '../ReleaseList';
import { fetchReleases } from '../../api';


export function SearchResults({
  results = fetchReleases('mile'),
  // results = fetch([]),
}) {
  const LazyReleaseList = lazy(
    () => delay(1500)
      .then(() => results)
      .then(res => <ReleaseList results={res.releases} />),
  );
  return <LazyReleaseList />
}
