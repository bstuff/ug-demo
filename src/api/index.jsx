import axios from 'axios';

export function fetchReleases(query) {
  if (!query) return Promise.reject(new Error('empty query'));
  return axios.get(`http://musicbrainz.org/ws/2/release/?inc=artist-credits+labels+discids+recordings&fmt=json&query=${query}&limit=10`).then(r => r.data);
}
