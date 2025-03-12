import React from "react";

function FeatSection() {
  return (
    <>
      <section>
        <div className="header-features px-[5%] py-[40px]">
          <p className="text-[18px] font-medium leading-[34px] tracking-[0.75px] pb-[14px] text-[#1d4ed8]">
            WHY CHOOSE US
          </p>
          <h2 className="text-[32px] font-normal leading-[1.4] tracking-[1px] max-w-[638px]">
            Unleashing the Ultimate Movie Experience
          </h2>
        </div>
        <div className="features flex px-[5%] py-[20px] flex-wrap">
          <div className="feature flex-[1_1_300px] flex flex-col items-start gap-[10px] p-[20px]">
            <div className="icon w-[54px] h-[54px] rounded-[54px] bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/shieldone.svg"
                alt="shieldone"
              />
            </div>
            <h3 className="mx-[0] my-[10px] font-medium text-lg ">
              Guaranteed
            </h3>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[0.75px] max-w-[340px] text-justify text-[#a0a3bd]">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="feature flex-[1_1_300px] flex flex-col items-start gap-[10px] p-[20px]">
            <div className="icon w-[54px] h-[54px] rounded-[54px] bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/check.svg"
                alt="shieldone"
              />
            </div>
            <h3 className="mx-[0] my-[10px] font-medium text-lg ">
              Guaranteed
            </h3>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[0.75px] max-w-[340px] text-justify text-[#a0a3bd]">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="feature flex-[1_1_300px] flex flex-col items-start gap-[10px] p-[20px]">
            <div className="icon w-[54px] h-[54px] rounded-[54px] bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/chat.svg"
                alt="shieldone"
              />
            </div>
            <h3 className="mx-[0] my-[10px] font-medium text-lg ">
              Guaranteed
            </h3>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[0.75px] max-w-[340px] text-justify text-[#a0a3bd]">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatSection;
