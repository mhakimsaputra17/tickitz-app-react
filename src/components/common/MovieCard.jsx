import React from "react";
import MovieTags from "./MovieTags";
import ButtonMovie from "./ButtonMovie";
import useFetchCustom from "../../hooks/useFetchCustom";
import useFetchGenre from "../../hooks/useFetchGenre";

function MovieCard({ id, imageUrl, title, onButtonClick }) {
  const {
    data: movieDetail,
    loading,
    error,
  } = useFetchGenre(`https://api.themoviedb.org/3/movie/${id}`);
  if (loading)
    return <div className="text-center py-4 md:py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-4 md:py-8 text-red-500">
        Error: {error}
      </div>
    );

  const genres = movieDetail.genres.map((genre) => genre.name);

  return (
    <div className="movie-card w-full md:min-w[160px] md:w[160px] mb-5 md:mb-[30px] transition-all duration-300 active:-translate-y-1 md:active:-translate-y-2 hover:-translate-y-1 md:hover:-translate-y-2 [scroll-snap-align:start]">
      <div className="poster relative overflow-hidden rounded-[8px] [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.1)]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto [aspect-ratio:2/3] object-cover rounded-[8px] transition transform duration-500 ease-in-out hover:scale-105"
        />
        <ButtonMovie id={id} />
      </div>
      <h3 className="mt-3 md:mt-[19px] text-[16px] md:text-[20px] font-bold leading-[1.3] md:leading-[1.4] tracking-[0.5px] md:tracking-[1px]">
        {title}
      </h3>
      <div className="tags flex gap-[6px] md:gap-[10px] mt-2 md:mt-[14px] flex-wrap">
        {genres.map((genre) => (
          <span
            key={genre}
            className="tag text-[#a0a3bd] bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[10px] md:text-[11px] text-center font-normal leading-[normal] px-[10px] md:px-[15px] py-[3px] md:py-[5px]"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MovieCard;
