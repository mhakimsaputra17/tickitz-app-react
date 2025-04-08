import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function BookTicket({ movieData }) {
  // States for selection values
  const [selectedDate, setSelectedDate] = useState("21/07/20");
  const [selectedTime, setSelectedTime] = useState("08:30 AM");
  const [selectedLocation, setSelectedLocation] = useState("Purwokerto");
  const [selectedCinema, setSelectedCinema] = useState("hiflix");

  // States for dropdown visibility
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  // Refs for dropdown containers
  const dateDropdownRef = useRef(null);
  const timeDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  // Sample data for dropdowns
  const dateOptions = [
    "21/07/20",
    "22/07/20",
    "23/07/20",
    "24/07/20",
    "25/07/20",
  ];
  const timeOptions = [
    "08:30 AM",
    "10:30 AM",
    "12:30 PM",
    "02:30 PM",
    "04:30 PM",
    "06:30 PM",
    "08:30 PM",
  ];
  const locationOptions = [
    "Purwokerto",
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Yogyakarta",
    "Semarang",
    "Malang",
  ];

  // Format the movie data for passing to order page
  const cinemaLogos = {
    "ebv.id":
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ebv.svg",
    hiflix:
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/hiflix 3.svg",
    CineOne21:
      "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/cineone.svg",
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dateDropdownRef.current &&
        !dateDropdownRef.current.contains(event.target)
      ) {
        setDateDropdownOpen(false);
      }
      if (
        timeDropdownRef.current &&
        !timeDropdownRef.current.contains(event.target)
      ) {
        setTimeDropdownOpen(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setLocationDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Booking section */}
      <main className="max-w-[1000px] mx-auto px-4 md:px-5 lg:px-0 bg-white">
        <section className="booking mb-10">
          <h2 className="text-xl mb-6 font-semibold">Book Tickets</h2>
          {/* Booking filters */}
          <div className="booking-filters flex flex-col md:flex-row gap-3 mb-8 flex-wrap">
            {/* Date selection */}
            <div
              className="filter-group w-full md:flex-1 min-w-[200px]"
              ref={dateDropdownRef}
            >
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Date
              </label>
              <div
                className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300"
                onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
              >
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/calendar.svg"
                    alt="calendar"
                    className="w-4 h-4 mr-2"
                  />
                  <span>{selectedDate}</span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    dateDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {/* Date dropdown */}
              {dateDropdownOpen && (
                <div className="absolute mt-1 w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {dateOptions.map((date) => (
                    <div
                      key={date}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedDate === date ? "bg-blue-50 text-blue-600" : ""
                      }`}
                      onClick={() => {
                        setSelectedDate(date);
                        setDateDropdownOpen(false);
                      }}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Time selection */}
            <div
              className="filter-group w-full md:flex-1 min-w-[200px]"
              ref={timeDropdownRef}
            >
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Time
              </label>
              <div
                className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300"
                onClick={() => setTimeDropdownOpen(!timeDropdownOpen)}
              >
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/time.svg"
                    alt="time icon"
                    className="w-4 h-4 mr-2"
                  />
                  <span>{selectedTime}</span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    timeDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {/* Time dropdown */}
              {timeDropdownOpen && (
                <div className="absolute mt-1 w-[200px] max-h-[250px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {timeOptions.map((time) => (
                    <div
                      key={time}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedTime === time ? "bg-blue-50 text-blue-600" : ""
                      }`}
                      onClick={() => {
                        setSelectedTime(time);
                        setTimeDropdownOpen(false);
                      }}
                    >
                      {time}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location selection */}
            <div
              className="filter-group w-full md:flex-1 min-w-[200px]"
              ref={locationDropdownRef}
            >
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Location
              </label>
              <div
                className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300"
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
              >
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/location.svg"
                    alt="location icon"
                    className="w-4 h-4 mr-2"
                  />
                  <span>{selectedLocation}</span>
                </div>
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    locationDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              {/* Location dropdown */}
              {locationDropdownOpen && (
                <div className="absolute mt-1 w-[200px] max-h-[250px] overflow-y-auto bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {locationOptions.map((location) => (
                    <div
                      key={location}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedLocation === location
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                      onClick={() => {
                        setSelectedLocation(location);
                        setLocationDropdownOpen(false);
                      }}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button className="filter-button w-full md:w-auto px-6 lg:px-16 py-3 md:py-4 bg-blue-500 text-white border-none rounded-md font-medium cursor-pointer md:self-end mt-3 md:mt-auto hover:bg-blue-600 transition-colors">
              Filter
            </button>
          </div>

          {/* Cinema selection */}
          <div className="cinema-selection mb-8">
            <div className="cinema-header flex justify-between items-center mb-5">
              <h3 className="text-base font-semibold">Choose Cinema</h3>
              <span className="result-count text-gray-400 text-sm">
                39 Result
              </span>
            </div>
            <div className="cinema-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 overflow-x-auto">
              <div
                className={`cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 ${
                  selectedCinema === "ebv.id" ? "bg-blue-100" : "bg-white"
                } h-[100px] cursor-pointer`}
                onClick={() => setSelectedCinema("ebv.id")}
              >
                <img
                  src={cinemaLogos["ebv.id"]}
                  alt="ebu.id"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div
                className={`cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 h-[100px] cursor-pointer ${
                  selectedCinema === "hiflix" ? "bg-blue-100" : "bg-white"
                }`}
                onClick={() => setSelectedCinema("hiflix")}
              >
                <img
                  src={cinemaLogos["hiflix"]}
                  alt="hiflix"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div
                className={`cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 ${
                  selectedCinema === "CineOne21" ? "bg-blue-100" : "bg-white"
                } h-[100px] cursor-pointer`}
                onClick={() => setSelectedCinema("CineOne21")}
              >
                <img
                  src={cinemaLogos["CineOne21"]}
                  alt="CineOne21"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div
                className={`cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 ${
                  selectedCinema === "ebv.id2" ? "bg-blue-100" : "bg-white"
                } h-[100px] cursor-pointer`}
                onClick={() => setSelectedCinema("ebv.id2")}
              >
                <img
                  src={cinemaLogos["ebv.id"]}
                  alt="ebu.id"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
            </div>
            {/* Pagination */}
            <div className="pagination flex justify-center gap-1 mb-8">
              <div className="page-number active w-[35px] h-[35px] flex justify-center items-center rounded-md text-sm cursor-pointer text-gray-600 bg-blue-500 text-white">
                1
              </div>
              <div className="page-number w-[35px] h-[35px] flex justify-center items-center rounded-md text-sm cursor-pointer text-gray-600">
                2
              </div>
              <div className="page-number w-[35px] h-[35px] flex justify-center items-center rounded-md text-sm cursor-pointer text-gray-600">
                3
              </div>
              <div className="page-number w-[35px] h-[35px] flex justify-center items-center rounded-md text-sm cursor-pointer text-gray-600">
                4
              </div>
            </div>
          </div>

          {/* Book now button */}
          <div className="book-now-container flex justify-center mb-10">
            <Link
              to={`/order/${movieData?.id}`}
              state={{
                movieData,
                bookingInfo: {
                  date: selectedDate,
                  time: selectedTime,
                  location: selectedLocation,
                  cinema: selectedCinema,
                  cinemaLogo:
                    cinemaLogos[selectedCinema] || cinemaLogos["hiflix"],
                },
              }}
              className="btn-link"
            >
              <button className="book-now-button px-10 py-3 bg-blue-500 text-white border-none rounded-md font-medium cursor-pointer text-sm w-[150px] md:w-[180px] text-center hover:bg-blue-600 transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default BookTicket;
