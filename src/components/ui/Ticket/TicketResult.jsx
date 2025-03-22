import React from "react";
import { Link } from "react-router";

function TicketResult() {
  return (
    <>
      <main className="tickett flex justify-center items-center min-h-screen w-full p-4">
        <main className="ticket-container flex flex-col md:flex-row w-full max-w-[1200px] h-auto md:h-[730px] [box-shadow:0_10px_30px_rgba(0,_0,_0,_0.1)] rounded-[8px] overflow-hidden">
          {/* Left side with movie poster background */}
          <section className="bg-[url(https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/poster/marvel-results.png?raw=true)] poster-section flex-1 bg-cover bg-center text-[white] p-6 md:p-[40px] relative flex flex-col justify-start min-h-[300px] md:min-h-0">
            <div className="poster-content max-w-full md:max-w-[400px] pt-10 md:pt-28">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tizkitz_signin.svg"
                alt="Tickitz Logo"
                className="w-32 md:w-auto"
              />
              <h2 className="thank-you text-[24px] md:text-[34px] font-semibold mb-[10px] md:mb-[16px]">
                Thankyou For Purchasing
              </h2>
              <p className="description text-[14px] md:text-[16px] leading-[1.6] opacity-80 mb-[20px] md:mb-[40px]">
                Lorem ipsum dolor sit amet consectetur. Quam pretium pretium
                tempor integer sed magna et.
              </p>
              <div className="download-prompt flex items-center text-[14px] md:text-[16px] mt-[20px] md:mt-[40px]">
                <p>Please Download Your Ticket</p>
                <span className="arrow ml-[12px] text-[20px]">→</span>
              </div>
            </div>
            {/* Movie poster will be added as background in CSS */}
          </section>
          {/* Right side with ticket details */}
          <section className="ticket-details flex-1 bg-[#f8f9fc] p-6 md:p-[40px] flex flex-col justify-between">
            <div className="ticket-card bg-[white] rounded-[16px] overflow-hidden [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.05)] w-full max-w-[280px] mx-auto">
              {/* QR code placeholder */}
              <div className="qr-code-container relative">
                <div className="qr-code h-[200px] flex justify-center items-center p-[20px] bg-[white]">
                  <img
                    src="https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/poster/QR%20Code%201.png?raw=true"
                    alt="QR Code"
                    className="max-w-full"
                  />
                </div>
                {/* Perforated edge with cutouts */}
                <div className="perforation relative h-px bg-transparent">
                  <div className="cutout left absolute w-[20px] h-[20px] bg-[#f8f9fc] rounded-[50%] -top-[10px] -left-[10px]" />
                  <div className="dashed-line absolute top-[0] left-[0] right-[0] h-px bg-[linear-gradient(to_right,_#e0e0e0_50%,_transparent_50%)] [background-size:8px_1px] bg-repeat-x" />
                  <div className="cutout right absolute w-[20px] h-[20px] bg-[#f8f9fc] rounded-[50%] -top-[10px] -right-[10px]" />
                </div>
              </div>
              {/* Ticket information */}
              <div className="ticket-info px-[20px] py-[24px]">
                <div className="flex justify-between mb-[20px]">
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Movie
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      Spider-Man: ...
                    </p>
                  </div>
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Category
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      PG-13
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mb-[20px]">
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Date
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      07 Jul
                    </p>
                  </div>
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Time
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      2:00pm
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mb-[20px]">
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Count
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      3 pcs
                    </p>
                  </div>
                  <div className="flex-[1]">
                    <p className="info-label text-[12px] text-[#9e9e9e] mb-[4px] font-normal">
                      Seats
                    </p>
                    <p className="info-value text-[14px] font-medium text-[#333]">
                      C4, C5, C6
                    </p>
                  </div>
                </div>
                <div className="total-row flex justify-between px-[0] py-[12px] border-t-[1px_solid_#f0f0f0] mt-[4px]">
                  <p className="total-label text-[14px] font-medium">Total</p>
                  <p className="total-value text-[14px] font-medium text-[#333]">
                    $30.00
                  </p>
                </div>
              </div>
            </div>
            {/* Action buttons */}
            <div className="action-buttons flex flex-col gap-[12px] mt-[24px] w-full max-w-[330px] mx-auto">
              <button className="download-btn hover:bg-[#f8f9ff] bg-[white] border-[1px] border-[solid] border-[#e0e0e0] text-[#4361ee] w-full p-[14px] rounded-[8px] text-[16px] font-medium cursor-pointer flex justify-center items-center gap-[8px] [transition:all_0.2s_ease]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1={12} y1={15} x2={12} y2={3} />
                </svg>
                Download
              </button>
              <Link to="/profile/order/history">
                <button className="done-btn hover:bg-[#3a56d4] bg-[#4361ee] border-[none] text-[white] w-full p-[14px] rounded-[8px] text-[16px] font-medium cursor-pointer flex justify-center items-center gap-[8px] [transition:all_0.2s_ease]">
                  Done
                </button>
              </Link>
            </div>
          </section>
        </main>
      </main>
    </>
  );
}

export default TicketResult;
