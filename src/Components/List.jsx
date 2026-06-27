import React from 'react'
import img1 from '../assets/website (1).webp'

const List = () => {
  return (
    <>
      {/* Top Section */}
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 md:grid-cols-2 bg-gray-900 min-h-screen"
      >
        {/* Image */}
        <div className="flex justify-center items-center p-6">
          <img
            src={img1}
            alt="Website Development"
            className="w-full max-w-md md:max-w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-gray-900 text-gray-100 flex flex-col justify-center px-6 py-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400">
            Website Development
          </h1>

          <p className="text-base sm:text-lg lg:text-xl mt-8 leading-relaxed">
            We specialize in building fast, responsive, and SEO-friendly websites
            tailored to your brand. From simple landing pages to complex web
            platforms, our team ensures top-notch user experience, performance,
            and security using the latest technologies.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-amber-500 px-4 sm:px-8 py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Why choose Web Development for us?
        </h1>

        <p className="text-base sm:text-lg mt-5">
          We offer expert-level website development services with results that
          speak for themselves.
        </p>

        {/* Cards */}
        <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 sm:px-6 py-16 mt-10 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl w-full">

            {[
              {
                title: "Responsive Design",
                desc: "Our responsive design service is designed to exceed expectations."
              },
              {
                title: "SEO Optimized",
                desc: "Our SEO optimized service is designed to exceed expectations."
              },
              {
                title: "Fast Performance",
                desc: "Our fast performance service is designed to exceed expectations."
              },
              {
                title: "Custom Functionality",
                desc: "Our custom functionality service is designed to exceed expectations."
              }
            ].map((card, index) => (
              <div
                key={index}
                data-aos="flip-left"
                className="min-h-[220px] rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-slate-700 shadow-xl hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-500 p-6"
              >
                <h1 className="text-xl sm:text-2xl font-bold text-gray-200">
                  {card.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>
        </section>
      </div>
    </>
  )
}

export default List