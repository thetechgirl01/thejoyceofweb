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
import { Helmet } from 'react-helmet';

const Home = ({ blogs }) => {
  // Get the latest 4 blogs
  const recentBlogs = blogs?.length > 0 ? blogs.slice(-4).reverse() : [];

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>
          CrownaTech | Creative tech Solutions For Your Digital Success.
          <meta name="description" content="CrownaTech delivers creative & innovative web solutions to help your business succeed in the digital world." />
          <meta name='keywords' content='crownatech, crowna, tech, web dev in Nigeria, tech in nigeria, web design, web development, digital marketing, creative solutions' />
        </title>
      </Helmet>
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

      {/* Latest Blogs */}
      {recentBlogs.length > 0 && (
        <div className="px-9 bg-gray-900/95 border border-b-none border-white/20 rounded-tr-3xl rounded-tl-3xl py-12">
          <h2 className="text-3xl text-white font-bold mb-6 text-center">
            Latest Blogs
          </h2>

          {/* Pass only the latest 4 blogs and hide filters */}
          <Blogs blogs={recentBlogs} showFilters={false} />

          {/* View All Blogs Button */}
          <div className="text-center mt-10">
            <Link
              to="/blogs"
              className="px-6 py-3 bg-yellow-400 rounded-xl text-black font-semibold hover:bg-yellow-500 transition"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      )}

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
