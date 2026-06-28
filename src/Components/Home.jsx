import React from 'react'
import img01 from '../assets/main1.jpg'
import { useNavigate } from 'react-router-dom'

const home = () => {
     const navigate =useNavigate()
  const clickhere=()=>{
    navigate("/ContactForm")
  } ;
   const listPage = () => {
    navigate('/List');
  };
  const explorePage=()=>{
    navigate('/Explore');
  }
  return (
    <>
<div data-aos="slide-up" className='h-screen flex flex-col justify-center items-center bg-amber-500 gap-4' >
<h1 className='text-center font-extrabold text-5xl'>We are offering an excellent opportunity</h1>
<h2 className='text-4xl font-extrabold'>This is our offical website</h2>
<div className="flex gap-7">
  <button
  onClick={clickhere}
  className="px-6 py-2 rounded-full 
                     bg-gradient-to-r from-amber-600 to-amber-900 
                     text-white font-medium 
                     shadow-md 
                     hover:shadow-xl hover:scale-105 
                     active:scale-95 
                     transition-all duration-300">
    Submit Form
  </button>

  <button 
  onClick={listPage}
  className="px-6 py-2 rounded-full 
                     border-2 border-amber-900 
                     text-amber-900 font-medium 
                     hover:bg-amber-900 hover:text-white 
                     shadow-sm hover:shadow-lg 
                     hover:scale-105 active:scale-95 
                     transition-all duration-300">
    Visit Us
  </button>
</div>
</div>

<div data-aos="fade-right" className="min-h-screen relative overflow-hidden bg-slate-950 text-white">

  {/* Background glow effects */}
  <div className="absolute inset-0">
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[120px] opacity-30"></div>
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] opacity-30"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 px-6 py-12">

    {/* Header */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold">
        Our Professional Services
      </h1>
      <p className="text-slate-400 mt-3">
        We deliver modern, scalable and high-quality digital solutions
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          title: "Web Development",
          company: "NovaTech Solutions",
          desc: "Modern websites with React, Next.js and Tailwind CSS.",
        },
        {
          title: "UI/UX Design",
          company: "PixelCraft Studio",
          desc: "Beautiful and user-centered interface design systems.",
        },
        {
          title: "App Development",
          company: "AppSphere Inc.",
          desc: "Fast and scalable mobile apps for all platforms.",
        },
        {
          title: "SEO Optimization",
          company: "RankBoost Agency",
          desc: "Improve ranking and grow your online visibility.",
        },
      ].map((card, index) => (

        <div data-aos="flip-right"
          key={index}
          className="group bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-2xl p-6 
                     hover:scale-105 hover:bg-white/10 
                     transition-all duration-300"
        >

          <div className="w-12 h-12 flex items-center justify-center 
                          rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 
                          font-bold mb-4">
            {index + 1}
          </div>

          <h2 className="text-xl font-bold group-hover:text-cyan-400 transition">
            {card.title}
          </h2>

          <p className="text-cyan-400 text-sm mt-1 font-medium">
            {card.company}
          </p>

          <p className="text-slate-300 text-sm mt-3">
            {card.desc}
          </p>

          <button 
          onClick={explorePage}
          className="mt-5 w-full py-2 rounded-lg 
                             bg-gradient-to-r from-cyan-600 to-purple-600 
                             hover:opacity-90 transition">
            Explore
          </button>

        </div>

      ))}

    </div>
  </div>
</div>

<div data-aos="zoom-in-up" className='min-h-screen grid grid-cols-1 md:grid-cols-2 bg-amber-300'>
<div className="min-h-screen flex items-center justify-center px-6 
                bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

  <div className="max-w-3xl text-center space-y-6">

    {/* Heading */}
   <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
      We are hiring a team of <span className="text-cyan-400">Web Developers</span>
    </h1>

    {/* Sub heading */}
    <h2 className="text-lg text-slate-300">
      Contact us and let us know about yourself
    </h2>

    {/* Lines */}
    <div className="space-y-4 mt-8">

      <p className="border border-cyan-500/30 bg-white/5 backdrop-blur-md 
                    text-slate-200 px-5 py-3 rounded-xl 
                    transition-all duration-300
                    hover:bg-cyan-500/10 hover:border-cyan-400 
                    hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
        We deliver innovative and scalable digital solutions for modern businesses.
      </p>

      <p className="border border-purple-500/30 bg-white/5 backdrop-blur-md 
                    text-slate-200 px-5 py-3 rounded-xl 
                    transition-all duration-300
                    hover:bg-purple-500/10 hover:border-purple-400 
                    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
        Building high-quality software products with precision and creativity.
      </p>

      <p className="border border-cyan-500/30 bg-white/5 backdrop-blur-md 
                    text-slate-200 px-5 py-3 rounded-xl 
                    transition-all duration-300
                    hover:bg-cyan-500/10 hover:border-cyan-400 
                    hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
        Transforming ideas into powerful digital experiences.
      </p>

      <p className="border border-purple-500/30 bg-white/5 backdrop-blur-md 
                    text-slate-200 px-5 py-3 rounded-xl 
                    transition-all duration-300
                    hover:bg-purple-500/10 hover:border-purple-400 
                    hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
        Empowering businesses through technology and innovation.
      </p>

      <p className="border border-cyan-500/30 bg-white/5 backdrop-blur-md 
                    text-slate-200 px-5 py-3 rounded-xl 
                    transition-all duration-300
                    hover:bg-cyan-500/10 hover:border-cyan-400 
                    hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
        Crafting modern, reliable, and user-focused solutions.
      </p>

    </div>

  </div>
</div>
<div>
<div className="h-64 md:h-screen">
  <img 
    src={img01}
    alt='man pic'
    className="w-full h-full object-cover overflow-hidden ..."
  />
</div>
</div>

</div> 







    </>
  )
}

export default home