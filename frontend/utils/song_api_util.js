import axios from 'axios';

export const fetchArtistSongs = (artistId) => (
  axios.get(`/api/v1/artists/${artistId}/songs.json`).then(
    response => { return response.data }
  )
);

export const fetchAlbumSongs = (albumId) => (
  axios.get(`/api/v1/albums/${albumId}/songs.json`).then(
    response => { return response.data }
  )
);

export const fetchSong = (songId) => (
  axios.get(`/api/v1/songs/${songId}.json`).then(
    response => { return response.data }
  )
);
