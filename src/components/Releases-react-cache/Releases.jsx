// @flow
import React, { Suspense, useState, lazy } from 'react';
import { unstable_createResource as createResource } from 'react-cache';

import { fetchReleases } from '../../api';

// import { SearchBar } from '../SearchBar';
import { ReleaseList } from '../ReleaseList';

const SearchBar = lazy(() => import(/* webpackChunkName: "SearchBar.component" */ '../SearchBar'));

const ReleasesResource = createResource(
  query => fetchReleases(query).then((r) => {
    console.log('....', r);
    return r.releases;
  }).catch((e) => {
    console.warn(e);
    return [];
  }),
);


export function Releases() {
  const [ query, setQuery ] = useState('');
  return (
    <div>
      <SearchBar onSubmit={setQuery} query={query} />
      <Suspense fallback={<div>Loading...</div>}>
        <ReleaseList releases={ReleasesResource.read(query)} />
      </Suspense>
    </div>
  );
}
