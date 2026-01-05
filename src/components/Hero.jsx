import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h3 className="text-blue-300 text-lg md:text-xl font-semibold mb-4">
            Lagos, Nigeria
          </h3>
          <h1 className='text-white text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            I'm Rakesh Karmaker
          </h1>
          <h2 className="text-blue-300 text-2xl md:text-3xl font-semibold mb-8">
            Web Developer
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl">
            I specialize in researching and analyzing your brand and provide you a beautiful and effective 
            website for making a digital standing among your competitors
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get yours now
            </button>
            <button className="bg-transparent hover:bg-blue-500 border-2 border-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              See my works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};