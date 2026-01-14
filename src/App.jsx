import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';
import useFetch from './hooks/useFetch.js'

import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import BlogContentPage from './pages/BlogContentPage.jsx';

function App() {
  // Add debugging to see what data looks like
  console.log('App.jsx - Fetching data...');
  
  let { loading, error, data } = useFetch('http://localhost:1337/api/blogs?populate=*');
  
  // Debug what we get from useFetch
  console.log('App.jsx - Loading:', loading);
  console.log('App.jsx - Error:', error);
  console.log('App.jsx - Data:', data);
  console.log('App.jsx - Data?.data:', data?.data);
  console.log('App.jsx - Is data?.data an array?', Array.isArray(data?.data));
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading blogs from Strapi...</p>
      </div>
    );
  }
  
  if (error) {
    console.error('App.jsx - Fetch error:', error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl text-red-600 mb-4">Error Loading Data</h1>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <p className="text-sm text-gray-500 mb-4">
          Make sure Strapi is running on http://localhost:1337
        </p>
      </div>
    );
  }

  // Extract blogs array from Strapi response
  // Strapi v4 returns: { data: [...], meta: {...} }
  const blogsData = data?.data || [];
  console.log('App.jsx - blogsData to pass:', blogsData);
  
  return (
    <>
      <Navbar />
      <Routes>
        {/* Pass blogsData to components that need it */}
        <Route path="/" element={<Home blogs={blogsData} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs blogs={blogsData} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={blogsData} />} />
        <Route path="*" element={<Blogs blogs={blogsData} />} />
      </Routes>
      <Bookcall />
      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    </>
  );
}

export default App;