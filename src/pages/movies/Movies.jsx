import React, { useState } from "react";
import MoviesHero from "../../components/ui/Hero/MoviesHero";
import Carousel from "../../components/ui/Hero/Carousel";
import Filter from "../../components/ui/FilterAndSearch/Filter";
import MovieCard from "../../components/common/MovieCard";
import {
  BASE_IMAGE_URL,
  API_URL_POPULAR,
  API_URL_MOVIE_DISCOVER,
  API_URL_TOP_RATED,
} from "../../configs/config";
import MovieCardGrid from "../../components/common/MovieCardGrid";
import useFetch from "../../hooks/useFetchCustom";
import FeatSection from "../../components/ui/Features/FeatSection";
import Newsletter from "../../components/ui/Newsletter/Newsletter";
import PaginationMovies from "../../components/ui/Movies/PaginationMovies";

function Movies() {
  const [currentPage, setCurrentPage] = useState(1);

  // Update the fetch URL to include the dynamic currentPage
  const {
    data: moviesData,
    loading,
    error,
  } = useFetch(`${API_URL_TOP_RATED}page=${currentPage}`);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // The fetch will happen automatically because of the dependency in useFetch
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when page changes
  };

  // Calculate total pages (assuming API returns 20 items per page and there are many movies)
  const totalPages = 20; // You may want to get this from API if available

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );

  return (
    <>
      <MoviesHero />
      <Filter />

      <section className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 px-4 md:px-[5%] py-4 pb-5">
          {moviesData.map(({ id, title, poster_path, vote_average }) => (
            <MovieCardGrid
              key={id}
              imageUrl={`${BASE_IMAGE_URL}${poster_path}`}
              title={title}
              id={id}
              vote_average={vote_average}
            />
          ))}
        </div>
      </section>
      <PaginationMovies
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        isLoading={loading}
      />
      <Newsletter />
    </>
  );
}

export default Movies;
