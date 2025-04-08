import { createContext, useState, useContext } from "react";

// Create context for seat selection and management
const SeatContext = createContext(undefined);

// Initial seat statuses based on the screenshot with more love nest seats
const initialSeatStatus = {
  // Left section
  A6: "sold",
  B2: "sold",
  B3: "sold",
  C4: "selected",
  C5: "selected",
  C6: "selected",
  D2: "sold",
  E4: "sold",
  G3: "sold",

  // Right section
  A10: "sold",
  C10: "sold",
  D10: "sold",
  D12: "sold",
  F10: "love-nest", // This is now a double-width seat
  F11: "love-nest-partner", // Partner for F10
  F13: "sold",

  // Additional love-nest seats for better demonstration
  E1: "love-nest",
  E2: "love-nest-partner",
  B9: "love-nest",
  B10: "love-nest-partner",
};

export const SeatProvider = ({ children, movieInfo, bookingInfo }) => {
  // State for seat statuses (available, selected, love-nest, sold)
  const [seatStatus, setSeatStatus] = useState(initialSeatStatus);

  // State for selected seats
  const [selectedSeats, setSelectedSeats] = useState(["C4", "C5", "C6"]);

  // State for ticket price
  const [ticketPrice] = useState(10);

  // Movie information
  const [movieData, setMovieData] = useState(movieInfo || null);

  // Booking information (date, time, cinema)
  const [booking, setBooking] = useState(bookingInfo || null);

  // Calculate total price based on selected seats
  const totalPrice = selectedSeats.length * ticketPrice;

  // Toggle seat selection
  const toggleSeat = (seatId) => {
    // Don't allow toggling sold seats
    if (seatStatus[seatId] === "sold") return;

    // Don't allow toggling love-nest seats (they stay as love-nest)
    if (
      seatStatus[seatId] === "love-nest" ||
      seatStatus[seatId] === "love-nest-partner"
    )
      return;

    const newSeatStatus = { ...seatStatus };
    let newSelectedSeats = [...selectedSeats];

    // If seat is already selected, unselect it
    if (seatStatus[seatId] === "selected") {
      delete newSeatStatus[seatId]; // Remove from status map
      newSelectedSeats = newSelectedSeats.filter((seat) => seat !== seatId);
    }
    // Otherwise, select the seat
    else {
      newSeatStatus[seatId] = "selected";
      newSelectedSeats.push(seatId);
    }

    // Update state
    setSeatStatus(newSeatStatus);
    setSelectedSeats(newSelectedSeats.sort());
  };

  // Get seat status
  const getSeatStatus = (seatId) => {
    return seatStatus[seatId] || "available";
  };

  // Check if seat is selected
  const isSeatSelected = (seatId) => {
    return seatStatus[seatId] === "selected";
  };

  // Clear all selected seats
  const clearSelection = () => {
    const newSeatStatus = { ...seatStatus };

    // Remove all selected seats from status
    selectedSeats.forEach((seatId) => {
      delete newSeatStatus[seatId];
    });

    setSeatStatus(newSeatStatus);
    setSelectedSeats([]);
  };

  // Update movie data
  const updateMovieData = (data) => {
    setMovieData(data);
  };

  // Update booking information
  const updateBookingInfo = (info) => {
    setBooking(info);
  };

  // Context value
  const value = {
    seatStatus,
    selectedSeats,
    ticketPrice,
    totalPrice,
    movieData,
    booking,
    toggleSeat,
    getSeatStatus,
    isSeatSelected,
    clearSelection,
    updateMovieData,
    updateBookingInfo,
  };

  return <SeatContext.Provider value={value}>{children}</SeatContext.Provider>;
};

// Custom hook to use seat context
export const useSeatContext = () => {
  const context = useContext(SeatContext);
  if (context === undefined) {
    throw new Error("useSeatContext must be used within a SeatProvider");
  }
  return context;
};
