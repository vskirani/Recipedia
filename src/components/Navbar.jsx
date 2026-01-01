import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";
import profile from "../assets/image/avatar/avatar4.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl transition-all duration-300 rounded-2xl
      ${isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md"
        : "bg-transparent"
      }
      px-4 sm:px-6 py-3`}>
      <div className="flex items-center justify-between">

        <Link to="/" className="flex flex-row items-center">
          <img
            src={logo}
            alt="Tastebite Logo"
            className="h-8 sm:h-12 lg:h-10 w-auto"
          />
          <p className="ml-2 text-xl sm:text-2xl text-primary font-family-poppins font-bold">
            Recipedia</p>
        </Link>

        <nav className="hidden md:flex justify-center">
          <ul className="flex gap-4 lg:gap-8 text-sm lg:text-base font-semibold text-primary">
            <li><Link to="/" className="hover:text-orange-600 cursor-pointer transition-colors">Home</Link></li>
            <li><a className="hover:text-orange-600 cursor-pointer transition-colors">Resep</a></li>
            <li><a className="hover:text-orange-600 cursor-pointer transition-colors">Favorite</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative flex items-center">
   
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


            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-10 rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-primary bg-white transition-all duration-300 ${
                isSearchOpen ? "w-32 sm:w-48 opacity-100" : "w-0 opacity-0 pointer-events-none"
              }`}
            />
          </div>

          <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px]" src={profile} alt="user profile"/>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-orange-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-2">
          <ul className="flex flex-col gap-3 text-base font-semibold text-primary">
            <li><a className="block py-2 px-3 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors">Home</a></li>
            <li><a className="block py-2 px-3 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors">Resep</a></li>
            <li><a className="block py-2 px-3 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors">Favorite</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
