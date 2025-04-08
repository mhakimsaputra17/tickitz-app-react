import React from "react";
import OrderList from "./OrderList";

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
                href="/profile/account"
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

              <OrderList
                ticketStatus={"ticketActive"}
                paymentStatus={"notPaid"}
                ticketText={"Ticket in Active"}
                paymentText={"Not Paid"}
              />
              <OrderList
                ticketStatus={"ticketUsed"}
                paymentStatus={"paid"}
                ticketText={"Ticket Used"}
                paymentText={"Paid"}
              />
              <OrderList
                ticketStatus={"ticketUsed"}
                paymentStatus={"paid"}
                ticketText={"Ticket Used"}
                paymentText={"Paid"}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HistoryOrder;
