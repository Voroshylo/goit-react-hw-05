import axios from "axios";

const API_KEY = "75ba3df2b01fe21f69f94a772ea666e8";
const BASE_URL = "https://api.themoviedb.org/3";

const fetchApi = async (url, options = {}) => {
  try {
    const response = await axios.get(url, {
      ...options,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTrendingMovies = () => {
  return fetchApi(`${BASE_URL}/trending/movie/day`);
};

export const getMoviesByQuery = (query) => {
  return fetchApi(`${BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
};

export const getMovieDetails = (movieId) => {
  return fetchApi(`${BASE_URL}/movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
};

export const getMovieCast = (movieId) => {
  return fetchApi(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
};

export const getMovieReviews = (movieId) => {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
    },
  });
};
