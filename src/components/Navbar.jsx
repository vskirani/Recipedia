import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="h-16">
      <div className="h-full grid grid-cols-3 items-center">

        {/* KIRI - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Tastebite Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* TENGAH - Nav */}
        <nav className="flex justify-center">
          <ul className="flex gap-8 text-base font-medium text-gray-700">
            <li><a className="hover:text-primary">Home</a></li>
            <li><a className="hover:text-primary">Menu</a></li>
            <li><a className="hover:text-primary">About Us</a></li>
            <li><a className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>

        {/* KANAN - Search & Icon */}
        <div className="flex justify-end items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block w-48 rounded-md border px-4 py-2 text-sm focus:ring-2 focus:ring-primary"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>

      </div>
    </header>
  );
}
