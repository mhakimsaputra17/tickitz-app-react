import React from "react";

function MovieCard({ id, imageUrl, title, onButtonClick }) {
  return (
    <>
      <div className="movie-card mb-[30px] transition-all duration-300 active:-translate-y-2 hover:-translate-y-2 [scroll-snap-align:start]">
        <div className="poster relative overflow-hidden rounded-[8px] [box-shadow:0_4px_12px_rgba(0,_0,_0,_0.1)]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto [aspect-ratio:2/3] object-cover rounded-[8px] transition transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="actions absolute top-[0] left-[0] right-[0] bottom-[0] flex flex-col justify-center items-center gap-[10px] bg-[rgba(0,_0,_0,_0.7)] opacity-0 [transition:opacity_0.3s_ease] hover:opacity-100">
            <a
              href="./pages/order/order-page.html"
              className="button button-outline"
            >
              Details
            </a>
            <a
              href="./pages/order/order-page.html"
              className="button button-primary"
            >
              Buy Ticket
            </a>
          </div>
        </div>
        <h3 className="mt-[19px] text-[20px] font-bold leading-[1.4] tracking-[1px]">
          {title}
        </h3>
        <div className="tags flex gap-[10px] mt-[14px] flex-wrap">
          <span className="tag bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]">
            Action
          </span>
          <span className="tag bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]">
            Adventure
          </span>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
