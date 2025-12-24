import { useState } from "react";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-orange-50 mb-4 px-4 sm:px-6 py-3 sm:py-0 sm:h-16 rounded-[15px] sm:rounded-[20px]">
      <div className="h-full flex flex-wrap sm:grid sm:grid-cols-3 items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Tastebite Logo"
            className="h-10 sm:h-12 lg:h-15 w-auto"
          />
          <p className="ml-2 text-xl sm:text-2xl text-primary" style={{ fontFamily: 'var(--font-family-pacifico)' }}>
            Recipedia</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-orange-100 transition-colors"
        >
          <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav - Desktop */}
        <nav className="hidden sm:flex justify-center">
          <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base font-semibold text-primary">
            <li><a className="hover:text-orange-700 cursor-pointer transition-colors">Home</a></li>
            <li><a className="hover:text-orange-700 cursor-pointer transition-colors">Menu</a></li>
            <li><a className="hover:text-orange-700 cursor-pointer transition-colors">About Us</a></li>
            <li><a className="hover:text-orange-700 cursor-pointer transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* KANAN - Search & Icon - Desktop */}
        <div className="hidden sm:flex justify-end items-center gap-2 lg:gap-4">
          <div className="relative flex items-center">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-orange-100 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-10 rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-primary bg-white transition-all duration-300 ${
                isSearchOpen ? "w-32 lg:w-48 opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>
          <img className="w-8 h-8 lg:w-11 lg:h-11" src="https://img.icons8.com/plasticine/100/user-male-circle.png" alt="user-male-circle"/>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 pt-4 pb-2' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-3">
          <a className="text-primary font-semibold hover:text-orange-700 cursor-pointer py-2 border-b border-orange-100">Home</a>
          <a className="text-primary font-semibold hover:text-orange-700 cursor-pointer py-2 border-b border-orange-100">Menu</a>
          <a className="text-primary font-semibold hover:text-orange-700 cursor-pointer py-2 border-b border-orange-100">About Us</a>
          <a className="text-primary font-semibold hover:text-orange-700 cursor-pointer py-2 border-b border-orange-100">Contact</a>
        </nav>
        <div className="flex items-center gap-3 mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-primary bg-white"
          />
          <img className="w-10 h-10" src="https://img.icons8.com/plasticine/100/user-male-circle.png" alt="user-male-circle"/>
        </div>
      </div>
    </header>
  );
}
