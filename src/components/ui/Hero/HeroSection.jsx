import React from "react";

function HeroSection() {
  return (
    <>
      <section className="hero-section flex flex-col md:flex-row px-[5%] py-[24px] md:py-[36px] lg:py-[48px] gap-[16px] md:gap-[20px] items-center">
        <div className="hero-content w-full md:flex-[1] pr-[0] md:pr-[20px] text-center md:text-left">
          <p className="content-moto text-[14px] sm:text-[16px] md:text-[18px] mb-[8px] md:mb-[10px] text-blue-700">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-[16px] md:mb-[24px] font-medium leading-[1.2] md:leading-[1.3]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <p className="content-link text-[14px] md:text-[16px] mb-[10px] text-gray-400">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="hero-images w-full md:flex-[1] flex justify-center items-center mt-[20px] md:mt-0">
          <div className="image-flex-container flex flex-wrap w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
            <div className="image-row flex-[50%] px-[4px] sm:px-[6px] md:px-[8px] py-[0]">
              <img
                className="rounded-[8px] block transition-all duration-300 active:scale-105 hover:scale-105 mt-[12px] md:mt-[16px] w-full h-auto "
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/johnwick.svg"
                alt="johnwick movie"
              />
              <img
                className="rounded-[8px] block transition-all duration-300 active:scale-105 hover:scale-105 mt-[12px] md:mt-[16px] w-full h-auto"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/spiderman.svg"
                alt="spiderman movie"
              />
            </div>
            <div className="image-row flex-[50%] px-[4px] sm:px-[6px] md:px-[8px] py-[0]">
              <img
                className="rounded-[8px] block transition-all duration-300 active:scale-105 hover:scale-105 mt-[12px] md:mt-[16px] w-full h-auto"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/lionking.svg"
                alt="lionking movie"
              />
              <img
                className="rounded-[8px] block transition-all duration-300 active:scale-105 hover:scale-105 mt-[12px] md:mt-[16px] w-full h-auto"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/roblox.svg"
                alt="roblox movie"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
