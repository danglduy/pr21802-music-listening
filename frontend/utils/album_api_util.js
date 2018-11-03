import axios from 'axios';

export const fetchArtistAlbums = (artistId) => (
  axios.get(`/api/v1/artists/${artistId}/albums.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbums = () => (
  axios.get(`/api/v1/albums.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbum = (albumId) => (
  axios.get(`/api/v1/albums/${albumId}.json`).then(
    response => { return response.data }
  )
);
