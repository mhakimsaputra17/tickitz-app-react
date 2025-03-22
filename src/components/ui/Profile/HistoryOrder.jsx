import React from "react";

function HistoryOrder() {
  return (
    <>
      <main className="px-4 sm:px-6 md:px-8">
        {/* profile */}
        <div className="profile-container flex flex-col lg:grid lg:grid-cols-[280px_1fr] grid-rows-[auto] gap-[20px] md:gap-[35px] max-w-[1200px] mx-auto my-[20px] md:my-[30px]">
          {/* left sidebar */}
          <aside className="sidebar bg-white rounded-[20px] p-[20px] md:p-[30px] shadow-md mb-6 lg:mb-0 lg:h-[740px]">
            <div className="info-header flex justify-between items-center mb-[24px]">
              <h2 className="text-[14px] sm:text-[16px] font-semibold text-[#555]">
                INFO
              </h2>
              <div className="menu-dots w-[24px] h-[24px] rounded-[50%]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/dots.svg"
                  alt="dots icon"
                />
              </div>
            </div>
            <div className="user-profile flex flex-col items-center mb-[24px]">
              <img
                className="w-[80px] h-[80px] sm:w-auto sm:h-auto"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/profile-sidebar.svg"
                alt="profile-sidebar"
              />
              <h3 className="user-name text-[16px] sm:text-[18px] font-semibold mb-[4px] mt-2">
                Jonas El Rodriguez
              </h3>
              <p className="user-role text-[12px] sm:text-[14px] text-[#777]">
                Moviegoers
              </p>
            </div>
            <hr className="divider border-none h-px bg-[#eee] mx-0 my-[25px]" />
            <div className="loyalty-section mt-[24px]">
              <h4 className="loyalty-title text-[14px] sm:text-[16px] font-semibold mb-[16px] leading-[28px] tracking-[0.75px]">
                Loyalty Points
              </h4>
              <div className="loyalty-card bg-[#1d4ed8] rounded-[12px] p-[12px] sm:p-[16px] text-white grid grid-cols-[1fr_auto] mb-[16px]">
                <div className="card-content">
                  <p className="card-title text-[14px] sm:text-[16px] mb-[8px]">
                    Moviegoers
                  </p>
                  <div className="points-container flex items-baseline">
                    <p className="points-value text-[24px] sm:text-[28px] font-bold mr-[4px]">
                      320
                    </p>
                    <p className="points-label text-[12px] sm:text-[14px] opacity-80">
                      points
                    </p>
                  </div>
                </div>
                <img
                  className="star-icon w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[50%]"
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/star.svg"
                  alt="star icon"
                />
              </div>
              <p className="points-info text-[#4e4b66] mb-[8px] text-[14px] sm:text-[16px] not-italic font-normal leading-[24px] sm:leading-[32px]">
                180 points become a master
              </p>
              <div className="progress-bar h-[10px] bg-[#eee] rounded-[8px] overflow-hidden">
                <div className="progress-fill h-full w-1/2 rounded-[8px] bg-[#3366ff]" />
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <section className="main-content grid gap-[16px] md:gap-[20px]">
            {/* Tabs Navigation */}
            <nav className="tabs bg-white rounded-[16px] grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] overflow-hidden shadow-md">
              <a
                href="#"
                className="tab text-[13px] sm:text-[15px] not-italic font-normal leading-[24px] sm:leading-[34px] tracking-[0.75px] p-[12px] sm:p-[20px] text-center no-underline text-[#777] font-medium transition-colors relative"
              >
                Account Settings
              </a>
              <a
                href="#"
                className="tab active text-[13px] sm:text-[15px] not-italic font-normal leading-[24px] sm:leading-[34px] tracking-[0.75px] text-[#14142b] p-[12px] sm:p-[20px] text-center no-underline font-medium transition-colors relative"
              >
                Order History
              </a>
            </nav>
            {/* Order History List */}
            <div className="order-list grid grid-rows-[repeat(auto-fill,_minmax(200px,_auto))] sm:grid-rows-[repeat(auto-fill,_minmax(250px,_auto))] gap-[16px] md:gap-[20px]">
              {/* Order 1 */}
              <article className="order-card min-h-[200px] sm:h-[241px] bg-white rounded-[16px] p-[16px] sm:p-[24px] shadow-md">
                <div className="order-details grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-[12px] sm:gap-[20px] mb-[12px] sm:mb-[16px]">
                  <div className="order-info">
                    <p className="order-date text-[12px] sm:text-[14px] text-[#999] mb-[4px] sm:mb-[8px]">
                      Tuesday, 07 July 2020 - 04:30pm
                    </p>
                    <h3 className="movie-title text-[16px] sm:text-[20px] not-italic font-semibold leading-[28px] sm:leading-[38px] tracking-[0.75px]">
                      Spider-Man: Homecoming
                    </h3>
                  </div>
                  <img
                    className="cinema-logo w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] rounded-[4px] self-center mx-auto sm:mx-0"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/cineone21dash.svg"
                    alt="cineone 21"
                  />
                </div>
                <hr className="order-divider border-none h-px bg-[#eee] mx-0 my-[20px] sm:my-[36px]" />
                <div className="order-actions grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-0 items-center">
                  <div className="status-badges flex flex-col sm:flex-row gap-[8px] sm:gap-[12px]">
                    <span className="badge active px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(0,_200,_150,_0.2)] text-[#00ba88] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Ticket in active
                    </span>
                    <span className="badge not-paid px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(255,_100,_100,_0.2)] text-[#e82c2c] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Not Paid
                    </span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle p-2 text-sm rounded border border-gray-300 mt-2 sm:mt-0 w-full sm:w-auto"
                  >
                    <option>Show Details</option>
                  </select>
                </div>
              </article>

              {/* Order 2 - Apply same responsiveness pattern */}
              <article className="order-card min-h-[200px] sm:h-[241px] bg-white rounded-[16px] p-[16px] sm:p-[24px] shadow-md">
                <div className="order-details grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-[12px] sm:gap-[20px] mb-[12px] sm:mb-[16px]">
                  <div className="order-info">
                    <p className="order-date text-[12px] sm:text-[14px] text-[#999] mb-[4px] sm:mb-[8px]">
                      Tuesday, 07 July 2020 - 04:30pm
                    </p>
                    <h3 className="movie-title text-[16px] sm:text-[20px] not-italic font-semibold leading-[28px] sm:leading-[38px] tracking-[0.75px]">
                      Spider-Man: Homecoming
                    </h3>
                  </div>
                  <img
                    className="cinema-logo w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] rounded-[4px] self-center mx-auto sm:mx-0"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/cineone21dash.svg"
                    alt="cineone 21"
                  />
                </div>
                <hr className="order-divider border-none h-px bg-[#eee] mx-0 my-[20px] sm:my-[36px]" />
                <div className="order-actions grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-0 items-center">
                  <div className="status-badges flex flex-col sm:flex-row gap-[8px] sm:gap-[12px]">
                    <span className="badge active px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(0,_200,_150,_0.2)] text-[#00ba88] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Ticket in active
                    </span>
                    <span className="badge not-paid px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(255,_100,_100,_0.2)] text-[#e82c2c] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Not Paid
                    </span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle p-2 text-sm rounded border border-gray-300 mt-2 sm:mt-0 w-full sm:w-auto"
                  >
                    <option>Show Details</option>
                  </select>
                </div>
              </article>

              {/* Order 3 - Apply same responsiveness pattern */}
              <article className="order-card min-h-[200px] sm:h-[241px] bg-white rounded-[16px] p-[16px] sm:p-[24px] shadow-md">
                <div className="order-details grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-[12px] sm:gap-[20px] mb-[12px] sm:mb-[16px]">
                  <div className="order-info">
                    <p className="order-date text-[12px] sm:text-[14px] text-[#999] mb-[4px] sm:mb-[8px]">
                      Tuesday, 07 July 2020 - 04:30pm
                    </p>
                    <h3 className="movie-title text-[16px] sm:text-[20px] not-italic font-semibold leading-[28px] sm:leading-[38px] tracking-[0.75px]">
                      Spider-Man: Homecoming
                    </h3>
                  </div>
                  <img
                    className="cinema-logo w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] rounded-[4px] self-center mx-auto sm:mx-0"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/cineone21dash.svg"
                    alt="cineone 21"
                  />
                </div>
                <hr className="order-divider border-none h-px bg-[#eee] mx-0 my-[20px] sm:my-[36px]" />
                <div className="order-actions grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-0 items-center">
                  <div className="status-badges flex flex-col sm:flex-row gap-[8px] sm:gap-[12px]">
                    <span className="badge active px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(0,_200,_150,_0.2)] text-[#00ba88] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Ticket in active
                    </span>
                    <span className="badge not-paid px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px] font-medium w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center bg-[rgba(255,_100,_100,_0.2)] text-[#e82c2c] font-bold leading-[20px] sm:leading-[24px] tracking-[0.75px]">
                      Not Paid
                    </span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle p-2 text-sm rounded border border-gray-300 mt-2 sm:mt-0 w-full sm:w-auto"
                  >
                    <option>Show Details</option>
                  </select>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HistoryOrder;
