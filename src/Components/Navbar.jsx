import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate =useNavigate()
  const clickhere=()=>{
    navigate("/Contact")
  }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide">
          Dev<span className="text-cyan-400">Hub</span>
        </a>

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
            <a href="/" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>

          <li className="p-4 md:p-0">
            <a href="/About" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>

          <li className="p-4 md:p-0">
            <a href="/Services" className="hover:text-cyan-400 transition duration-300">
              Services
            </a>
          </li>

          <li className="p-4 md:p-0">
            <a href="/Portfolio" className="hover:text-cyan-400 transition duration-300">
              Portfolio
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <a
          onClick={clickhere}
          href="#contact"
          className="hidden md:block bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;