import React from "react";
import MovieCard from "../../common/MovieCard";
// import useFetch from "../../../hooks/useFetch";
import useFetchCustom from "../../../hooks/useFetchCustom";
import {
  BASE_IMAGE_URL,
  API_URL_POPULAR,
  API_URL_UPCOMING,
} from "../../../configs/config";
function MoviesUpcoming() {
  const { data: moviesData, loading, error } = useFetchCustom(API_URL_UPCOMING);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const slicedmovies = Array.isArray(moviesData) ? moviesData.slice(0, 4) : [];
  return (
    <>
      <section className="movie-section-container relative">
        <div className="movies-header pt-[40px] px-[5%] pb-[20px] text-start">
          <p className="text-[18px] font-bold leading-[34px] tracking-[0.75px] text-[#1d4ed8]">
            UPCOMING MOVIES
          </p>
          <h2 className="text-[32px] font-normal leading-[1.4] tracking-[1px] mb-[28px]">
            Exciting Movies Coming Soon
          </h2>
        </div>
        <div className="movie-grid px-[5%] py-[18px] flex gap-[20px] justify-start flex-nowrap overflow-x-auto pb-[20px] [scroll-snap-type:x_mandatory]">
          {slicedmovies.map(({ id, title, poster_path }) => (
            <MovieCard
              key={id}
              imageUrl={`${BASE_IMAGE_URL}${poster_path}`}
              title={title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MoviesUpcoming;
