import React from "react";
import MovieCard from "./MovieCard";
import useFetchCustom from "../../hooks/useFetchCustom";
import useFetchGenre from "../../hooks/useFetchGenre";
import ButtonMovie from "./ButtonMovie";

function MovieCardGrid({
  apiUrl,
  limit = 8,
  id,
  imageUrl,
  title,
  onButtonClick,
  vote_average,
}) {
  const {
    data: movieDetail,
    loading,
    error,
  } = useFetchGenre(`https://api.themoviedb.org/3/movie/${id}`);
  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  const genres = movieDetail.genres.map((genre) => genre.name);
  return (
    <>
      <div
        key={id}
        className="movie-card mb-5 md:mb-7 transition-transform ease-in-out duration-300 hover:translate-y-[-10px]"
      >
        <div className="poster relative overflow-hidden rounded-lg shadow-md">
          {vote_average > 8 && (
            <div className="badge-recommendation absolute top-2 left-2 rounded-xl rounded-bl-none bg-blue-800 text-white px-1 md:px-2 py-0.5 md:py-1 text-[8px] md:text-xs font-semibold flex items-center gap-1 md:gap-2 z-10 shadow-md animate-pulse">
              Recommendation
            </div>
          )}
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto aspect-[2/3] object-cover rounded-lg transition-transform ease-in-out duration-500 hover:scale-105"
          />
          <ButtonMovie id={id} />
        </div>
        <h3 className="mt-2 md:mt-5 text-sm md:text-lg font-bold leading-tight tracking-wider line-clamp-1">
          {title}
        </h3>
        <div className="tags flex gap-1 md:gap-2 mt-1 md:mt-3 flex-wrap">
          {genres.slice(0, 2).map((genre) => (
            <span
              key={genre}
              className="tag bg-gray-200/10 rounded-full text-[8px] md:text-xs text-gray-500 font-normal px-1.5 md:px-3 py-0.5 md:py-1"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieCardGrid;
