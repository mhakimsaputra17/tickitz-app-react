import React, { useState } from "react";
import { Link } from "react-router";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-between items-center px-[5%] py-5 border-b border-gray-200 bg-white">
        {/* Logo */}
        <div className="flex-1 max-w-[130px]">
          <Link to="/">
            <img
              className="w-full h-auto"
              src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tickets.svg"
              alt="logo-tickitz"
            />
          </Link>
        </div>

        {/* Nav Menu - Desktop */}
        <div className="hidden md:flex flex-4 justify-center">
          <ul className="flex gap-10">
            <li>
              <Link
                to="/"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/movies"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Buy Ticket
              </Link>
            </li>
          </ul>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex flex-1 justify-end gap-3">
          <Link
            to="/auth/signin"
            className="px-[18px] py-3 rounded border  border-blue-700 text-blue-600 text-sm font-normal tracking-wider hover:bg-blue-50 transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/auth/signup"
            className="px-[18px] py-3 rounded bg-blue-600 border border-blue-700 text-white text-sm font-normal tracking-wider hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <img
            src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/icons/gg_menu-right-alt.svg"
            alt="hamburger"
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[2000] p-5 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="max-w-[130px]">
            <Link href="/">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tickets.svg"
                alt="logo-tickitz-purple"
                className="w-full h-auto"
              />
            </Link>
          </div>
          <button
            className="text-2xl bg-transparent border-none cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <Link
            to="/"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/movies"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Movie
          </Link>
          <Link
            to="/movies"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Buy Ticket
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <Link
            to="/auth/signin"
            className="px-[18px] py-3 rounded border border-blue-600 text-blue-600 text-sm font-normal tracking-wider text-center"
            onClick={toggleMobileMenu}
          >
            Sign in
          </Link>
          <Link
            to="/auth/signup"
            className="px-[18px] py-3 rounded bg-blue-primary border border-blue-primary text-white text-sm font-normal tracking-wider text-center bg-blue-600"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
