import React from "react";

function FeatSection() {
  return (
    <>
      <section className="w-full overflow-x-hidden">
        <div className="header-features px-[5%] py-[20px] md:py-[30px] lg:py-[40px]">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-[1.6] md:leading-[34px] tracking-[0.75px] pb-[10px] md:pb-[14px] text-[#1d4ed8]">
            WHY CHOOSE US
          </p>
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[1.3] md:leading-[1.4] tracking-[0.8px] md:tracking-[1px] max-w-full md:max-w-[638px]">
            Unleashing the Ultimate Movie Experience
          </h2>
        </div>
        <div className="features flex flex-col md:flex-row px-[5%] py-[10px] md:py-[15px] lg:py-[20px] gap-y-[15px] md:gap-y-0 md:flex-wrap">
          <div className="feature flex-[1_1_100%] md:flex-[1_1_300px] flex flex-col items-start gap-[8px] md:gap-[10px] p-[15px] md:p-[20px]">
            <div className="icon w-[45px] h-[45px] md:w-[54px] md:h-[54px] rounded-full bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/shieldone.svg"
                alt="shieldone"
                className="w-[20px] md:w-auto"
              />
            </div>
            <h3 className="mx-[0] my-[5px] md:my-[10px] font-medium text-base md:text-lg">
              Security Guaranteed
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] md:leading-[1.6] tracking-[0.5px] md:tracking-[0.75px] max-w-full md:max-w-[340px] text-justify text-[#a0a3bd]">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="feature flex-[1_1_100%] md:flex-[1_1_300px] flex flex-col items-start gap-[8px] md:gap-[10px] p-[15px] md:p-[20px]">
            <div className="icon w-[45px] h-[45px] md:w-[54px] md:h-[54px] rounded-full bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/check.svg"
                alt="check"
                className="w-[20px] md:w-auto"
              />
            </div>
            <h3 className="mx-[0] my-[5px] md:my-[10px] font-medium text-base md:text-lg">
              Best Quality
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] md:leading-[1.6] tracking-[0.5px] md:tracking-[0.75px] max-w-full md:max-w-[340px] text-justify text-[#a0a3bd]">
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
          <div className="feature flex-[1_1_100%] md:flex-[1_1_300px] flex flex-col items-start gap-[8px] md:gap-[10px] p-[15px] md:p-[20px]">
            <div className="icon w-[45px] h-[45px] md:w-[54px] md:h-[54px] rounded-full bg-[rgba(29,_78,_216,_0.2)] flex justify-center items-center">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/chat.svg"
                alt="chat"
                className="w-[20px] md:w-auto"
              />
            </div>
            <h3 className="mx-[0] my-[5px] md:my-[10px] font-medium text-base md:text-lg">
              24/7 Support
            </h3>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5] md:leading-[1.6] tracking-[0.5px] md:tracking-[0.75px] max-w-full md:max-w-[340px] text-justify text-[#a0a3bd]">
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
