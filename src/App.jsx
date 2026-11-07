import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Bookcall from './components/Bookcall.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Works from './pages/works';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import FAQ from './pages/Faq';
import BlogContentPage from './pages/BlogContentPage.jsx';
import WorkContentPage from './pages/WorkContntPage.jsx';
import Errandsbybrownie from './pages/projects/Errandsbybrownie.jsx';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogContentPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/work" element={<WorkContentPage />} />
        <Route path="*" element={<Blogs />} />

        <Route path="/projects/errands-by-brownie" element={<Errandsbybrownie />} />
      </Routes>
      </main>

      <Bookcall />
      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>
    </>
  );
}

export default App;