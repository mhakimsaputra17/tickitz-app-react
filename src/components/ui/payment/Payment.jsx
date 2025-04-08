import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentData, setPaymentData] = useState({
    movieTitle: "Spider-Man: Homecoming",
    date: "Tuesday, 07 July 2020",
    time: "02:00pm",
    cinema: "CineOne21 Cinema",
    tickets: 3,
    seats: ["C4", "C5", "C6"],
    totalPrice: 30,
    cinemaLogo: "",
  });

  // Get data from location state if available
  useEffect(() => {
    if (location.state?.bookingData) {
      setPaymentData(location.state.bookingData);
    }
  }, [location]);

  // Payment method selection
  const [selectedMethod, setSelectedMethod] = useState(null);

  // Form validation state
  const [formData, setFormData] = useState({
    fullName: "Jonas El Rodriguez",
    email: "jonasrodri123@gmail.com",
    phoneCode: "+62",
    phoneNumber: "8144568721",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Validate on change
    validateField(id, value);
  };

  // Validate a single field
  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.trim().length < 3)
          error = "Name must be at least 3 characters";
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Enter a valid email address";
        break;

      case "phoneNumber":
        const phoneRegex = /^\d{9,12}$/;
        if (!value.trim()) error = "Phone number is required";
        else if (!phoneRegex.test(value)) error = "Enter a valid phone number";
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));

    return !error;
  };

  // Validate all fields before payment
  const validateForm = () => {
    let isValid = true;

    // Validate each field
    const fields = ["fullName", "email", "phoneNumber"];
    fields.forEach((field) => {
      const value = formData[field];
      const fieldValid = validateField(field, value);
      if (!fieldValid) isValid = false;
    });

    return isValid;
  };

  // If no payment data is provided, redirect back
  useEffect(() => {
    if (!location.state?.bookingData && !location.state?.movieData) {
      // If user directly accessed this page without going through seats selection
      navigate("/movies");
    }
  }, [location, navigate]);

  const paymentMethods = [
    {
      id: "googlepay",
      name: "Google Pay",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/googlepay.svg",
    },
    {
      id: "visa",
      name: "Visa",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/visa.svg",
    },
    {
      id: "gopay",
      name: "GoPay",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/gopay.svg",
    },
    {
      id: "paypal",
      name: "PayPal",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/paypal.svg",
    },
    {
      id: "dana",
      name: "Dana",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/dana2.png",
    },
    {
      id: "bca",
      name: "BCA",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/bca.svg",
    },
    {
      id: "bri",
      name: "Bank BRI",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/bri.svg",
    },
    {
      id: "ovo",
      name: "OVO",
      logo: "https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/ovo.svg",
    },
  ];

  const handlePayment = () => {
    if (!selectedMethod) return;

    // Validate form before proceeding
    if (!validateForm()) {
      // Show alert if validation fails
      alert("Please fix the errors in the form before proceeding");
      return;
    }

    // Create the full ticket data to pass to the ticket page
    const ticketData = {
      ...paymentData,
      paymentMethod: selectedMethod,
      paymentDate: new Date().toISOString(),
      orderId: `ORD-${Math.floor(Math.random() * 1000000)}`,
      paymentLogo: paymentMethods.find((m) => m.id === selectedMethod)?.logo,
      movieData: location.state?.movieData,
      customerDetails: {
        name: formData.fullName,
        email: formData.email,
        phone: `${formData.phoneCode}${formData.phoneNumber}`,
      },
    };

    // Navigate to ticket page with the data
    navigate("/order/ticket", { state: { ticketData } });
  };

  return (
    <>
      <div className="container max-w-[600px] mx-[auto] my-[0] px-[15px] py-[0]">
        {/* Progress steps */}
        <div className="progress-steps flex justify-between items-center mb-[30px] px-[20px] py-[0] mt-[20px] mx-[0]">
          <div className="step flex flex-col items-center relative flex-[1]">
            <div className="step-icon step-completed bg-[#2e7d32] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[white] font-bold mb-[10px]">
              ✓
            </div>
            <div className="step-label text-[14px] text-[#666] text-center">
              Dates And Time
            </div>
            <div className="step-line z-[-1] absolute top-[25px] -right-2/4 w-full h-[2px] bg-[url(https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/divider.svg)]" />
          </div>
          <div className="step flex flex-col items-center relative flex-[1]">
            <div className="step-icon step-completed bg-[#2e7d32] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center text-[white] font-bold mb-[10px]">
              ✓
            </div>
            <div className="step-label text-[14px] text-[#666] text-center">
              Seat
            </div>
            <div className="step-line z-[-1] absolute top-[25px] -right-2/4 w-full h-[2px] bg-[url(https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/divider.svg)]" />
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

        {/* Cinema logo if available */}
        {paymentData.cinemaLogo && (
          <div className="flex justify-center mb-4">
            <div className="w-32 h-12 flex items-center justify-center">
              <img
                src={paymentData.cinemaLogo}
                alt="Cinema logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        )}

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
            {paymentData.date} at {paymentData.time}
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            MOVIE TITLE
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            {paymentData.movieTitle}
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            CINEMA NAME
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            {paymentData.cinema}
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            SEATS
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            {paymentData.seats.join(", ")}
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            NUMBER OF TICKETS
          </div>
          <div className="info-value text-[16px] mb-[20px]">
            {paymentData.tickets} pieces
          </div>
          <div className="info-divider h-px bg-[#eee] mx-[0] my-[15px]" />
          <div className="info-label text-[#999] text-[14px] mb-[5px] uppercase">
            TOTAL PAYMENT
          </div>
          <div className="info-value payment-amount text-[16px] mb-[20px] text-[#3f51b5] font-bold">
            ${paymentData.totalPrice}.00
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
              className={`form-control w-full p-[15px] border-[1px] ${
                errors.fullName ? "border-red-500" : "border-[#ddd]"
              } rounded-[8px] text-[16px]`}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
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
              className={`form-control w-full p-[15px] border-[1px] ${
                errors.email ? "border-red-500" : "border-[#ddd]"
              } rounded-[8px] text-[16px]`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
                className="form-control phone-code w-[80px] p-[15px] border-[1px] border-[#ddd] rounded-[8px] text-[16px]"
                value={formData.phoneCode}
                onChange={handleInputChange}
              />
              <div className="flex-1 flex flex-col">
                <input
                  type="text"
                  id="phoneNumber"
                  className={`form-control phone-number flex-1 min-w-[150px] p-[15px] border-[1px] ${
                    errors.phoneNumber ? "border-red-500" : "border-[#ddd]"
                  } rounded-[8px] text-[16px]`}
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <h2 className="section-header">Payment Method</h2>
          <div className="payment-methods grid grid-cols-[repeat(4,_1fr)] gap-[15px] mb-[30px]">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`border-[1px] rounded-[8px] p-[15px] flex items-center justify-center h-[60px] cursor-pointer transition-all ${
                  selectedMethod === method.id
                    ? "border-[#3f51b5] border-2 bg-blue-50"
                    : "border-[#ddd]"
                }`}
                title={method.name}
                onClick={() => setSelectedMethod(method.id)}
              >
                <img
                  className="max-w-full max-h-[30px] object-contain"
                  src={method.logo}
                  alt={method.name}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className={`btn-submit w-full p-[18px] text-[white] border-[none] rounded-[8px] text-[16px] font-bold cursor-pointer transition-all ${
              selectedMethod && !Object.values(errors).some((error) => error)
                ? "bg-[#3f51b5] hover:bg-[#303f9f]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={
              !selectedMethod || Object.values(errors).some((error) => error)
            }
            onClick={handlePayment}
          >
            Pay your order
          </button>
        </div>
      </div>
    </>
  );
}

export default Payment;
