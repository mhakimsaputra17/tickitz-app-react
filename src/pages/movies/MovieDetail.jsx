import React from "react";
import HeroDetail from "../../components/ui/Hero/HeroDetail";
import useFetchGenre from "../../hooks/useFetchGenre";
import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../configs/config";
import BookTicket from "../../components/ui/BookTicket/BookTicket";

function MovieDetail() {
  let { movieId } = useParams();
  const {
    data: moviesData,
    loading,
    error,
  } = useFetchGenre(`
   https://api.themoviedb.org/3/movie/${movieId}`);

  const {
    data: creditsData,
    loading: creditsLoading,
    error: creditsError,
  } = useFetchGenre(`
    https://api.themoviedb.org/3/movie/${movieId}/credits`);

  if (loading || creditsLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (creditsError) return <div>Error: {creditsError}</div>;
  if (!moviesData) return <div>No movie data available</div>;
  if (!creditsData) return <div>No Credits data available</div>;
  console.log(moviesData);
  console.log(creditsData);

  // convert runtime minutes to hours and minutes
  const hours = Math.floor(moviesData.runtime / 60);
  const minutes = moviesData.runtime % 60;
  console.log(hours, minutes);

  return (
    <div className="w-full overflow-x-hidden">
      <HeroDetail
        cast={creditsData}
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

      <BookTicket movieData={moviesData} />
    </div>
  );
}

export default MovieDetail;
