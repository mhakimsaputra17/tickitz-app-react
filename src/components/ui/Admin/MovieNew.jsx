import React from "react";
import { Link } from "react-router";

function MovieNew() {
  return (
    <>
      <div className="body-container flex justify-center items-center">
        <main className="container bg-[white] w-full max-w-[600px] p-[40px] rounded-[8px] [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.05)]">
          <h1 className="text-[24px] text-[#14142b] mb-[20px] not-italic font-bold leading-[normal] tracking-[0.25px]">
            Add New Movie
          </h1>
          <form>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="upload"
              >
                Upload Image
              </label>
              <button
                type="button"
                className="w-[106px] h-[32px] bg-[#3b5bdb] text-[white] border-[none] rounded-[4px] px-[20px] 986-66 text-[14px] cursor-pointer font-medium [transition:background-color_0.2s] "
              >
                Upload
              </button>
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="movie-name"
              >
                Movie Name
              </label>
              <input
                className="w-full p-[18px] border-[1px] border-[solid] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
                type="text"
                id="movie-name"
                defaultValue="Spider-Man: Homecoming"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="category"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                defaultValue="Action, Adventure, Sci-Fi"
                className="w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="release-date"
              >
                Release date
              </label>
              <input
                type="text"
                id="release-date"
                defaultValue="07/05/2020"
                className="w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="duration"
              >
                Duration (hour / minute)
              </label>
              <div className="duration-container flex gap-[10px]">
                <input
                  type="text"
                  id="duration-hour"
                  defaultValue={2}
                  className="flex-[1] w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
                />
                <input
                  type="text"
                  id="duration-minute"
                  defaultValue={13}
                  className="flex-[1] w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
                />
              </div>
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="director"
              >
                Director Name
              </label>
              <input
                type="text"
                id="director"
                defaultValue="Jon Watts"
                className="w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="cast"
              >
                Cast
              </label>
              <input
                type="text"
                id="cast"
                defaultValue="Tom Holland, Michael Keaton, Robert Dow..."
                className="w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="synopsis"
              >
                Synopsis
              </label>
              <textarea
                className="min-h-[100px] resize-y w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
                id="synopsis"
                rows={8}
                defaultValue={
                  "Thrilled by his experience with the Avengers, Peter returns home, where he\n      lives with his Aunt May, I"
                }
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="location"
              >
                Add Location
              </label>
              <input
                type="text"
                id="location"
                defaultValue="Purwokerto, Bandung, Bekasi"
                className="w-full p-[18px] border-[1px] border-[#e1e1e1] rounded-[4px] text-[14px] text-[#4e4b66] bg-[#fafafa]"
              />
            </div>
            <div className="mb-[20px]">
              <label
                className="block mb-[8px] text-[#4e4b66] text-[14px]"
                htmlFor="date-time"
              >
                Set Date &amp; Time
              </label>
              <div className="date-select flex items-center bg-[#eff0f6] text-[#4e4b66] px-[15px] py-[8px] rounded-[4px] w-[200px] cursor-pointer gap-[5px]">
                <span className="mr-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
                    <line x1={16} y1={2} x2={16} y2={6} />
                    <line x1={8} y1={2} x2={8} y2={6} />
                    <line x1={3} y1={10} x2={21} y2={10} />
                  </svg>
                </span>
                <span className="mr-[15px]">Set a date</span>
                <span className="arrow mr-[15px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
              <div className="date-time-container flex items-center gap-[10px] mt-[10px]">
                <button
                  type="button"
                  className="add-time-btn flex items-center justify-center w-[30px] h-[30px] border-[1px] border-[solid] border-[#3b5bdb] text-[#3b5bdb] rounded-[4px] bg-transparent text-[18px] cursor-pointer"
                >
                  +
                </button>
                <div className="time-inputs flex items-center gap-[10px]">
                  <span className="time-input bg-transparent border-[none] w-auto p-0 text-[#555]">
                    08:30am
                  </span>
                  <span className="time-input bg-transparent border-[none] w-auto p-0 text-[#555]">
                    10:30pm
                  </span>
                </div>
              </div>
            </div>
            <div className="divider h-px bg-[#e1e1e1] mx-[0] my-[20px]" />
            <Link to="/admin/movie/list">
              <button
                type="submit"
                className="btn btn-save w-full p-[14px] mt-[10px] text-[16px] hover:bg-[#364fc7] bg-[#3b5bdb] text-[white] border-[none] rounded-[4px] px-[20px] py-[12px] cursor-pointer font-medium [transition:background-color_0.2s]"
              >
                Save Movie
              </button>
            </Link>
          </form>
        </main>
      </div>
    </>
  );
}

export default MovieNew;
