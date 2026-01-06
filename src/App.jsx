import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import FAQComponent from './components/Faq';
import Contact from './components/contact';
import Workprocess from './components/WorkProcess';


function App() {
  return (
    <div className="min-h-screen ">
      <Navbar/>
      <Hero/>
      <div className="px-9 bg-gray-900/95">
        <Services/>
      </div > 
      <div className="px-9 bg-white">
        <About/>
      </div>
       <div className="px-9  bg-gray-900/95">
       <Projects/>
      </div>
       <div className="px-9  bg-gray-900/95">
       <FAQComponent/>
      </div>
       <div className="px-9  bg-gray-900/95">
       <Contact/>
       
      </div>
      <div className="px-9  bg-gray-900/95">
       <Workprocess/>/
       
      </div>
      



   
    </div>
  );
}

export default App;