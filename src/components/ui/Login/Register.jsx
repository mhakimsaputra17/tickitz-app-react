import React from "react";
import { Link } from "react-router";
import { useState } from "react";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { saveUser } from "../../../utils/authUtils";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { errors, validateEmail, validatePassword, validateForm } =
    useFormValidation();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleEmailBlur = () => {
    validateEmail(formData.email);
  };

  const handlePasswordBlur = () => {
    validatePassword(formData.password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      // Save user to localStorage
      saveUser(formData);
      setShowSuccess(true);
      setFormData({ email: "", password: "" });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <main
        className=" min-h-screen flex flex-col items-center justify-center px-5 py-8 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel.png?raw=true')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 -z-10 "></div>

        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tizkitz_signin.svg"
            alt="tickitz sign in"
            className="max-w-[180px] h-auto"
          />
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute top-5 right-5">
            Registration successful!
          </div>
        )}

        {/* Register card */}
        <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 sm:p-10 lg:p-[60px] shadow-lg">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-left">
            REGISTER<span className="ml-1 text-lg sm:text-xl">👋</span>
          </h2>

          <p className="text-[#8a8a9a] text-xs sm:text-sm lg:text-base mb-5 lg:mb-7 text-left">
            Create your account to enjoy all features
          </p>

          <form className="login-form" noValidate onSubmit={handleSubmit}>
            {/* Email field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                value={formData.email}
                type="text"
                id="email"
                placeholder="Enter your email"
                className={`w-full py-3 px-4 border ${
                  errors.email ? "border-red-500" : ""
                }`}
                onChange={handleChange}
                onBlur={handleEmailBlur}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password field */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  placeholder="Enter your password"
                  className={`w-full py-3 px-4 border ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handlePasswordBlur}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-transparent border-none text-gray-500"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <span className="text-base">
                    <img
                      src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/eye.svg"
                      alt="eye icon"
                    />
                  </span>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot password */}
            <div className="text-right mb-5">
              <Link
                to="/forgot-password"
                className="text-[#4169e1] text-xs sm:text-sm no-underline"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Register button */}
            <button
              value="Submit"
              type="submit"
              className="w-full py-3 bg-[#4169e1] text-white border-none rounded-md text-sm sm:text-base lg:text-lg font-medium cursor-pointer hover:bg-[#3657c0] transition-colors"
            >
              Register
            </button>

            {/* Already have account */}
            <div className="text-center mt-4">
              <p className="text-[#8a8a9a] text-xs sm:text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-[#4169e1] no-underline">
                  Login
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className="relative text-center my-5">
              <div className="absolute top-1/2 left-0 w-[42%] h-px bg-gray-200"></div>
              <span className="inline-block px-3 bg-white relative text-[#8a8a9a] text-xs sm:text-sm">
                Or
              </span>
              <div className="absolute top-1/2 right-0 w-[42%] h-px bg-gray-200"></div>
            </div>

            {/* Social login */}
            <div className="flex flex-col sm:flex-row justify-between gap-2.5 sm:gap-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 shadow-md rounded-md cursor-pointer text-sm text-gray-600 bg-white border-none"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 p-2.5 shadow-md rounded-md cursor-pointer text-sm text-gray-600 bg-white border-none"
              >
                <img
                  src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/facebook-logo.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <span>Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Register;
