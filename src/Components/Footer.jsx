import React from 'react'

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-slate-950 text-white px-6 py-12">

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            We create modern, scalable, and high-quality web applications
            using the latest technologies.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>

          <ul className="space-y-2 text-slate-400">
            <li className="hover:text-cyan-400 cursor-pointer transition">Home</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Services</li>
            <li className="hover:text-cyan-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>

          <p className="text-slate-400 hover:text-white transition">
            Email: support@yourcompany.com
          </p>

          <p className="text-slate-400 hover:text-white transition">
            Phone: +92 300 1234567
          </p>

          <p className="text-slate-400 hover:text-white transition">
            Karachi, Pakistan
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-sm sm:text-base">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer