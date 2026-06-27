import React from 'react'
import img1 from '../assets/web1.jpg'
import img2 from '../assets/web2.jpg'
import img3 from '../assets/web3.jpg'
import img4 from '../assets/web4.jpg'
import img5 from '../assets/web5.jpg'
const About = () => {
  return (
    <>
    <div data-aos="fade-right" className='grid grid-cols-2'>

      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white px-6">

  <div className="text-center max-w-2xl space-y-4">

    <h1 className="text-4xl md:text-5xl font-bold mb-6">
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
    <div className="h-screen flex items-center justify-center bg-slate-900">
  
  <div className="w-1/2 flex justify-center">
    <img
      src={img1}
      alt="profile"
      className="h-[400px] w-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
    />
  </div>

</div>
    </div>

<div data-aos="fade-up-right" className=' bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950'>
  <section className="min-h-screen  flex items-center justify-center px-6 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">

    {[img5, img4, img3, img2].map((img, index) => (
      <div data-aos="flip-left"
        key={index}
        className="h-80 rounded-3xl overflow-hidden relative
        bg-[#1e293b] border border-[#334155]
        shadow-lg hover:shadow-cyan-400/30
        hover:border-cyan-400
        hover:scale-105 transition-all duration-500 group"
      >
        
        {/* Image */}
        <img
          src={img}
          alt="profile"
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>

      </div>
    ))}

  </div>
</section>
</div>



    

    </>
  )
}

export default About