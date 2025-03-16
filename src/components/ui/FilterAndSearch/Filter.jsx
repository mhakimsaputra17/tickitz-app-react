import React from "react";

function Filter() {
  return (
    <>
      <section>
        <div className="container max-w-[1200px] mx-[auto] my-[0] p-[20px]">
          <div className="search-section flex flex-row items-center gap-[30px] ml-[22px]">
            <div className="search-container relative">
              <label className="search-label block mb-[8px] text-[14px] text-[#333]">
                Cari Event
              </label>
              <div className="search-icon absolute left-[12px] top-[40px] text-[#94a3b8]">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 14L11.1 11.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="search-input focus:border-[#3b82f6] w-full max-w-[320px] px-[40px] py-[12px] border-[1px] border-[solid] border-[#e2e8f0] rounded-[6px] text-[14px] outline-[none] [transition:border-color_0.2s]"
                placeholder="New Born Expert"
              />
            </div>
            <div className="filter-section flex flex-col items-start gap-[16px]">
              {/* <label class="search-label">Filter</label> */}
              <span className="filter-label text-[14px] text-[#333]">
                Filter
              </span>
              <div className="filter-tags flex gap-[35px] flex-wrap ">
                <button className="filter-tag active px-[24px] py-[10px] bg-[#1d4ed8] text-[white] rounded-[8px]">
                  Thriller
                </button>
                <button className="filter-tag px-[16px] py-[8px] rounded-[4px] text-[14px] cursor-pointer bg-transparent text-[#64748b] [transition:all_0.2s] border-[none]">
                  Horror
                </button>
                <button className="filter-tag px-[16px] py-[8px] rounded-[4px] text-[14px] cursor-pointer bg-transparent text-[#64748b] [transition:all_0.2s] border-[none]">
                  Romantic
                </button>
                <button className="filter-tag px-[16px] py-[8px] rounded-[4px] text-[14px] cursor-pointer bg-transparent text-[#64748b] [transition:all_0.2s] border-[none]">
                  Adventure
                </button>
                <button className="filter-tag px-[16px] py-[8px] rounded-[4px] text-[14px] cursor-pointer bg-transparent text-[#64748b] [transition:all_0.2s] border-[none]">
                  Sci-Fi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filter;
