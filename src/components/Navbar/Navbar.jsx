import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Rooms", path: "/browserooms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl py-4 mx-auto flex  items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-600"
        >
          <FaHome />
          <span>Nestora</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <NavLink
            to="/login"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/add-room"
            className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Post Room
          </NavLink>
        </div>

        {/* Mobile Icon */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="font-medium text-gray-700 hover:text-blue-600"
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink to="/login">Login</NavLink>

            <NavLink
              to="/signup"
              className="bg-blue-600 text-white text-center py-3 rounded-xl"
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/add-room"
              className="border border-blue-600 text-blue-600 text-center py-3 rounded-xl"
            >
              Post Room
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;