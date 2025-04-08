import React, { useState } from "react";

function PaginationMovies({
  totalPages = 4,
  currentPage = 1,
  onPageChange,
  isLoading = false,
}) {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === displayPage || isLoading) return;

    if (onPageChange) {
      onPageChange(pageNumber);
    } else {
      setActivePage(pageNumber);
    }
  };

  const displayPage = onPageChange ? currentPage : activePage;

  // Limit displayed page numbers if there are too many
  let pageNumbers = [];
  if (totalPages <= 7) {
    pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    // Always include first and last page, and pages around the current page
    const startPage = Math.max(2, displayPage - 1);
    const endPage = Math.min(totalPages - 1, displayPage + 1);

    pageNumbers = [1];
    if (startPage > 2) pageNumbers.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages - 1) pageNumbers.push("...");
    pageNumbers.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-3 my-8">
      {/* Previous arrow */}
      <button
        onClick={() => displayPage > 1 && handlePageChange(displayPage - 1)}
        disabled={displayPage === 1 || isLoading}
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors
                  ${
                    displayPage === 1 || isLoading
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
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={`ellipsis-${index}`} className="text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            disabled={isLoading}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors
                      ${
                        displayPage === number
                          ? "bg-[#2563EB] text-white"
                          : isLoading
                          ? "border border-gray-200 text-gray-300 cursor-not-allowed"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
          >
            {number}
          </button>
        )
      )}

      {/* Next arrow */}
      <button
        onClick={() =>
          displayPage < totalPages && handlePageChange(displayPage + 1)
        }
        disabled={displayPage === totalPages || isLoading}
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors
                  ${
                    displayPage === totalPages || isLoading
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
