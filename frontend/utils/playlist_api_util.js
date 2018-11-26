import axios from 'axios';

export const fetchUserPlaylists = (userId) => (
  axios.get(`/api/v1/users/${userId}/playlists.json`).then(
    response => {return response.data}
  )
);

export const fetchUserPlaylist = (userId, playlistId) => (
  axios.get(`/api/v1/users/${userId}/playlists/${playlistId}.json`).then(
    response => {return response.data}
  )
);

export const fetchPlaylist = playlistId => (
  axios.get(`/api/v1/playlists/${playlistId}.json`).then(
    response => {return response.data}
  )
);
