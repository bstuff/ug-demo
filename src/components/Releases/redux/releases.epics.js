// @flow
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, delay } from 'rxjs/operators';

import * as types from './releases.types';
import * as actions from './releases.actions';

export function fetchReleasesEpic(action$) {
  return action$.pipe(
    ofType(types.FETCH_RELEASES),
    mergeMap(
      action => ajax
        .getJSON(`http://musicbrainz.org/ws/2/release/?inc=artist-credits+labels+discids+recordings&fmt=json&query=${action.payload}&limit=10`)
        .pipe(
          delay(Math.random() * 1000),
          map((response) => {
            // console.log('>>>', response);
            return actions.fetchReleasesComplete(response.releases);
          }),
        ),
    ),
  );
}
