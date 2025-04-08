import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { SeatProvider } from "../../../context/SeatProvider";
import ProgressSteps from "./ProgressSteps";
import MovieInfo from "./MovieInfo";
import TheaterSeating from "./TheaterSeating";
import BookingSummary from "./BookingSummary";
import useFetchGenre from "../../../hooks/useFetchGenre";
import { BASE_IMAGE_URL } from "../../../configs/config";

const OrderSeat = () => {
  const [currentStep, setCurrentStep] = useState(2); // Start at seat selection step
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Get movie data from location state or fetch it
  const movieDataFromState = location.state?.movieData;
  const bookingInfo = location.state?.bookingInfo;

  // Fetch movie data if not available in location state
  const {
    data: fetchedMovieData,
    loading,
    error,
  } = useFetchGenre(`https://api.themoviedb.org/3/movie/${movieId}`);

  // Combine movie data from state or API
  const movieData = movieDataFromState || fetchedMovieData;

  // Cinema mapping for fallback logos if needed
  const cinemaLogos = {
    "ebv.id":
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ebv.svg",
    hiflix:
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/hiflix 3.svg",
    CineOne21:
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/cineone.svg",
  };

  // Get cinema name and logo
  const cinemaName = bookingInfo?.cinema || "CineOne21";
  const cinemaLogo =
    bookingInfo?.cinemaLogo ||
    cinemaLogos[cinemaName] ||
    cinemaLogos["CineOne21"];

  useEffect(() => {
    // If there's no movie data and we're done loading, redirect back to movie detail
    if (!loading && !movieData && !error) {
      navigate(`/movies/detail/${movieId}`);
    }
  }, [movieData, loading, error, movieId, navigate]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error}
      </div>
    );
  if (!movieData) return null;

  // Format movie info for the seat selection context
  const formattedMovieInfo = {
    id: movieData.id,
    title: movieData.original_title || movieData.title || "Movie Title",
    posterPath: movieData.poster_path
      ? `${BASE_IMAGE_URL}${movieData.poster_path}`
      : null,
    genres: movieData.genres || [],
    runtime: movieData.runtime || 120,
  };

  return (
    <SeatProvider movieInfo={formattedMovieInfo} bookingInfo={bookingInfo}>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            {/* Cinema header removed as requested */}
          </div>

          <ProgressSteps currentStep={currentStep} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <MovieInfo />
              <TheaterSeating />
            </div>

            <div className="md:col-span-1">
              <BookingSummary cinemaLogo={cinemaLogo} cinemaName={cinemaName} />
            </div>
          </div>
        </div>
      </div>
    </SeatProvider>
  );
};

export default OrderSeat;
