import React from 'react';
import { Hero } from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects';
import Workprocess from '../components/WorkProcess';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Blogs from './Blogs'; // your Blogs component
import YoutubeSection from '../components/Youtube';
import { Link } from 'react-router-dom';

const Home = ({ blogs }) => {
  // Get the latest 4 blogs
  const recentBlogs = blogs?.length > 0 ? blogs.slice(-4).reverse() : [];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="px- rounded-tr-3xl rounded-tl-3xl">
        <Hero />
      </div>

      {/* Services */}
      <div className="px-9 bg-gray-900/95 border border-white/20 rounded-tr-3xl rounded-tl-3xl">
        <Services />
      </div>

      {/* About */}
      <div className="px-9 bg-white rounded-tr-3xl rounded-tl-3xl ">
        <About />
      </div>

      {/* Projects */}
      <div className="px-9 bg-gray-900/95 border border-white/20 rounded-tr-3xl rounded-tl-3xl ">
        <Projects />
      </div>

      {/* Work Process */}
      <div className="px-9 bg-white border border-white/20 rounded-tr-3xl rounded-tl-3xl">
        <Workprocess />
      </div>

      {/* Contact */}
      <div className="px-9 bg-[#011936] border border-white/20 rounded-tr-3xl rounded-tl-3xl">
        <Contact />
      </div>

   
      {/* Optional Youtube Section */}
      {/*
      <div className="px-9 bg-white">
        <YoutubeSection />
      </div>
      */}
    </div>
  );
};

export default Home;
