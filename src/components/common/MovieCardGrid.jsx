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
  if (loading) return <div className="text-center py-8">Loadi ng...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  const genres = movieDetail.genres.map((genre) => genre.name);
  return (
    <>
      <div
        key={id}
        className="movie-card mb-7 transition-transform ease-in-out duration-300 hover:translate-y-[-10px]"
      >
        <div className="poster relative overflow-hidden rounded-lg shadow-md">
          {vote_average > 8 && (
            <div className="badge-recommendation absolute top-2 left-2 rounded-xl rounded-bl-none bg-blue-800 text-white px-2 py-1 text-xs font-semibold flex items-center gap-2 z-10 shadow-md animate-pulse">
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
        <h3 className="mt-5 text-lg font-bold leading-5 tracking-wider">
          {title}
        </h3>
        <div className="tags flex gap-2 mt-3 flex-wrap">
          {genres.map((genre) => (
            <span
              key={genre}
              className="tag bg-gray-200/10 rounded-full text-xs text-gray-500 font-normal px-3 py-1"
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
