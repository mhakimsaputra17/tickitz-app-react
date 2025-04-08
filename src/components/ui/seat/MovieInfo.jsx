import { Link, useNavigate } from "react-router-dom";
import { useSeatContext } from "../../../context/SeatProvider";

const MovieInfo = () => {
  const { movieData, booking } = useSeatContext();
  const navigate = useNavigate();

  if (!movieData) {
    return (
      <div className="border rounded-lg p-4 mb-6">
        <div className="animate-pulse flex gap-4">
          <div className="w-36 h-24 bg-gray-200"></div>
          <div className="flex-1">
            <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 mb-6">
      <div className="flex gap-4">
        <div className="w-36 h-auto relative">
          {movieData.posterPath ? (
            <img
              src={movieData.posterPath}
              alt={movieData.title}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            <div className="w-36 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
              Movie Poster
            </div>
          )}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">{movieData.title}</h2>
          <div className="flex flex-wrap gap-2 mb-2">
            {movieData.genres &&
              movieData.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {genre.name}
                </span>
              ))}
          </div>
          <div className="flex justify-between items-center">
            <span>
              {booking?.time || "13:00 PM"} • {booking?.date || "21/07/20"}
            </span>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => navigate("/movies")}
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
