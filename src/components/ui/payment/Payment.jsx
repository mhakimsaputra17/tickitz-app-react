import React from "react";

function Payment() {
  return (
    <>
      <div className="container max-w-[600px] mx-[auto] my-[0] px-[15px] py-[0]">
        {/* Progress steps */}
        <div className="progress-steps flex justify-between items-center mb-[30px] px-[20px] py-[0] mt-[20px] mx-[0] mb-[30px] px-[10px] py-[0]">
          <div className="step flex flex-col items-center relative flex-[1]">
            <div className="step-icon step-completed bg-[#2e7d32] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[white] font-bold mb-[10px]">
              ✓
            </div>
            <div className="step-label text-[14px] text-[#666] text-center">
              Dates And Time
            </div>
            <div className="step-line  z-[-1] absolute top-[25px] -right-2/4 w-full h-[2px] bg-[url(https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/divider.svg)]" />
          </div>
          <div className="step flex flex-col items-center relative flex-[1]">
            <div className="step-icon step-completed bg-[#2e7d32] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[white] font-bold mb-[10px]">
              ✓
            </div>
            <div className="step-label text-[14px] text-[#666] text-center">
              Seat
            </div>
            <div className="step-line  z-[-1] absolute top-[25px] -right-2/4 w-full h-[2px] bg-[url(https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/divider.svg)]" />
          </div>
          <div className="step flex flex-col items-center relative flex-[1]">
            <div className="step-icon step-current bg-[#3f51b5] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[white] font-bold mb-[10px]">
              3
            </div>
            <div className="step-label text-[14px] text-[#666] text-center">
              Payment
            </div>
          </div>
        </div>
        {/* Main content card */}
        <div className="payment-card bg-[white] rounded-[12px] [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.05)] p-[30px] mb-[20px]">
          {/* Payment Info Section */}
          <h2 className="section-header text-[24px] font-bold mb-[20px] text-[#222]">
            Payment Info
          </h2>
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            DATE &amp; TIME
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            Tuesday, 07 July 2020 at 02:00pm
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            MOVIE TITLE
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            Spider-Man: Homecoming
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            CINEMA NAME
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            CineOne21 Cinema
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            NUMBER OF TICKETS
          </div>
          <div className="info-value text-[16px] mb-[20px]">3 pieces</div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            TOTAL PAYMENT
          </div>
          <div className="info-value payment-amount text-[16px] mb-[20px] text-[#3f51b5] font-bold">
            $30.00
          </div>
          {/* Personal Information Section */}
          <h2 className="section-header">Personal Information</h2>
          <div className="form-group mb-[20px]">
            <label
              htmlFor="fullName"
              className="form-label block mb-[8px] text-[#666]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control w-full p-[15px] border-[1px] border-[solid] border-[#ddd] rounded-[8px] text-[16px]"
              defaultValue="Jonas El Rodriguez"
            />
          </div>
          <div className="form-group mb-[20px]">
            <label
              htmlFor="email"
              className="form-label block mb-[8px] text-[#666]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control mb-[20px] w-full p-[15px] border-[1px] border-[solid] border-[#ddd] rounded-[8px] text-[16px]"
              defaultValue="jonasrodri123@gmail.com"
            />
          </div>
          <div className="form-group mb-[20px]">
            <label
              htmlFor="phoneCode"
              className="form-label block mb-[8px] text-[#666]"
            >
              Phone Number
            </label>
            <div className="phone-input flex flex-wrap gap-[10px]">
              <input
                type="text"
                id="phoneCode"
                className="form-control phone-code w-[80px] mb-[20px] w-full p-[15px] border-[1px] border-[solid] border-[#ddd] rounded-[8px] text-[16px]"
                defaultValue={+62}
              />
              <input
                type="text"
                id="phoneNumber"
                className="form-control phone-number flex-[1] min-w-[150px] mb-[20px] w-full p-[15px] border-[1px] border-[solid] border-[#ddd] rounded-[8px] text-[16px]"
                defaultValue={8144568721}
              />
            </div>
          </div>
          {/* Payment Method Section */}
          <h2 className="section-header">Payment Method</h2>
          <div className="payment-methods grid grid-cols-[repeat(4,_1fr)] gap-[15px] mb-[30px]">
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="Google Pay"
            >
              {/* Placeholder for Google Pay icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/googlepay.svg"
                alt="googlepay"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="Visa"
            >
              {/* Placeholder for Visa icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/visa.svg"
                alt="visa"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="GoPay"
            >
              {/* Placeholder for GoPay icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/gopay.svg"
                alt="gopay"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="PayPal"
            >
              {/* Placeholder for PayPal icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/paypal.svg"
                alt="paypal"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="Dana"
            >
              {/* Placeholder for Dana icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/dana2.png"
                alt="dana"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="BCA"
            >
              {/* Placeholder for BCA icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/bca.svg"
                alt="bca"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="Bank BRI"
            >
              {/* Placeholder for Bank BRI icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/bri.svg"
                alt="bri"
              />
            </div>
            <div
              className=" border-[1px] border-[solid] border-[#ddd] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer [transition:border-color_0.2s]"
              title="OVO"
            >
              {/* Placeholder for OVO icon */}
              <img
                className="max-w-full max-h-[30px] object-contain"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ovo.svg"
                alt="ovo"
              />
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="button"
            className="btn-submit w-full p-[18px] bg-[#3f51b5] text-[white] border-[none] rounded-[8px] text-[16px] font-bold cursor-pointer [transition:background-color_0.2s]"
          >
            Pay your order
          </button>
        </div>
      </div>
    </>
  );
}

export default Payment;
