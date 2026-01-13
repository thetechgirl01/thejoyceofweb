import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';

import { Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/Works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import BlogContentPage from './pages/BlogContentPage.jsx'; // renamed for clarity

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
