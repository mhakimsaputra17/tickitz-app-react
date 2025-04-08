import React from "react";
import { Link } from "react-router";

import ListFilm from "./ListFilm";

function MovieList() {
  return (
    <>
      <div className="container max-w-[1200px] mx-[auto] my-[0] bg-[white] rounded-[12px] [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.05)] p-[20px] sm:p-[40px] md:p-[60px] lg:p-[80px]">
        {/* Header section */}
        <header className="header flex flex-col md:flex-row justify-between items-start md:items-center mb-[24px] gap-4">
          <h1 className="title text-[20px] md:text-[24px] font-bold text-[#1a1a2b]">
            List Movie
          </h1>
          <div className="header-actions flex flex-col sm:flex-row gap-[16px] items-start sm:items-center w-full md:w-auto">
            <div className="date-picker flex items-center bg-[#f2f4f7] px-[16px] py-[10px] rounded-[8px] cursor-pointer w-full sm:w-[260px] h-[53px] gap-[12px]">
              <img
                className="date-picker-icon mr-[8px] text-[#6b7280]"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/calender2.svg"
                alt="calendar icon"
              />
              <span className="date-picker-text text-[14px] not-italic font-semibold leading-[28px] tracking-[0.25px] text-[#4e4b66]">
                November 2023
              </span>
              <img
                className="date-picker-arrow ml-auto text-[#6b7280]"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/arrow.svg"
                alt="arrow icon"
              />
            </div>
            <Link to="/admin/movie/add" className="w-full sm:w-auto">
              <button className="add-button hover:bg-[#1d4ed8] bg-[#2563eb] text-[white] border-[none] rounded-[8px] px-[20px] py-[12px] font-semibold cursor-pointer [transition:background-color_0.2s] h-[53px] w-full sm:w-[160px]">
                Add Movies
              </button>
            </Link>
          </div>
        </header>
        {/* Movie table */}
        <div className="table-container overflow-x-auto">
          <table className="movie-table w-full border-collapse text-center min-w-[650px]">
            <thead>
              <tr>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  No
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Thumbnail
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Movie Name
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Category
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Released Date
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Duration
                </th>
                <th className="text-center px-[10px] sm:px-[20px] py-[10px] sm:py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[12px] sm:text-[14px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <ListFilm />
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="pagination flex justify-center mt-[24px] gap-[4px] sm:gap-[8px]">
          <div className="page-item active bg-[#2563eb] text-[white] font-semibold border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)] w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[12px] sm:text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            1
          </div>
          <div className="page-item w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[12px] sm:text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            2
          </div>
          <div className="page-item w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[12px] sm:text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            3
          </div>
          <div className="page-item w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[12px] sm:text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            4
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
