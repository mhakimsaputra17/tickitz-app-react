import React from "react";
import HeroDetail from "../../components/ui/Hero/HeroDetail";
import useFetchGenre from "../../hooks/useFetchGenre";
import { useParams } from "react-router";
import { BASE_IMAGE_URL } from "../../configs/config";

function MovieDetail() {
  let { movieId } = useParams();
  const {
    data: moviesData,
    loading,
    error,
  } = useFetchGenre(`
   https://api.themoviedb.org/3/movie/${movieId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!moviesData) return <div>No movie data available</div>;
  console.log(moviesData);

  // convert runtime minutes to hours and minutes
  const hours = Math.floor(moviesData.runtime / 60);
  const minutes = moviesData.runtime % 60;
  console.log(hours, minutes);

  return (
    <>
      <HeroDetail
        id={moviesData.id}
        key={moviesData.id}
        backdrop={`${BASE_IMAGE_URL}${moviesData.backdrop_path}`}
        imageUrl={`${BASE_IMAGE_URL}${moviesData.poster_path}`}
        title={
          moviesData.original_title
            ? moviesData.original_title
            : moviesData.name
        }
        genres={moviesData.genres}
        overview={moviesData.overview}
        release_date={moviesData.release_date}
        runtime={`${hours}h ${minutes}m`}
        production_companies={moviesData.production_companies}
      />
    </>
  );
}

export default MovieDetail;
