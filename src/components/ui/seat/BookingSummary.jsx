import { useSeatContext } from "../../../context/SeatProvider";
import { useNavigate } from "react-router-dom";

const BookingSummary = ({ cinemaLogo, cinemaName }) => {
  const { selectedSeats, ticketPrice, totalPrice, movieData, booking } =
    useSeatContext();
  const navigate = useNavigate();

  const handleContinueToPayment = () => {
    if (selectedSeats.length === 0) return;

    // Prepare data for the payment page
    const bookingData = {
      movieTitle: movieData?.title || "Movie Title",
      date: booking?.date || "21/07/20",
      time: booking?.time || "13:00 PM",
      cinema: `${cinemaName || "Cinema"} - ${booking?.location || "Location"}`,
      tickets: selectedSeats.length,
      seats: selectedSeats,
      totalPrice: totalPrice,
      cinemaLogo: cinemaLogo,
    };

    // Navigate to payment with booking data
    navigate("/order/payment", {
      state: {
        bookingData,
        movieData,
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Cinema Logo */}
      {cinemaLogo && (
        <div className="flex justify-center mb-4">
          <div className="w-32 h-12 flex items-center justify-center">
            <img
              src={cinemaLogo}
              alt={`${cinemaName || "Cinema"} logo`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mb-4">Booking Summary</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Movie selected </span>
          <span className="font-medium">
            {movieData?.title || "Loading..."}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600"> {booking?.date || "21/07/20"}</span>
          <span className="font-medium">{booking?.time || "13:00 PM"}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Cinema:</span>
          <span className="font-medium">
            {booking?.cinema || "CineOne21"},{" "}
            {booking?.location || "Purwokerto"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Seat choosed</span>
          <span className="font-medium">
            {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">One ticket price</span>
          <span className="font-medium">${ticketPrice}</span>
        </div>

        <div className="flex justify-between border-t pt-4">
          <span className="text-lg font-bold">Total Payment</span>
          <span className="text-blue-600 text-xl font-bold">${totalPrice}</span>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          selectedSeats.length > 0
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={selectedSeats.length === 0}
        onClick={handleContinueToPayment}
      >
        Checkout now
      </button>
    </div>
  );
};

export default BookingSummary;
