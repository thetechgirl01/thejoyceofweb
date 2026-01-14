import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';
import useFetch from './hooks/useFetch.js'

import {Router, Routes, Route, UNSAFE_FetchersContext } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import BlogContentPage from './pages/BlogContentPage.jsx'; // renamed for clarity
function App() {

  let {loading, error, data} = useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) {
    return <p>Loading...</p>
  }
  if(error) return <p>Error Loading</p>
  console.log(data)
  return (
    <>
      {/* Global Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Dynamic blog content page */}
        <Route path="/blog/:id" element={<BlogContentPage />} />

        {/* Default/fallback route */}
        <Route path="*" element={<Blogs />} />
      </Routes>

      {/* Global Floating Button */}
      <Bookcall />

      {/* Footer */}
      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    
    </>
  );
}


export default App;
