import { useState } from "react";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 bg-orange-50 mb-4 px-6 rounded-[20px]">
      <div className="h-full grid grid-cols-3 items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Tastebite Logo"
            className="h-15 w-auto"
          />
          <p className="ml-2 text-2xl text-primary" style={{ fontFamily: 'var(--font-family-pacifico)' }}>
            Recipedia</p>
        </div>

        {/* Nav */}
        <nav className="flex justify-center">
          <ul className="flex gap-8 text-base font-semibold text-primary">
            <li><a className="hover:text-white">Home</a></li>
            <li><a className="hover:text-white">Menu</a></li>
            <li><a className="hover:text-white">About Us</a></li>
            <li><a className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        {/* KANAN - Search & Icon */}
        <div className="flex justify-end items-center gap-4">
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
                isSearchOpen ? "w-48 opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>
          <img width="45" height="45" src="https://img.icons8.com/plasticine/100/user-male-circle.png" alt="user-male-circle"/>
        </div>

      </div>
    </header>
  );
}
