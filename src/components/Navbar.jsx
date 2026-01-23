import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tklogo from '../assets/tklogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blogs" },
    { name: "Works", path: "/works" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR - Fixed with highest z-index */}
      <nav
        className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/5 backdrop-blur-sm shadow-md text-black"
            : "bg-transparent text-white bg-white/5 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 w-14">
              <img src={Tklogo} alt="Teckneik Logo" />
            </div>

            {/* Menu Button - Always clickable */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-11 h-11 flex items-center justify-center rounded-full overflow-visible"
              aria-label="Toggle menu"
            >
              {/* Animated White Circle Background */}
              <span
                className={`absolute inset-0 rounded-full bg-white transition-all duration-500 ease-out ${
                  isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
              
              {/* Menu Icon Container */}
              <span className="relative w-6 h-5 flex items-center justify-center">
                {/* Two-line Hamburger Menu (when closed) */}
                {!isOpen ? (
                  <span className="flex flex-col gap-1.5 w-full">
                    <span className="block h-[2px] w-full bg-white rounded-full transition-all duration-300" />
                    <span className="block h-[2px] w-3/4 bg-white rounded-full transition-all duration-300" />
                  </span>
                ) : (
                  /* X Icon (when open) */
                  <span className="relative w-5 h-5">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-black rotate-45 rounded-full" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-[2px] bg-black -rotate-45 rounded-full" />
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay - Behind nav but above content */}
      <div
        className={`fixed inset-0 z-[90] bg-black transition-opacity duration-500 ${
          isOpen
            ? "opacity-40 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide Menu - Below navbar but above overlay */}
      <aside
        className={`fixed top-0 right-0 h-screen z-[95] bg-gray-900/95 backdrop-blur-md
          transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-full md:w-[35%] lg:w-[30%] xl:w-[25%]
          overflow-hidden`}
      >
        <div className="h-full flex flex-col justify-center items-start px-8 sm:px-12 md:px-16 pt-16">
          <ul className="space-y-6 md:space-y-8 w-full">
            {navLinks.map((link, index) => (
              <li key={link.name} className="overflow-hidden">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl md:text-4xl lg:text-5xl font-light text-white 
                           tracking-tight hover:text-yellow-300 
                           transition-all duration-300 transform hover:translate-x-4
                           hover:opacity-80"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100px)',
                    opacity: isOpen ? 1 : 0,
                    transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms, 
                                 opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms, 
                                 color 0.3s ease`
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            {/* Contact Button in Menu */}
            <li className="pt-8 md:pt-12 overflow-hidden">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-block border-2 border-white/40 text-white 
                         font-medium py-3 px-8 rounded-2xl shadow-lg 
                         transition-all duration-300 transform hover:translate-x-4
                         hover:border-yellow-300 hover:text-yellow-300
                         hover:bg-white/5 backdrop-blur-sm"
                style={{
                  transitionDelay: `${navLinks.length * 100}ms`,
                  transform: isOpen ? 'translateX(0)' : 'translateX(100px)',
                  opacity: isOpen ? 1 : 0,
                  transition: `transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100}ms, 
                               opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${navLinks.length * 100}ms, 
                               all 0.3s ease`
                }}
              >
                Get yours now
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}