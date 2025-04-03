import React from "react";
import ActionButton from "./ActionButton";
import useFetch from "../../../hooks/useFetchCustom";
import {
  BASE_IMAGE_URL,
  API_URL_POPULAR,
  API_URL_MOVIE_DISCOVER,
  API_URL_TOP_RATED,
} from "../../../configs/config";

function ListFilm() {
  const page = 8;
  const {
    data: moviesData,
    loading,
    error,
  } = useFetch(`${API_URL_TOP_RATED}page=${page}`);

  // Format date to a more readable format (DD/MM/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return "Not Available";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  // Common table cell style
  const cellClass =
    "p-[12px] sm:p-[16px] border-b border-gray-100 text-[#1f4173] text-[13px] sm:text-[14px] font-normal";

  const renderRows = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="7" className="p-4 text-center">
            <div className="flex justify-center items-center py-10">
              Loading...
            </div>
          </td>
        </tr>
      );
    }

    if (error) {
      return (
        <tr>
          <td colSpan="7" className="p-4 text-center">
            <div className="flex justify-center items-center py-10 text-red-500">
              Error: {error}
            </div>
          </td>
        </tr>
      );
    }

    // Format API data to match the required structure
    const movies = moviesData.map((movie) => ({
      id: movie.id,
      thumbnail: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
      name: movie.title,
      category: movie.genre_ids ? "Action, Adventure" : "Not Available",
      releaseDate: formatDate(movie.release_date),
      duration: "2hours 28minute",
    }));

    // If no movies are available
    if (!movies || movies.length === 0) {
      return (
        <tr>
          <td colSpan="7" className="p-4 text-center">
            <div className="flex justify-center items-center py-10">
              No movies available
            </div>
          </td>
        </tr>
      );
    }

    return movies.map((movie, index) => (
      <tr
        key={movie.id}
        className="hover:bg-gray-50 transition-colors duration-150"
      >
        <td className={`${cellClass} text-center w-12`}>{index + 1}</td>
        <td className={`${cellClass} text-center`}>
          <div className="flex justify-center">
            <img
              src={movie.thumbnail}
              alt={movie.name}
              className="rounded-lg object-cover w-[50px] h-[70px] shadow-sm hover:shadow-md transition-shadow duration-200"
            />
          </div>
        </td>
        <td className={`${cellClass} font-medium`}>
          <span className="movie-name line-clamp-2">{movie.name}</span>
        </td>
        <td className={`${cellClass} text-gray-600`}>{movie.category}</td>
        <td className={`${cellClass} text-gray-600`}>{movie.releaseDate}</td>
        <td className={`${cellClass} text-gray-600`}>{movie.duration}</td>
        <td className={cellClass}>
          <ActionButton />
        </td>
      </tr>
    ));
  };

  return <>{renderRows()}</>;
}

export default ListFilm;
