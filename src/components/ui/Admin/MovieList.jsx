import React from "react";

function MovieList() {
  return (
    <>
      <div className="container max-w-[1200px] mx-[auto] my-[0] bg-[white] rounded-[12px] [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.05)] p-[80px]">
        {/* Header section */}
        <header className="header flex justify-between items-center mb-[24px]">
          <h1 className="title text-[24px] font-bold text-[#1a1a2b]">
            List Movie
          </h1>
          <div className="header-actions flex gap-[16px] items-center">
            <div className="date-picker flex items-center bg-[#f2f4f7] px-[16px] py-[10px] rounded-[8px] cursor-pointer w-[260px] h-[53px] gap-[12px]">
              <img
                className="date-picker-icon mr-[8px] text-[#6b7280]"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/calender2.svg"
                alt="calendar icon"
              />
              <span className="date-picker-text text-[14px] not-italic font-semibold leading-[28px] tracking-[0.25px] text-[#4e4b66]">
                November 2023
              </span>
              <img
                className="date-picker-arrow ml-[50px] text-[#6b7280]"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/arrow.svg"
                alt="arrow icon"
              />
            </div>
            <a href="/pages/admin/add-movie.html">
              <button className="add-button hover:bg-[#1d4ed8] bg-[#2563eb] text-[white] border-[none] rounded-[8px] px-[20px] py-[12px] font-semibold cursor-pointer [transition:background-color_0.2s] h-[53px] w-[160px]">
                Add Movies
              </button>
            </a>
          </div>
        </header>
        {/* Movie table */}
        <div className="table-container">
          <table className="movie-table w-full border-collapse text-center">
            <thead>
              <tr>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  No
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Thumbnail
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Movie Name
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Category
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Released Date
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Duration
                </th>
                <th className="text-center px-[20px] py-[15px] border-b-[1px_solid_#e5e7eb] text-[#4b5563] font-semibold text-[14px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td className="number-cell p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  1
                </td>
                <td className="thumbnail-cell p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  <img
                    src="https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/poster/spiderman-list.png?raw=true"
                    alt="Spiderman HomeComing"
                    className="thumbnail"
                  />
                </td>
                <td className="p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  <span className="movie-name">Spiderman HomeComing</span>
                </td>
                <td className="p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  Action, Adventure
                </td>
                <td className="p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  07/05/2023
                </td>
                <td className="p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  2 Hours 15 Minute
                </td>
                <td className="action-cell w-[120px] p-[16px] border-b-[1px_solid_#f3f4f6] text-[#1f4173] text-[14px] not-italic font-normal leading-[normal]">
                  <div className="action-buttons flex gap-[12px]">
                    <img
                      className="action-button bg-[#2563eb] text-[white] w-[16px] h-[16px] hover:scale-110 hover:filter brightness-[90%] w-[32px] h-[32px] rounded-[6px] flex items-center justify-center cursor-pointer [transition:transform_0.3s_ease,_filter_0.3s_ease] view-button w-[31px] h-[31px] cursor-pointer p-[7px]"
                      src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/eyeget.svg"
                      alt="look icon"
                    />
                    <img
                      className="action-button bg-[#5d5fef] text-[white] w-[16px] h-[16px] hover:scale-110 hover:filter brightness-[90%] w-[32px] h-[32px] rounded-[6px] flex items-center justify-center cursor-pointer [transition:transform_0.3s_ease,_filter_0.3s_ease] edit-button w-[31px] h-[31px] cursor-pointer p-[7px]"
                      src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/edit.svg"
                      alt="edit icon"
                    />
                    <img
                      className="action-button bg-[#ef4444] text-[white] w-[16px] h-[16px] hover:scale-110 hover:filter brightness-[90%] w-[32px] h-[32px] rounded-[6px] flex items-center justify-center cursor-pointer [transition:transform_0.3s_ease,_filter_0.3s_ease] delete-button w-[31px] h-[31px] cursor-pointer p-[7px]"
                      src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/delete.svg"
                      alt="delete icon"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="pagination flex justify-center mt-[24px] gap-[8px]">
          <div className="page-item active bg-[#2563eb] text-[white] font-semibold border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)] w-[36px] h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            1
          </div>
          <div className="page-item w-[36px] h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            2
          </div>
          <div className="page-item w-[36px] h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            3
          </div>
          <div className="page-item w-[36px] h-[36px] flex items-center justify-center rounded-[6px] cursor-pointer text-[14px] text-[#4b5563] border-[0.5px] border-[solid] border-[var(--Border-and-Line,#dedede)]">
            4
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
