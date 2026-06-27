import React from 'react'
import imgser from '../assets/ser.webp'
import image1 from '../assets/app.webp'
import image2 from '../assets/blockchain.webp'
import image3 from '../assets/devops&clouds.webp'
import image4 from '../assets/machinelearning.webp'
import image5 from '../assets/website.webp'
import image6 from '../assets/websitehosting.webp'
import { useNavigate } from 'react-router-dom'

const Services = () => {

  const navigate = useNavigate();

  const contactPage = () => {
    navigate('/Contact');
  };

  const listPage = () => {
    navigate('/List');
  };

  const services = [
    {
      img: image1,
      title: "App Development",
      desc: "Leverage AI and machine learning to automate processes.",
    },
    {
      img: image2,
      title: "Blockchain",
      desc: "Secure and transparent decentralized applications.",
    },
    {
      img: image3,
      title: "Cloud & DevOps",
      desc: "Reliable hosting and scalable cloud infrastructure.",
    },
    {
      img: image4,
      title: "Machine Learning",
      desc: "Smart AI systems for automation and analytics.",
    },
    {
      img: image5,
      title: "Web Development",
      desc: "Modern responsive websites with React & Tailwind.",
    },
    {
      img: image6,
      title: "Web Hosting",
      desc: "High performance hosting with 99.9% uptime.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div data-aos="fade-up"
data-aos-delay="300"
data-aos-duration="1500" className="grid grid-cols-1 lg:grid-cols-2">

        <div className="min-h-screen bg-[#1e293b] border border-[#334155]
        shadow-lg hover:shadow-cyan-400/30 transition-all duration-300
        px-6 py-10 flex flex-col justify-center">

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">
            Perfect IT <span className="text-blue-700 opacity-60">Solution</span>
            <br /> Business
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-200">
            Perfect IT Solutions provides expert services in software
            development, IT consulting, cloud solutions, network security,
            data management, technical support, web design, and system
            integration.
          </p>

          <button
            onClick={contactPage}
            className="px-7 py-3 mt-8 rounded-full
            bg-gradient-to-r from-amber-600 to-amber-900
            text-white font-medium shadow-md
            hover:shadow-xl hover:scale-105
            transition-all duration-300 w-fit"
          >
            Contact Us
          </button>

        </div>

        <div className="bg-[#1e293b] flex items-center justify-center p-6">
          <img
            src={imgser}
            alt="services"
            className="w-full max-w-md lg:max-w-full object-contain"
          />
        </div>

      </div>

      {/* SERVICES CARDS */}
      <section className="min-h-screen bg-slate-950 px-6 py-16">

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="text-gray-400 mt-3">
            Modern solutions for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {services.map((card, index) => (
            <div  data-aos="flip-left"
              key={index}
              className="group relative h-96 rounded-3xl overflow-hidden
              bg-gradient-to-br from-slate-800 via-slate-900 to-black
              border border-slate-700 shadow-xl
              hover:scale-105 hover:shadow-cyan-500/30
              transition-all duration-500 p-4"
            >

              <div className="flex justify-center">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-1/2 h-36 sm:h-40 object-cover rounded-xl"
                />
              </div>

              <h2 className="text-white text-xl font-bold mt-4 text-center">
                {card.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2 text-center">
                {card.desc}
              </p>

              <div className="flex justify-center mt-5">
                <button
                  onClick={listPage}
                  className="px-5 py-2 rounded-full
                  bg-cyan-500 text-white font-semibold
                  hover:bg-cyan-400 hover:scale-105
                  hover:shadow-lg hover:shadow-cyan-500/30
                  transition-all duration-300"
                >
                  Learn More
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r
            from-cyan-500/20 to-purple-500/20
            opacity-0 group-hover:opacity-100
            transition duration-500 pointer-events-none"></div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
};

export default Services;