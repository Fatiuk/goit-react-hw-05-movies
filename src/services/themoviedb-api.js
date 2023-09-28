import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '7780ec8605be03cd90f6c3c79c4b9d6f';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  if (response.status === 200) {
    console.log(response.data.results);
    return response.data.results;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};
