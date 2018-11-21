import axios from 'axios';

export const fetchSearchResults = (string) => (
  axios.get(`/api/v1/search.json?q=${string}`).then(
    response => { return response.data }
  )
);
