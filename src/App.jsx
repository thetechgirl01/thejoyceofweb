import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import FAQComponent from './components/Faq';
import Contact from './components/Contact';
import Workprocess from './components/WorkProcess';
import Blog from './components/Blog';
import Youtube from './components/Youtube';
import Footer from './components/Footer.jsx';
import Tesst from './components/Tesst.jsx';
import Bookcall from './components/Bookcall.jsx';

function App() {
  return (
    <div className="relative min-h-screen"> {/* Make this relative for modals if needed */}
      <Navbar />
       <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
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

      {/** 
      <div className="px-9 bg-gray-900/95">
        <Blog />
      </div>

      <div className="px-9 bg-gray-900/95">
        <Youtube />
      </div>
      */}

      <div className="px-9 bg-white">
        <Tesst />
      </div>

      <div className="px-9 rounded-tr-3xl rounded-tl-3xl">
        <Footer />
      </div>

      {/* --- Floating Bookcall button --- */}
      <Bookcall />  {/* <-- Always render it here at the top level */}
    </div>
  );
}

export default App;
