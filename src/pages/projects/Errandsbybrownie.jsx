import Ebblogo from '../assets/ebblogo.png';
import EbbHeroPic from '../assets/Heroebb.jpeg';
import { HiArrowRight } from 'react-icons/hi';

export default function Errandsbybrownie() {
  return (
    <div className="min-h-screen bg-white text-white">
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mt-12">
              <img src={Ebblogo} alt="Errands by Brownie logo" className="h-10 mb-3 w-auto opacity-90" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight break-words">
              Errandsbybrownie
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
              A responsive website for a Lagos-based courier and errand service, designed to showcase services and make it easy for customers to request deliveries and errands online.
            </p>
            <a
              href="https://www.errandsbybrownie.com"
              className="group flex items-center justify-between w-full max-w-[300px] border border-white/20 rounded-full px-3 py-2 text-xs sm:text-sm hover:bg-white/10 transition"
            >
              <span className="text-white font-medium pl-7">View Live Demo</span>
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:translate-x-1 transition">
                <HiArrowRight className="text-black w-4 h-4 -rotate-45" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto overflow-hidden">
            <img
              src={EbbHeroPic}
              alt="Errands by Brownie website showcase"
              loading="lazy"
              decoding="async"
              className="w-full h-[600px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
