import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { RiUserLocationLine } from 'react-icons/ri';


export const Hero = () => {
  return (
    <>
   <section className="min-h-screen flex flex-col items-center justify-center px- py-0">
  {/* Glass Card */}
  <div className="backdrop-blur-xl bg-white/5 rounded-3xl shadow-2xl max-w-5xl w-full p-8 md:p-16">
    
    {/* Everything centered */}
    <div className="flex flex-col items-center text-center">
      <h3 className="flex items-center gap-2 text-white/50 text-lg md:text-xl font-semibold mb-4">
        <MdLocationOn className="w-5 h-5" />
        <span>Lagos, Nigeria</span>
      </h3>

      <h1 className="text-white text-6xl md:text-9xl font-bold mb-6 leading-none">
        TECHNEIK
      </h1>

      <h2 className="text-blue-300 text-2xl md:text-3xl font-semibold mb-8">
        Best Web Development Services
      </h2>

      <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl">
        I specialize in researching and analyzing your brand and provide you a beautiful
        and effective website for making a digital standing among your competitors
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-xl transition duration-300 hover:scale-105">
          Get yours now
        </button>

        <button className="bg-transparent hover:bg-blue-500/20 border-2 border-white text-white font-semibold py-3 px-6 rounded-xl transition duration-300 hover:scale-105">
          See my works
        </button>
      </div>
    </div>

  </div>
</section>
{/* Technologies Section */}
     <section className="px-6">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-white/50 text-3xl font-bold mb-10 text-center">
      Technologies Used:
    </h3>

    <div className="flex flex-wrap justify-center gap-2">
      {[
        'JavaScript', 'React', 'Node', 'Express', 'Bootstrap', 'jQuery',
        'PHP', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'WordPress'
      ].map((tech) => (
        <span
          key={tech}
          className="
            bg-white/10 backdrop-blur-md
            border border-white/20
            rounded-full
            px-3 py-1
            text-white text-sm font-medium
            hover:bg-white/20
            transition
            whitespace-nowrap
          "
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
</section>

</>

  );
};