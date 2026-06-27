import React from "react";
import img1 from "../assets/web1.jpg";

const Explore = () => {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express.js",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white flex items-center justify-center px-6">

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl">

          {/* Left Side */}
          <div data-aos="fade-right" className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Explore the World of
              <span className="text-cyan-400"> Web Development</span>
            </h1>

            <p className="text-slate-300 text-lg">
              Web development is the process of building websites and web
              applications that are fast, responsive, and interactive.
            </p>

            <button className="px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-lg hover:scale-105">
              Start Learning
            </button>
          </div>

          {/* Right Side */}
          <div data-aos="zoom-in">
            <img
              src={img1}
              alt="Web Development"
              className="rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>

      {/* Technologies Section */}
      <section className="min-h-screen bg-slate-950 px-6 py-16 text-white">

        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold">Technologies We Use</h2>
          <p className="text-slate-400 mt-3">
            Modern tools to build scalable and beautiful websites
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {technologies.map((tech, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 150}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:scale-105 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">{tech}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* Benefits Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950 text-white px-6 py-16 flex items-center">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Web Development?
            </h2>

            <p className="text-slate-300 mb-4">
              Web development helps businesses create their online presence and
              connect with millions of users worldwide.
            </p>

            <p className="text-slate-300 mb-4">
              It allows you to build e-commerce stores, portfolios, dashboards,
              and powerful web apps.
            </p>

            <p className="text-slate-300">
              The demand for skilled developers is growing rapidly across the world.
            </p>
          </div>

          <div data-aos="fade-left" className="space-y-4">

            {[
              "Fast and responsive websites",
              "Modern user-friendly design",
              "Scalable and secure applications",
              "Better online visibility",
              "High demand career opportunities",
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white/5 border border-cyan-400/20 hover:bg-cyan-500/10 hover:scale-105 transition"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;