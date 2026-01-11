import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/Works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';

function App() {
  return (
    <Router>
      {/* Navbar is global */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      {/* Floating Bookcall button stays global */}
      <Bookcall />
    </Router>
  );
}

export default App;
