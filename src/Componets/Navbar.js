import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Bangalore");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClick = (location) => {
    setSelectedLocation(location); // Dynamically set the selected location
    setIsDropdownOpen(false);
    console.log(`${location} selected`);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full px-5 sm:px-10 py-5 shadow-xl backdrop-blur-lg fixed top-0 bg-gray-800 text-gray-100 z-10">
      <div className="container flex flex-col lg:flex-row gap-5 justify-between w-full items-center max-w-5xl mx-auto">
        {/* Brand Name */}
        <h3 className="text-3xl font-bold">Palak</h3>

        {/* Dropdown for Locations */}
        <div className="relative" ref={dropdownRef}>
          <button
onClick={toggleDropdown}
            className="text-sm sm:text-base px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition"
          >
            {selectedLocation} 
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-white text-gray-800 rounded shadow-lg w-40">
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleDropdownClick("Bangalore")}
              >
                Bangalore
              </li>
              
            </ul>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-3 items-center">
          <li>
            <a
              href="#cars"
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-gray-800 hover:bg-gray-100"
            >
              Subscription
            </a>
          </li>
          {/* <li>
            <a
              href="#book"
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-gray-800 hover:bg-gray-100"
            >
              Booking Page
            </a>
          </li> */}
          <li>
            <a
              href="#about"
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-gray-800 hover:bg-gray-100"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#terms"
              className="text-sm sm:text-base px-2 lg:px-5 py-2 transition rounded hover:text-gray-800 hover:bg-gray-100"
            >
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
