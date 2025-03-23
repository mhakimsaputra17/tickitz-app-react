import React, { useState } from "react";

function PaginationMovies({ totalPages = 4, currentPage = 1, onPageChange }) {
  // If no external state is provided, manage it internally
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (pageNumber) => {
    if (onPageChange) {
      onPageChange(pageNumber);
    } else {
      setActivePage(pageNumber);
    }
  };

  // Use either external or internal page state
  const displayPage = onPageChange ? currentPage : activePage;

  // Generate array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-3 my-8">
      {/* Previous arrow */}
      <button
        onClick={() => displayPage > 1 && handlePageChange(displayPage - 1)}
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors
                  ${
                    displayPage === 1
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-blue-500 text-blue-500 hover:bg-blue-50"
                  }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>

      {/* Page circles */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                    ${
                      displayPage === number
                        ? "bg-[#2563EB] text-white"
                        : "border border-gray-300 hover:bg-gray-100"
                    }`}
        >
          {number}
        </button>
      ))}

      {/* Next arrow */}
      <button
        onClick={() =>
          displayPage < totalPages && handlePageChange(displayPage + 1)
        }
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors
                  ${
                    displayPage === totalPages
                      ? "border-gray-200 text-gray-300 cursor-not-allowed"
                      : "border-blue-500 text-blue-500 hover:bg-blue-50"
                  }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
}

export default PaginationMovies;
