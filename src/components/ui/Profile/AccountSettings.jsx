import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";

function AccountSettings() {
  const dispatch = useDispatch();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "Jonas",
    lastName: "El Rodriguez",
    email: "jonasrodri123@gmail.com",
    phoneCode: "+62",
    phoneNumber: "8144568721",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Validation state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmPassword: "",
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
      case "firstName":
      case "lastName":
        if (!value.trim())
          error = `${
            fieldName === "firstName" ? "First" : "Last"
          } name is required`;
        else if (value.trim().length < 2)
          error = `${
            fieldName === "firstName" ? "First" : "Last"
          } name must be at least 2 characters`;
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

      case "newPassword":
        if (value && value.length < 8)
          error = "Password must be at least 8 characters";
        break;

      case "confirmPassword":
        if (value !== formData.newPassword) error = "Passwords do not match";
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

  // Validate all fields before submission
  const validateForm = () => {
    let isValid = true;
    const requiredFields = ["firstName", "lastName", "email", "phoneNumber"];

    requiredFields.forEach((field) => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    // If user is trying to change password, validate password fields
    if (formData.newPassword || formData.confirmPassword) {
      if (!formData.password) {
        setErrors((prev) => ({
          ...prev,
          password: "Current password is required to change password",
        }));
        isValid = false;
      }

      if (
        !validateField("newPassword", formData.newPassword) ||
        !validateField("confirmPassword", formData.confirmPassword)
      ) {
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Profile updated successfully!");
      // Here you would typically send the data to your backend
    }
  };

  return (
    <>
      <main className="px-4 sm:px-6 md:px-8">
        {/* profile */}
        <div className="profile-container flex flex-col lg:grid lg:grid-cols-[280px_1fr] grid-rows-[auto] gap-[20px] md:gap-[35px] max-w-[1200px] mx-auto my-[20px] md:my-[30px]">
          {/* left sidebar */}
          <aside className="sidebar bg-white rounded-[20px] p-[20px] md:p-[30px] shadow-md mb-6 lg:mb-0 lg:h-[740px]">
            <div className="info-header flex justify-between items-center mb-[24px]">
              <h2 className="text-[14px] sm:text-[16px] font-semibold text-[#555]">
                INFO
              </h2>
              <div className="menu-dots w-[24px] h-[24px] rounded-[50%]">
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/dots.svg"
                  alt="dots icon"
                />
              </div>
            </div>
            <div className="user-profile flex flex-col items-center mb-[24px]">
              <img
                className="w-[80px] h-[80px] sm:w-auto sm:h-auto"
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/profile-sidebar.svg"
                alt="profile-sidebar"
              />
              <h3 className="user-name text-[16px] sm:text-[18px] font-semibold mb-[4px] mt-2">
                {formData.firstName} {formData.lastName}
              </h3>
              <p className="user-role text-[12px] sm:text-[14px] text-[#777]">
                Moviegoers
              </p>
            </div>
            <hr className="divider border-none h-px bg-[#eee] mx-0 my-[25px]" />
            <div className="loyalty-section mt-[24px]">
              <h4 className="loyalty-title text-[14px] sm:text-[16px] font-semibold mb-[16px] leading-[28px] tracking-[0.75px]">
                Loyalty Points
              </h4>
              <div className="loyalty-card bg-[#1d4ed8] rounded-[12px] p-[12px] sm:p-[16px] text-white grid grid-cols-[1fr_auto] mb-[16px]">
                <div className="card-content">
                  <p className="card-title text-[14px] sm:text-[16px] mb-[8px]">
                    Moviegoers
                  </p>
                  <div className="points-container flex items-baseline">
                    <p className="points-value text-[24px] sm:text-[28px] font-bold mr-[4px]">
                      320
                    </p>
                    <p className="points-label text-[12px] sm:text-[14px] opacity-80">
                      points
                    </p>
                  </div>
                </div>
                <img
                  className="star-icon w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] rounded-[50%]"
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/star.svg"
                  alt="star icon"
                />
              </div>
              <p className="points-info text-[#4e4b66] mb-[8px] text-[14px] sm:text-[16px] not-italic font-normal leading-[24px] sm:leading-[32px]">
                180 points become a master
              </p>
              <div className="progress-bar h-[10px] bg-[#eee] rounded-[8px] overflow-hidden">
                <div className="progress-fill h-full w-1/2 rounded-[8px] bg-[#3366ff]" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="main-content grid gap-[16px] md:gap-[20px]">
            {/* Tabs Navigation */}
            <nav className="tabs bg-white rounded-[16px] grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr] overflow-hidden shadow-md">
              <a
                href="#"
                className="tab active text-[13px] sm:text-[15px] not-italic font-normal leading-[24px] sm:leading-[34px] tracking-[0.75px] text-[#14142b] p-[12px] sm:p-[20px] text-center no-underline font-medium transition-colors relative"
              >
                Account Settings
              </a>
              <a
                href="/profile/order/history"
                className="tab text-[13px] sm:text-[15px] not-italic font-normal leading-[24px] sm:leading-[34px] tracking-[0.75px] p-[12px] sm:p-[20px] text-center no-underline text-[#777] font-medium transition-colors relative"
              >
                Order History
              </a>
            </nav>

            {/* Account Settings Form */}
            <div className="account-settings bg-white rounded-[16px] p-[20px] md:p-[30px] shadow-md">
              <h2 className="text-xl font-medium mb-6">Account Settings</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                  {/* First Name */}
                  <div className="form-group">
                    <label
                      htmlFor="firstName"
                      className="block text-[#666] mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="form-group">
                    <label
                      htmlFor="lastName"
                      className="block text-[#666] mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="block text-[#666] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-[#666] mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        id="phoneCode"
                        value={formData.phoneCode}
                        onChange={handleInputChange}
                        className="w-24 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="+62">+62</option>
                        <option value="+1">+1</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="text"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`flex-1 p-3 border ${
                          errors.phoneNumber
                            ? "border-red-500"
                            : "border-gray-300"
                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-medium mb-4 border-t pt-6">
                  Account and Privacy
                </h3>

                <div className="grid grid-cols-1 gap-5 mb-8">
                  {/* Current Password */}
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="block text-[#666] mb-2"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter your current password to change password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* New Password */}
                  <div className="form-group">
                    <label
                      htmlFor="newPassword"
                      className="block text-[#666] mb-2"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.newPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter new password (minimum 8 characters)"
                    />
                    {errors.newPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.newPassword}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="form-group">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-[#666] mb-2"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Confirm your new password"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Update Changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default AccountSettings;
