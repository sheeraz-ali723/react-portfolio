import React from 'react'
import image1 from '../assets/app.webp'
import image2 from '../assets/blockchain.webp'
import image3 from '../assets/devops&clouds.webp'
import image4 from '../assets/machinelearning.webp'
import image5 from '../assets/website.webp'
import image6 from '../assets/websitehosting.webp'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
   const navigate =useNavigate()
  const clickhere=()=>{
    navigate("/List")
  } 
  return (
    <section data-aos="zoom-in-up" className="min-h-screen bg-[#0b1220] px-6 py-20">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          My <span className="text-cyan-400">Portfolio</span>
        </h1>

        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          A collection of my web development projects & creative work
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">

        {[image1, image2, image3, image4, image5, image6].map((img, index) => (
          <div data-aos="flip-left"
            key={index}
            className="group relative rounded-3xl overflow-hidden
            bg-slate-900 border border-slate-800
            shadow-lg hover:shadow-cyan-500/30
            hover:scale-[1.03] transition-all duration-500"  
          >

            {/* IMAGE */}
            <img
              src={img}
              alt="project"
              className="w-full h-64 sm:h-72 object-cover
              group-hover:scale-110 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 p-4 sm:p-6 w-full">

              <h2 className="text-white text-lg sm:text-xl font-bold">
                Project {index + 1}
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                Modern responsive web application built with React & Tailwind CSS
              </p>

              {/* BUTTON */}
              <button 
               onClick={clickhere}
              className="mt-4 px-4 sm:px-5 py-2 rounded-full bg-cyan-500 text-white
                text-sm sm:text-base font-medium
                hover:bg-cyan-600 hover:scale-105
                transition-all duration-300 shadow-md shadow-cyan-500/20">
                Learn More
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}


export default Portfolio
