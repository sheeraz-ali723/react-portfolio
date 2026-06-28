import React from "react";
import img1 from "../assets/web1.jpg";
import img2 from "../assets/web2.jpg";
import img3 from "../assets/web3.jpg";
import img4 from "../assets/web4.jpg";
import img5 from "../assets/web5.jpg";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 lg:grid-cols-2 min-h-screen"
      >
        {/* Left Content */}
        <div className="flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white px-6 py-12">
          <div className="text-center lg:text-left max-w-2xl space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Modern Web Development
            </h1>

            <p className="text-slate-300 hover:text-cyan-400 transition duration-300 hover:scale-105 cursor-pointer">
              We build fast, responsive, and scalable websites.
            </p>

            <p className="text-slate-400 hover:text-white transition duration-300 hover:scale-105 cursor-pointer">
              Creating clean and modern UI with React and Tailwind CSS.
            </p>

            <p className="text-slate-400 hover:text-cyan-300 transition duration-300 hover:scale-105 cursor-pointer">
              Turning ideas into powerful digital experiences.
            </p>

            <p className="text-slate-400 hover:text-white transition duration-300 hover:scale-105 cursor-pointer">
              Focused on performance, design, and user experience.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center bg-slate-900 px-6 py-12">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center">
            <img
              src={img1}
              alt="profile"
              className="w-full max-h-[500px] object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div
        data-aos="fade-up-right"
        className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      >
        <section className="min-h-screen flex items-center justify-center px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
            {[img5, img4, img3, img2].map((img, index) => (
              <div
                data-aos="flip-left"
                key={index}
                className="h-72 sm:h-80 rounded-3xl overflow-hidden relative
                bg-[#1e293b] border border-[#334155]
                shadow-lg hover:shadow-cyan-400/30
                hover:border-cyan-400
                hover:scale-105 transition-all duration-500 group"
              >
                <img
                  src={img}
                  alt="profile"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;