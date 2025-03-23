import React from "react";
import MovieCard from "../../common/MovieCard";
import useFetchCustom from "../../../hooks/useFetchCustom";
import { BASE_IMAGE_URL, API_URL_TOP_RATED } from "../../../configs/config";

function MoviesHome() {
  const {
    data: moviesData,
    loading,
    error,
  } = useFetchCustom(API_URL_TOP_RATED);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  const slicedmovies = Array.isArray(moviesData) ? moviesData.slice(0, 4) : [];

  return (
    <>
      <section className="movie-section-container relative">
        <div className="movies-header pt-6 md:pt-[40px] px-4 md:px-[5%] pb-4 md:pb-[20px] text-center">
          <p className="text-[16px] md:text-[18px] font-bold leading-tight md:leading-[34px] tracking-[0.75px] text-[#1d4ed8]">
            MOVIES
          </p>
          <h2 className="text-[24px] md:text-[32px] font-normal leading-snug md:leading-[1.4] tracking-[1px] mb-4 md:mb-[28px]">
            Exciting Movies That Should Be
            <br className="hidden md:block" />
            Watched Today
          </h2>
        </div>
        <div className="movie-grid px-4 md:px-[5%] py-3 md:py-[18px] flex gap-4 md:gap-[20px] justify-start flex-nowrap overflow-x-auto pb-6 md:pb-[20px] [scroll-snap-type:x_mandatory] touch-pan-x scrollbar-hide -mx-1 px-5">
          {slicedmovies.map(({ id, title, poster_path }) => (
            <MovieCard
              key={id}
              imageUrl={`${BASE_IMAGE_URL}${poster_path}`}
              title={title}
              id={id}
            />
          ))}
        </div>
        <div className="hidden md:flex justify-center pt-4">
          <a
            href="/movies"
            className="text-blue-700 hover:text-blue-900 font-medium"
          >
            View All Movies
          </a>
        </div>
      </section>
    </>
  );
}

export default MoviesHome;
