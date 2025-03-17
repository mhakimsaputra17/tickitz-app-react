import React from "react";
import { Link } from "react-router";

function Login() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center px-5 py-8 relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://github.com/mhakimsaputra17/weekly-task3/blob/main/assets/images/backgrounds/marvel.png?raw=true')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 -z-10"></div>

        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tizkitz_signin.svg"
            alt="tickitz sign in"
            className="max-w-[180px] h-auto"
          />
        </div>

        {/* Login card */}
        <div className="bg-white rounded-2xl w-full max-w-[480px] p-6 sm:p-10 lg:p-[60px] shadow-lg">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-left">
            Welcome Back<span className="ml-1 text-lg sm:text-xl">👋</span>
          </h2>

          <p className="text-[#8a8a9a] text-xs sm:text-sm lg:text-base mb-5 lg:mb-7 text-left">
            Sign in with your data that you entered during your registration
          </p>

          <form className="login-form" noValidate>
            {/* Email field */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className={`w-full py-3 px-4 border`}
              />
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
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className={`w-full py-3 px-4 border`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-transparent border-none text-gray-500"
                  aria-label="Show password"
                >
                  <span className="text-base">
                    <img
                      src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/eye.svg"
                      alt="eye icon"
                    />
                  </span>
                </button>
              </div>
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

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#4169e1] text-white border-none rounded-md text-sm sm:text-base lg:text-lg font-medium cursor-pointer hover:bg-[#3657c0] transition-colors"
            >
              Login
            </button>

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

export default Login;
