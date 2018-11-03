import axios from 'axios';

export const fetchArtist = (artistId) => (
  axios.get(`/api/v1/artists/${artistId}.json`).then(
    response => { return response.data }
  )
);

export const fetchArtists = () => (
  axios.get(`/api/v1/artists.json`).then(
    response => { return response.data }
  )
);
