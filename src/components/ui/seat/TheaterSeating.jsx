"use client";
import { useSeatContext } from "../../../context//SeatProvider";
import { useState, useEffect } from "react";

const TheaterSeating = () => {
  // Use the seat context instead of local state
  const { getSeatStatus, toggleSeat } = useSeatContext();
  const [loveNestSeats, setLoveNestSeats] = useState({});

  // Find love nest seats and track their partner seats
  useEffect(() => {
    const findLoveNestSeats = () => {
      const loveNestMap = {};

      // Define rows and columns for scanning
      const rows = ["A", "B", "C", "D", "E", "F", "G"];

      // Loop through all possible seats
      rows.forEach((row) => {
        for (let col = 1; col <= 14; col++) {
          const seatId = `${row}${col}`;
          if (getSeatStatus(seatId) === "love-nest") {
            // Mark this seat and the next one as part of a love nest
            loveNestMap[seatId] = `${row}${col + 1}`;
            loveNestMap[`${row}${col + 1}`] = "partner"; // Mark partner seat
          }
        }
      });

      setLoveNestSeats(loveNestMap);
    };

    findLoveNestSeats();
  }, [getSeatStatus]);

  // Get seat class based on status
  const getSeatClass = (seatId) => {
    const status = getSeatStatus(seatId);

    if (status === "selected") {
      return "bg-blue-600 hover:bg-blue-700";
    } else if (status === "sold") {
      return "bg-gray-500 cursor-not-allowed";
    } else if (status === "love-nest") {
      return "bg-pink-400 hover:bg-pink-500";
    } else {
      return "bg-gray-200 hover:bg-gray-300";
    }
  };

  // Generate a row of seats
  const renderRow = (rowLetter, startCol, endCol) => {
    const seats = [];

    for (let col = startCol; col <= endCol; col++) {
      const seatId = `${rowLetter}${col}`;

      // Skip seats that are partners of love nests (already rendered)
      if (loveNestSeats[seatId] === "partner") {
        continue;
      }

      // Check if this is a love nest seat
      if (getSeatStatus(seatId) === "love-nest") {
        seats.push(
          <div
            key={seatId}
            className={`w-[4.5rem] h-8 rounded-md ${getSeatClass(
              seatId
            )} transition-colors duration-200 flex items-center justify-center`}
            onClick={() => toggleSeat(seatId)}
            role="button"
            tabIndex={0}
            aria-label={`Love seat ${seatId}-${loveNestSeats[seatId]}`}
          >
            {/* <span className="text-white text-xs"></span> */}
          </div>
        );
      } else {
        seats.push(
          <div
            key={seatId}
            className={`w-8 h-8 rounded-md ${getSeatClass(
              seatId
            )} transition-colors duration-200`}
            onClick={() => toggleSeat(seatId)}
            role="button"
            tabIndex={0}
            aria-label={`Seat ${seatId}`}
          />
        );
      }
    }

    return (
      <div key={rowLetter} className="flex items-center gap-2">
        <div className="w-6 text-center font-medium">{rowLetter}</div>
        <div className="flex gap-2">{seats}</div>
      </div>
    );
  };

  // Generate column numbers
  const renderColumnNumbers = (startCol, endCol) => {
    const numbers = [];

    for (let col = startCol; col <= endCol; col++) {
      numbers.push(
        <div key={col} className="w-8 text-center text-sm">
          {col}
        </div>
      );
    }

    return <div className="flex justify-start gap-2 ml-8 mt-4">{numbers}</div>;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">Choose Your Seat</h2>

      {/* Screen */}
      <div className="flex justify-center mb-8">
        <div className="w-3/4 h-6 bg-gray-200 rounded-lg text-center text-sm flex items-center justify-center text-gray-500">
          Screen
        </div>
      </div>

      {/* Seating grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
        {/* Left section (columns 1-7) */}
        <div className="space-y-2">
          {["A", "B", "C", "D", "E", "F", "G"].map((row) =>
            renderRow(row, 1, 7)
          )}
          {renderColumnNumbers(1, 7)}
        </div>

        {/* Right section (columns 8-14) */}
        <div className="space-y-2">
          {["A", "B", "C", "D", "E", "F", "G"].map((row) =>
            renderRow(row, 8, 14)
          )}
          {renderColumnNumbers(8, 14)}
        </div>
      </div>

      {/* Seating key */}
      <div>
        <h3 className="font-medium mb-3">Seating key</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-md"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
            <span className="text-sm">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[3rem] h-6 bg-pink-400 rounded-md"></div>
            <span className="text-sm">Love nest</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-500 rounded-md"></div>
            <span className="text-sm">Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheaterSeating;
