import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Close menu on resize for mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="absolute top-0 left-0 w-full shadow-lg shadow-slate-500 bg-transparent z-50">
      <div className="container mx-auto flex justify-between items-center px-5 py-3 md:p-4 text-white">
        {/* Logo */}
        <div className="text-xl md:text-3xl font-bold">
          <a href="#hero">EH</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white text-lg bg-opacity-80">
          <li>
            <a
              href="#aboutMe"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute left-0 top-full w-full bg-opacity-70 bg-gray-900 text-white flex flex-col items-center justify-center p-2 space-y-1 z-50 transform transition-all duration-300 ease-in-out opacity-90 translate-y-0">
          <li className="relative group w-full">
            <a
              href="#aboutMe"
              onClick={handleMenuItemClick}
              className="block px-6 py-2 text-lg font-semibold text-gray-200 transition-all duration-300 hover:text-blue-500 hover:scale-105"
            >
              About
            </a>
            <span className="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </li>
          <li className="relative group w-full">
            <a
              href="#skills"
              onClick={handleMenuItemClick}
              className="block px-6 py-2 text-lg font-semibold text-gray-200 transition-all duration-300 hover:text-blue-500 hover:scale-105"
            >
              Skills
            </a>
            <span className="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </li>
          <li className="relative group w-full">
            <a
              href="#projects"
              onClick={handleMenuItemClick}
              className="block px-6 py-2 text-lg font-semibold text-gray-200 transition-all duration-300 hover:text-blue-500 hover:scale-105"
            >
              Projects
            </a>
            <span className="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </li>
          <li className="relative group w-full">
            <a
              href="#contact"
              onClick={handleMenuItemClick}
              className="block px-6 py-2 text-lg font-semibold text-gray-200 transition-all duration-300 hover:text-blue-500 hover:scale-105"
            >
              Contact
            </a>
            <span className="absolute left-0 right-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </li>
        </ul>
      )}
    </nav>
  );
}
