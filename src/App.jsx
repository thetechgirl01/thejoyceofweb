import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';

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
   
    </div>
  );
}

export default App;