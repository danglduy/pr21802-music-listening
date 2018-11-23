import axios from 'axios';

export const fetchCategory = (categoryId) => (
  axios.get(`/api/v1/categories/${categoryId}.json`).then(
    response => { return response.data }
  )
);

export const fetchCategories = () => (
  axios.get(`/api/v1/categories.json`).then(
    response => { return response.data }
  )
);
