import React from "react";
import { Link } from "react-router";

function BookTicket() {
  return (
    <>
      {/* Booking section */}
      <main className="max-w-[1000px] mx-auto px-4 md:px-5 lg:px-0 bg-white">
        <section className="booking mb-10">
          <h2 className="text-xl mb-6 font-semibold">Book Tickets</h2>
          {/* Booking filters */}
          <div className="booking-filters flex flex-col md:flex-row gap-3 mb-8 flex-wrap">
            <div className="filter-group w-full md:flex-1 min-w-[200px]">
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Date
              </label>
              <div className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300">
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/calendar.svg"
                    alt="calendar"
                    className="w-4 h-4 mr-2"
                  />
                  <span>21/07/20</span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500"
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
            </div>
            <div className="filter-group w-full md:flex-1 min-w-[200px]">
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Time
              </label>
              <div className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300">
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/time.svg"
                    alt="time icon"
                    className="w-4 h-4 mr-2"
                  />
                  <span>08 : 30 AM</span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500"
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
            </div>
            <div className="filter-group w-full md:flex-1 min-w-[200px]">
              <label className="filter-label block mb-2 font-semibold text-sm">
                Choose Location
              </label>
              <div className="filter-select w-full px-3 py-2.5 border border-gray-200 rounded-md bg-gray-100 text-sm cursor-pointer flex justify-between items-center text-gray-800 hover:border-gray-300">
                <div className="flex items-center">
                  <img
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/location.svg"
                    alt="location icon"
                    className="w-4 h-4 mr-2"
                  />
                  <span>Purwokerto</span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-500"
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
            </div>
            <button className="filter-button w-full md:w-auto px-6 lg:px-16 py-3 md:py-4 bg-blue-500 text-white border-none rounded-md font-medium cursor-pointer md:self-end mt-3 md:mt-auto">
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
              <div className="cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 bg-white h-[100px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ebv.svg"
                  alt="ebu.id"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div
                className="cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 h-[100px]"
                style={{ backgroundColor: "#3366e6" }}
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/hiflix 3.svg"
                  alt="hiflix"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div className="cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 bg-white h-[100px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/cineone.svg"
                  alt="CineOne21"
                  className="cinema-logo max-w-full max-h-[60px]"
                />
              </div>
              <div className="cinema-card border border-gray-200 rounded-md flex justify-center items-center p-3 bg-white h-[100px]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ebv.svg"
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
            <Link to="/order/payment" className="btn-link">
              <button className="book-now-button px-10 py-3 bg-blue-500 text-white border-none rounded-md font-medium cursor-pointer text-sm w-[150px] md:w-[180px] text-center">
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
