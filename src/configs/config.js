export const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
export const TMDB_API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL_POPULAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=6";
export const API_URL_TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&";
export const API_URL_UPCOMING =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const API_URL_NOW_PLAYING =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=6";
export const API_URL_GENRE =
  "https://api.themoviedb.org/3/genre/movie/list?language=en-US";
export const API_URL_SEARCH =
  "https://api.themoviedb.org/3/search/movie?language=en-US&query=";
// export const API_URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}`;
export const API_URL_MOVIE_DISCOVER = `https://api.themoviedb.org/3/discover/movie`;
