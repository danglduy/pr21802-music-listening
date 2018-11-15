import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get(`/api/v1/account.json`).then(
    response => { return response.data }
  )
);
