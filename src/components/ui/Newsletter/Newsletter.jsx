import React from "react";

function Newsletter() {
  return (
    <>
      <section className="newsletter-section flex justify-center items-center min-h-[40vh] px-[5%] py-[30px] md:py-[40px]">
        <div className="newsletter-container relative w-full max-w-[1100px] rounded-[12px] px-[20px] py-[40px] md:px-[30px] md:py-[60px] overflow-hidden bg-[#2563eb]">
          <div className="newsletter-content flex flex-col gap-[20px] md:gap-[30px] items-center relative justify-center">
            <h1 className="text-center text-[28px] md:text-[45px] font-normal leading-[1.2] tracking-[1px] mb-[15px] md:mb-[25px] max-w-[732px] text-white">
              Subscribe to our newsletter
            </h1>
            <form className="form-group flex flex-col md:flex-row gap-[15px] md:gap-[10px] w-full justify-center max-w-[620px] items-center">
              <input
                type="text"
                placeholder="First Name"
                aria-label="First Name"
                className="w-full md:flex-[1_1_200px] px-[16px] py-[17px] border-[1px] border-[solid] border-[rgba(255,255,255,0.3)] bg-transparent rounded-[5px] text-[16px] text-[#fff] not-italic font-normal leading-[26px] outline-[none] min-h-[50px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="w-full md:flex-[1_1_200px] px-[16px] py-[17px] border-[1px] border-[solid] border-[rgba(255,255,255,0.3)] bg-transparent rounded-[5px] text-[16px] text-[#fff] not-italic font-normal leading-[26px] outline-[none] min-h-[50px]"
              />
              <button
                type="submit"
                className="w-full md:w-auto rounded-[10px] bg-[#fff] md:min-w-[220px] h-[55px] px-[25px] py-[15px] font-semibold cursor-pointer text-[14px] tracking-[0.75px] border-[none] md:flex-[1_1_220px] [transition:background-color_0.3s]"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
