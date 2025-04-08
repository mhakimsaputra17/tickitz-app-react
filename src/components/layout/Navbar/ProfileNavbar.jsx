import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/authActions";

const ProfileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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

        {/* Profile Photo with Dropdown - Desktop */}
        <div className="hidden md:flex flex-1 justify-end">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/poster/profile-sidebar.svg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link
                  to="/profile/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Account Settings
                </Link>
                <Link
                  to="/profile/order/history"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Order History
                </Link>
                <hr className="my-1" />
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
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
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/mhakimsaputra17/weekly-task3/7c2e4c1f0b29e0b3de07e412c7c20490a272f31d/assets/images/logo/tickets.svg"
                alt="logo-tickitz"
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
            to="/order"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Buy Ticket
          </Link>
          <Link
            to="/profile/account"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Account Settings
          </Link>
          <Link
            to="/profile/order/history"
            className="text-lg text-[#0f172a] py-2.5 border-b border-gray-100"
            onClick={toggleMobileMenu}
          >
            Order History
          </Link>
        </div>

        <div className="mt-auto pb-5">
          <button
            onClick={() => {
              handleLogout();
              toggleMobileMenu();
            }}
            className="w-full px-4 py-3 bg-red-100 text-red-600 rounded-lg text-center"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProfileNavbar;
