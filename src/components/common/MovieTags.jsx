import React from "react";

function MovieTags() {
  return (
    <>
      <div className="tags flex gap-[10px] mt-[14px] flex-wrap">
        <span className="tag text-[#a0a3bd] bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]">
          Action
        </span>
        <span className="tag text-[#a0a3bd] bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]">
          Adventure
        </span>
        <span className="tag text-[#a0a3bd] bg-[rgba(160,_163,_189,_0.1)] rounded-[20px] text-[11px] text-center font-normal leading-[normal] px-[15px] py-[5px]">
          Fantasy
        </span>
      </div>
    </>
  );
}

export default MovieTags;
