import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '964aa706dab4c3295b22f686e0c720cc';
const PATH_TRENDING = 'movie/popular';
const PATH_MOVIE = 'search/movie';
const PATH_DETAILS = 'movie';

const fetchPath = path => axios.get(path).then(r => r.data);

export const fetchTrendingFilms = () =>
  fetchPath(`${BASE_URL}${PATH_TRENDING}?api_key=${API_KEY}`);

export const fetchSearchedFilms = ({ query = 'trending', page = 1 }) =>
  fetchPath(
    `${BASE_URL}${PATH_MOVIE}?api_key=${API_KEY}&query=${query}&${page}`
  );

export const fetchFilmDetails = movieId =>
  fetchPath(`${BASE_URL}${PATH_DETAILS}/${movieId}?api_key=${API_KEY}`);
