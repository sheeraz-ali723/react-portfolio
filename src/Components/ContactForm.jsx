import React from "react";

const ContactForm = () => {
  return (
    <div data-aos="zoom-in"  className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-6 py-12">

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Complete Your Details
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Phone */}
          <input
            type="number"
            placeholder="Phone Number"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* City */}
          <input
            type="text"
            placeholder="City"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Country */}
          <input
            type="text"
            placeholder="Country"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Gender */}
          <select className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Skills */}
          <input
            type="text"
            placeholder="Your Skills"
            className="p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="md:col-span-2 p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 transition"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-4 rounded-xl transition duration-300 hover:scale-105 shadow-lg"
          >
            Submit Details
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;