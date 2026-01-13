import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';

import { Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import Footer from './components/Footer.jsx';
import BlogcontntPage from './pages/BlogcontntPage.jsx';

function App() {
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
        <Route path="/blog/id" element={<BlogcontntPage />} />
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
