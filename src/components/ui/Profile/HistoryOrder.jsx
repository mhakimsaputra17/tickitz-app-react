import React from "react";

function HistoryOrder() {
  return (
    <>
      <main>
        {/* profile */}
        <div className="profile-container grid grid-cols-[280px_1fr] grid-rows-[auto] gap-[35px] max-w-[1200px] mx-[auto] my-[0]">
          {/* left sidebar */}
          <aside className="sidebar h-[740px] bg-[white] rounded-[20px] p-[30px] [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.05)]">
            <div className="info-header flex justify-between items-center mb-[24px]">
              <h2 className="text-[16px] font-semibold text-[#555]">INFO</h2>
              <div className="menu-dots w-[24px] h-[24px] rounded-[50%]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/dots.svg"
                  alt="dots icon"
                />
              </div>
            </div>
            <div className="user-profile flex flex-col items-center mb-[24px]">
              <img
                className=""
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/profile-sidebar.svg"
                alt="profile-sidebar"
              />
              <h3 className="user-name text-[18px] font-semibold mb-[4px]">
                Jonas El Rodriguez
              </h3>
              <p className="user-role text-[14px] text-[#777]">Moviegoers</p>
            </div>
            <hr className="divider border-[none] h-px bg-[#eee] mx-[0] my-[25px]" />
            <div className="loyalty-section mt-[24px]">
              <h4 className="loyalty-title text-[16px] font-semibold mb-[16px] leading-[28px] tracking-[0.75px]">
                Loyalty Points
              </h4>
              <div className="loyalty-card bg-[#1d4ed8] rounded-[12px] p-[16px] text-[white] grid grid-cols-[1fr_auto] mb-[16px]">
                <div className="card-content">
                  <p className="card-title text-[16px] mb-[8px]">Moviegoers</p>
                  <div className="points-container flex items-baseline">
                    <p className="points-value text-[28px] font-bold mr-[4px]">
                      320
                    </p>
                    <p className="points-label text-[14px] opacity-80">
                      points
                    </p>
                  </div>
                </div>
                <img
                  className="star-icon w-[32px] h-[32px] rounded-[50%]"
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/star.svg"
                  alt="star icon"
                />
              </div>
              <p className="points-info text-[#4e4b66] mb-[8px] text-[16px] not-italic font-normal leading-[32px]">
                180 points become a master
              </p>
              <div className="progress-bar h-[10px] bg-[#eee] rounded-[8px] overflow-hidden">
                <div className="progress-fill h-full w-1/2 rounded-[8px] bg-[#3366ff]" />
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <section className="main-content grid gap-[20px]">
            {/* Tabs Navigation */}
            <nav className="tabs bg-[#fff] rounded-[16px] grid grid-cols-[1fr_1fr_1fr_1fr] overflow-hidden [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.05)]">
              <a
                href="#"
                className="tab text-[15px] not-italic font-normal leading-[34px] tracking-[0.75px] p-[20px] text-center no-underline text-[#777] font-medium [transition:color_0.3s] relative"
              >
                Account Settings
              </a>
              <a
                href="#"
                className="tab active  text-[15px] not-italic font-normal leading-[34px] tracking-[0.75px] text-[#14142b] p-[20px] text-center no-underline text-[#777] font-medium [transition:color_0.3s] relative"
              >
                Order History
              </a>
            </nav>
            {/* Order History List */}
            <div className="order-list grid grid-rows-[repeat(auto-fill,_minmax(250px,_auto))] gap-[20px]">
              {/* Order 1 */}
              <article className="order-card h-[241px] bg-[white] rounded-[16px] p-[24px] [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.05)]">
                <div className="order-details grid grid-cols-[1fr_auto] gap-[20px] mb-[16px]">
                  <div className="order-info">
                    <p className="order-date text-[14px] text-[#999] mb-[8px]">
                      Tuesday, 07 July 2020 - 04:30pm
                    </p>
                    <h3 className="movie-title text-[20px] not-italic font-semibold leading-[38px] tracking-[0.75px]">
                      Spider-Man: Homecoming
                    </h3>
                  </div>
                  <img
                    className="cinema-logo w-[100px] h-[40px] rounded-[4px] self-center"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/cineone21dash.svg"
                    alt="cineone 21"
                  />
                </div>
                <hr className="order-divider border-[none] h-px bg-[#eee] mx-[0] my-[36px]" />
                <div className="order-actions grid grid-cols-[1fr_auto] items-center">
                  <div className="status-badges flex gap-[12px]">
                    <span className="badge active px-[16px] py-[8px] rounded-[8px] text-[14px] font-medium w-[196px] h-[40px] text-center bg-[rgba(0,_200,_150,_0.2)] text-[#00ba88] text-[12px] not-italic font-bold leading-[24px] tracking-[0.75px]">
                      Ticket in active
                    </span>
                    <span className="badge not-paid px-[16px] py-[8px] rounded-[8px] text-[14px] font-medium w-[196px] h-[40px] text-center bg-[rgba(255,_100,_100,_0.2)] text-[#e82c2c] text-[12px] not-italic font-bold leading-[24px] tracking-[0.75px]">
                      Not Paid
                    </span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle"
                  >
                    <option>Show Details</option>
                  </select>
                </div>
              </article>
              {/* Order 2 */}
              <article className="order-card">
                <div className="order-details">
                  <div className="order-info">
                    <p className="order-date">Monday, 14 June 2020 - 02:00pm</p>
                    <h3 className="movie-title">Avengers: End Game</h3>
                  </div>
                  <img
                    className="cinema-logo"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/ebvid.svg"
                    alt="ebv id icon"
                  />
                </div>
                <hr className="order-divider" />
                <div className="order-actions">
                  <div className="status-badges">
                    <span className="badge used">Ticket used</span>
                    <span className="badge paid">Paid</span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle"
                  >
                    <option>Show Details</option>
                  </select>
                </div>
              </article>
              {/* Order 3 */}
              <article className="order-card">
                <div className="order-details">
                  <div className="order-info">
                    <p className="order-date">Monday, 14 June 2020 - 02:00pm</p>
                    <h3 className="movie-title">Avengers: End Game</h3>
                  </div>
                  <img
                    className="cinema-logo"
                    src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/ebvid.svg"
                    alt="ebv id icon"
                  />
                </div>
                <hr className="order-divider" />
                <div className="order-actions">
                  <div className="status-badges">
                    <span className="badge used">Ticket used</span>
                    <span className="badge paid">Paid</span>
                  </div>
                  <select
                    name="showdetails"
                    id="showdetails"
                    className="details-toggle"
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
