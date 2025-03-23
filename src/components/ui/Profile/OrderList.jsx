import React from "react";

function OrderList({
  movieTitle,
  cinemaLogo,
  ticketStatus,
  paymentStatus,
  ticketText,
  paymentText,
}) {
  const ticketStatusClass = {
    ticketActive: "bg-[rgba(0,_200,_150,_0.2)] text-[#00ba88]",

    ticketUsed: "bg-[#6E719133] text-[#6E7191]",
  };
  const paymentStatusClass = {
    notPaid: "bg-[rgba(255,_100,_100,_0.2)] text-[#e82c2c]",
    paid: "bg-[#1D4ED833] text-[#1D4ED8]",
  };

  return (
    <>
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
            <span
              className={`badge active ${ticketStatusClass[ticketStatus]} px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px]  w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center font-medium leading-[20px] sm:leading-[24px] tracking-[0.75px]`}
            >
              {ticketText}
            </span>
            <span
              className={`badge not-paid ${paymentStatusClass[paymentStatus]} px-[12px] sm:px-[16px] py-[6px] sm:py-[8px] rounded-[8px] text-[12px] sm:text-[14px]  w-full sm:w-[196px] h-[32px] sm:h-[40px] flex items-center justify-center sm:text-center  font-medium leading-[20px] sm:leading-[24px] tracking-[0.75px]`}
            >
              {paymentText}
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
    </>
  );
}

export default OrderList;
