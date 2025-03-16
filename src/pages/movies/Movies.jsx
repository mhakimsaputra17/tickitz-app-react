import React from "react";
import MoviesHero from "../../components/ui/Hero/MoviesHero";
import Carousel from "../../components/ui/Hero/Carousel";
import Filter from "../../components/ui/FilterAndSearch/Filter";
import MovieCard from "../../components/common/MovieCard";
import {
  BASE_IMAGE_URL,
  API_URL_POPULAR,
  API_URL_MOVIE_DISCOVER,
} from "../../configs/config";
import MovieCardGrid from "../../components/common/MovieCardGrid";
import useFetch from "../../hooks/useFetchCustom";
import FeatSection from "../../components/ui/Features/FeatSection";
import Newsletter from "../../components/ui/Newsletter/Newsletter";

function Movies() {
  const { data: moviesData, loading, error } = useFetch(API_URL_MOVIE_DISCOVER);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <MoviesHero />
      <Filter />

      <section className="relative">
        <div className="grid grid-cols-4 gap-5 px-[5%] py-4 pb-5">
          {moviesData.map(({ id, title, poster_path }) => (
            <MovieCardGrid
              key={id}
              imageUrl={`${BASE_IMAGE_URL}${poster_path}`}
              title={title}
              id={id}
            />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default Movies;
