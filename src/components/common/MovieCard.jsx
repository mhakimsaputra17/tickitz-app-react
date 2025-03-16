import React from "react";
import MovieTags from "./MovieTags";
import ButtonMovie from "./ButtonMovie";
import useFetchCustom from "../../hooks/useFetchCustom";
import useFetchGenre from "../../hooks/useFetchGenre";
// import { API_URL_MOVIE_DETAILS } from "../../configs/config";

function MovieCard({ id, imageUrl, title, onButtonClick }) {
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
      <div className=" movie-card mb-[30px] transition-all duration-300 active:-translate-y-2 hover:-translate-y-2 [scroll-snap-align:start] ">
        <div className="poster relative overflow-hidden rounded-[8px] [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.1)]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto [aspect-ratio:2/3] object-cover rounded-[8px] transition transform duration-500 ease-in-out hover:scale-105"
          />
          <ButtonMovie />
        </div>
        <h3 className="mt-[19px] text-[20px] font-bold leading-[1.4] tracking-[1px]">
          {title}
        </h3>
        <div className="tags flex gap-[10px] mt-[14px] flex-wrap">
          {genres.map((genre) => (
            <span
              key={genre}
              className="tag text-[#a0a3bd] bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieCard;
