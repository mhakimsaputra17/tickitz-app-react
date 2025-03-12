import React, { useState } from "react";

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
          <a href="/">
            <img
              className="w-full h-auto"
              src="src\assets\icons\tickets.svg"
              alt="logo-tickitz"
            />
          </a>
        </div>

        {/* Nav Menu - Desktop */}
        <div className="hidden md:flex flex-4 justify-center">
          <ul className="flex gap-10">
            <li>
              <a
                href="/"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/movies"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Movie
              </a>
            </li>
            <li>
              <a
                href="/order"
                className="text-[#0f172a] text-sm font-normal relative hover:text-blue-primary after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-primary after:bottom-[-5px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                Buy Ticket
              </a>
            </li>
          </ul>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex flex-1 justify-end gap-3">
          <a
            href="/auth/signin"
            className="px-[18px] py-3 rounded border  border-blue-700 text-blue-primary text-sm font-normal tracking-wider hover:bg-blue-50 transition-colors"
          >
            Sign in
          </a>
          <a
            href="/auth/signup"
            className="px-[18px] py-3 rounded bg-blue-600 border border-blue-700 text-white text-sm font-normal tracking-wider hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          <img src="src\assets\icons\gg_menu-right-alt.svg" alt="hamburger" />
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
            <a href="/">
              <img
                src="src\assets\icons\Tickitz2.svg"
                alt="logo-tickitz-purple"
                className="w-full h-auto"
              />
            </a>
          </div>
          <button
            className="text-2xl bg-transparent border-none cursor-pointer"
            onClick={toggleMobileMenu}
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <a
            href="/"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            href="/movies"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Movie
          </a>
          <a
            href="/order"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Buy Ticket
          </a>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          <a
            href="/auth/signin"
            className="px-[18px] py-3 rounded border border-blue-primary text-blue-primary text-sm font-normal tracking-wider text-center"
            onClick={toggleMobileMenu}
          >
            Sign in
          </a>
          <a
            href="/auth/signup"
            className="px-[18px] py-3 rounded bg-blue-primary border border-blue-primary text-white text-sm font-normal tracking-wider text-center"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
