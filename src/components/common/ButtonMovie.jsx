import React from "react";

function ButtonMovie() {
  return (
    <>
      <div className="actions absolute top-[0] left-[0] right-[0] bottom-[0] flex flex-col justify-center items-center gap-[10px] bg-[rgba(0,_0,_0,_0.7)] opacity-0 [transition:opacity_0.3s_ease] hover:opacity-100">
        <a
          href="./pages/order/order-page.html"
          className="button button-outline px-[18px] py-[12px] rounded-[4px] font-semibold no-underline [transition:all_0.3s] cursor-pointer w-[185px] text-center border-[none] px-[18px] py-[12px] rounded-[4px] font-semibold no-underline [transition:all_0.3s] cursor-pointer w-[185px] text-center border-[none]"
        >
          Details
        </a>
        <a
          href="./pages/order/order-page.html"
          className="button button-primary px-[18px] py-[12px] rounded-[4px] font-semibold no-underline [transition:all_0.3s] cursor-pointer w-[185px] text-center border-[none] rounded-[5px] border-[1px] border-[solid] border-[#fff] bg-transparent text-[#fff] text-[14px] font-normal tracking-[0.75px] hover:bg-[#1642b8]"
        >
          Buy Ticket
        </a>
      </div>
    </>
  );
}

export default ButtonMovie;
