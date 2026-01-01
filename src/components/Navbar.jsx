import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import profile from "../assets/image/avatar/avatar4.svg";
import { products } from "../data/products";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
  };

  const handleResultClick = (id) => {
    navigate(`/resep/${id}`);
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      handleResultClick(searchResults[0].id);
    }
  };

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
            <li><Link to="/allresep" className="hover:text-orange-600 cursor-pointer transition-colors">Resep</Link></li>
            <li><Link to="#" className="hover:text-orange-600 cursor-pointer transition-colors">Recomendation</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <div className="flex items-center">
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
                placeholder="Cari resep..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className={`absolute right-10 top-1/2 -translate-y-1/2 rounded-xl border border-orange-200 px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-lg transition-all duration-300 ${
                  isSearchOpen ? "w-48 sm:w-64 opacity-100" : "w-0 opacity-0 pointer-events-none"
                }`}
              />
            </div>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchResults.length > 0 && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden z-50 animate-fadeIn">
                <div className="p-2">
                  <p className="text-xs text-gray-400 px-3 py-2">
                    Ditemukan {searchResults.length} hasil
                  </p>
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleResultClick(item.id)}
                      className="w-full flex items-center gap-3 p-3 hover:bg-orange-50 rounded-xl transition-colors text-left"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 truncate">{item.title}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <span>{item.category}</span>
                          <span>•</span>
                          <span>❤️ {item.likes}</span>
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-100 p-2">
                  <Link
                    to="/allresep"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="block text-center text-sm text-primary font-medium py-2 hover:bg-orange-50 rounded-lg transition-colors"
                  >
                    Lihat Semua Resep →
                  </Link>
                </div>
              </div>
            )}

            {/* No Results */}
            {isSearchOpen && searchQuery && searchResults.length === 0 && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-orange-100 p-6 text-center z-50 animate-fadeIn">
                <p className="text-4xl mb-2">🔍</p>
                <p className="text-gray-500">Tidak ada hasil untuk "{searchQuery}"</p>
              </div>
            )}
          </div>

          <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[45px] lg:h-[45px] rounded-full" src={profile} alt="user profile"/>
          
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
            <li><Link to="/" className="block py-2 px-3 rounded-lg hover:bg-orange-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/allresep" className="block py-2 px-3 rounded-lg hover:bg-orange-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Resep</Link></li>
            <li><Link to="#" className="block py-2 px-3 rounded-lg hover:bg-orange-100 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Recomendation</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
