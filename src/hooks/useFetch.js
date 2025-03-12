import { useState, useEffect } from "react";
import { BASE_IMAGE_URL, API_KEY } from "../configs/config";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const fetchMoviesTmbd = (url) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Http error! status: ${response.status}`);
        }

        let jsonMovies = await response.json();
        jsonMovies = jsonMovies.results;
        jsonMovies = jsonMovies.map((movie) => {
          const {
            id,
            title,
            poster_path,
            backdrop_path,
            overview,
            release_date,
            vote_average,
            vote_count,
          } = movie;
          return {
            id,
            title,
            imageUrl: `${BASE_IMAGE_URL}${poster_path}`,
            backdropUrl: `${BASE_IMAGE_URL}${backdrop_path}`,
            overview,
            releaseDate: release_date,
            rating: vote_average,
            voteCount: vote_count,
          };
          //   console.log(title);
        });
        // console.log(jsonMovies);
        setMovie(jsonMovies);
        setError(null);
      } catch (error) {
        setError(error.message);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [url]);

  return { movie, loading, error };
  //   console.log(movie);
};

export default fetchMoviesTmbd;
