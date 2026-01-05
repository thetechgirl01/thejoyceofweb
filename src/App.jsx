import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(6,6,99)]">
      <Navbar/>
      <Hero/>
      
      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-white text-3xl font-bold mb-12 text-center">
            Technologies I use
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['JavaScript', 'Reactive', 'Node', 'Express', 'Bootstrap', 'jQuery', 
              'PHP', 'MySQL', 'MongoDB', 'Git', 'Github', 'Fgrme', 'WordPress'].map((tech) => (
              <div 
                key={tech}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition duration-300"
              >
                <span className="text-white font-medium text-lg">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;