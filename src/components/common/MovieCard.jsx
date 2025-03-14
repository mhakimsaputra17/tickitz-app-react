import React from "react";
import MovieTags from "./MovieTags";
import ButtonMovie from "./ButtonMovie";

function MovieCard({ id, imageUrl, title, onButtonClick }) {
  return (
    <>
      <div className="movie-card mb-[30px] transition-all duration-300 active:-translate-y-2 hover:-translate-y-2 [scroll-snap-align:start]">
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
        <MovieTags />
      </div>
    </>
  );
}

export default MovieCard;
