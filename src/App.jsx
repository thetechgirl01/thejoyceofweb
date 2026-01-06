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
         <div className="px-9  bg-white">
       <Workprocess/>
       
      </div>
     
       <div className="px-9  ">
       <Contact/>
       
      </div>
   
       <div className="px-9  bg-gray-900/95">
       <Blog/>
       
      </div>

        <div className="px-9  bg-gray-900/95">
       <Youtube/>
       
      </div>
           <div className="px-9  ">
       <Footer/>
       
      </div>
      
      



   
    </div>
  );
}

export default App;