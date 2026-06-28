import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const clickhere = () => {
    navigate("/Contact");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide"
          onClick={() => setMenuOpen(false)}
        >
          Dev<span className="text-cyan-400">Hub</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-slate-900 md:flex gap-8 text-lg font-medium ${
            menuOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li className="p-4 md:p-0">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li className="p-4 md:p-0">
            <Link
              to="/About"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              About
            </Link>
          </li>

          <li className="p-4 md:p-0">
            <Link
              to="/Services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              Services
            </Link>
          </li>

          <li className="p-4 md:p-0">
            <Link
              to="/Portfolio"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400 transition duration-300"
            >
              Portfolio
            </Link>
          </li>

          {/* Mobile Contact Button */}
          <li className="p-4 md:hidden">
            <button
              onClick={clickhere}
              className="w-full bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Desktop Contact Button */}
        <button
          onClick={clickhere}
          className="hidden md:block bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;