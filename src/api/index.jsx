import axios from 'axios';

export function fetchReleases(query) {
  return axios.get('http://musicbrainz.org/ws/2/release/?inc=artist-credits+labels+discids+recordings&fmt=json&query=mile&limit=3').then(r => r.data);
}
