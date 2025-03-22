import React from "react";
import { Link } from "react-router";

function ButtonMovie({ id }) {
  return (
    <>
      <div className="actions absolute top-[0] left-[0] right-[0] bottom-[0] flex flex-col justify-center items-center gap-[8px] md:gap-[10px] bg-[rgba(0,_0,_0,_0.7)] opacity-0 [transition:opacity_0.3s_ease] hover:opacity-100 ">
        <Link
          to={`/movies/detail/${id}`}
          className="button button-outline px-[12px] md:px-[18px] py-[8px] md:py-[12px] rounded-[4px] font-semibold no-underline [transition:all_0.3s] cursor-pointer w-[80%] max-w-[185px] text-center text-white border-1"
        >
          Details
        </Link>
        <Link
          to={`/movies/detail/${id}`}
          className="button button-primary px-[12px] md:px-[18px] py-[8px] md:py-[12px] rounded-[4px] font-semibold no-underline [transition:all_0.3s] cursor-pointer w-[80%] max-w-[185px] text-center border-[1px] border-[solid] border-[#fff] bg-[#1d4ed8] text-[#fff] text-[14px] font-normal tracking-[0.75px] hover:bg-[#1642b8]"
        >
          Buy Ticket
        </Link>
      </div>
    </>
  );
}

export default ButtonMovie;
