import React from "react";
import MovieCard from "../../common/MovieCard";
import useFetch from "../../../hooks/useFetch";
function MoviesHome() {
  const { movie, loading, error } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=6"
  );
  //   console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!movie) return <p>No data available.</p>;

  const slicedmovies = Array.isArray(movie) ? movie.slice(0, 4) : [];
  return (
    <>
      <section className="movie-section-container relative">
        <div className="movies-header pt-[40px] px-[5%] pb-[20px] text-center">
          <p className="text-[18px] font-bold leading-[34px] tracking-[0.75px] text-[#1d4ed8]">
            MOVIES
          </p>
          <h2 className="text-[32px] font-normal leading-[1.4] tracking-[1px] mb-[28px]">
            Exciting Movies That Should Be
            <br className="hide-mobile" />
            Watched Today
          </h2>
        </div>
        <div className="movie-grid px-[5%] py-[18px] flex gap-[20px] justify-start flex-nowrap overflow-x-auto pb-[20px] [scroll-snap-type:x_mandatory]">
          {slicedmovies.map((movie) => (
            <MovieCard
              key={movie.id}
              imageUrl={movie.imageUrl}
              title={movie.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default MoviesHome;
