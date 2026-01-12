import React from 'react';
import { Hero } from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Workprocess from '../components/WorkProcess';
import Contact from '../components/Contact';
import Tesst from '../components/Tesst';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import YoutubeSection from '../components/Youtube';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="px- rounded-tr-3xl rounded-tl-3xl">
        <Hero />
      </div>

      <div className="px-9 bg-gray-900/95 border border-white/20 rounded-tr-3xl rounded-tl-3xl">
        <Services />
      </div>

      <div className="px-9 bg-white rounded-tr-3xl rounded-tl-3xl">
        <About />
      </div>

      <div className="px-9 bg-gray-900/95 rounded-tr-3xl rounded-tl-3xl border-white/20">
        <Projects />
      </div>

      <div className="px-9 bg-white rounded-tr-3xl rounded-tl-3xl">
        <Workprocess />
      </div>

      <div className="px-9 bg-[#011936]">
        <Contact />
      </div>

      <div className="px-9 bg-white">
        <Blog />
      </div>

      <div className="px-9 bg-whte">
        <YoutubeSection />
      </div>



      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
