import React from "react";

function HeroSection() {
  return (
    <>
      <section className="hero-section flex px-[5%] py-[48px] gap-[20px] items-center">
        <div className="hero-content flex-[1] pr-[20px]">
          <p className="content-moto text-[18px] mb-[10px] text-blue-700">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </p>
          <h1 className="text-[40px] mb-[24px] font-medium leading-[1.3]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <p className="content-link text-[16px] mb-[10px] text-gray-400">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
        <div className="hero-images flex-[1] flex justify-center items-center">
          <div className="image-flex-container flex flex-wrap w-full max-w-[600px]">
            <div className="image-row flex-[50%] px-[8px] py-[0]">
              <img
                className="rounded-[8px] block transition-all duration-300 hover:scale-105 mt-[16px] w-full h-auto "
                src="src\assets\images\johnwick.svg"
                alt="johnwick movie"
              />
              <img
                className="rounded-[8px] block transition-all duration-300 hover:scale-105 mt-[16px] w-full h-auto"
                src="src\assets\images\spiderman.svg"
                alt="spiderman movie"
              />
            </div>
            <div className="image-row flex-[50%] px-[8px] py-[0]">
              <img
                className="rounded-[8px] block transition-all duration-300 hover:scale-105 mt-[16px] w-full h-auto"
                src="src\assets\images\lionking.svg"
                alt="lionking movie"
              />
              <img
                className="rounded-[8px] block transition-all duration-300 hover:scale-105 mt-[16px] w-full h-auto"
                src="src\assets\images\roblox.svg"
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
