// @flow
import React from 'react';
import { connect } from 'react-redux';

import { fetchReleases } from './redux/releases.actions';

import { SearchBar as DumbSearchBar } from '../SearchBar';
import { ReleaseList as DumbReleaseList } from '../ReleaseList';

const SearchBar = connect(
  null,
  (dispatch, ownProps) => ({
    onSubmit: (query) => dispatch(fetchReleases(query)),
  }),
)(DumbSearchBar);

const ReleaseList = connect(
  state => ({
    releases: state.releases.searchResults,
  }),
)(DumbReleaseList);

export function Releases() {
  return (
    <div>
      <SearchBar />
      <ReleaseList />
    </div>
  );
}
