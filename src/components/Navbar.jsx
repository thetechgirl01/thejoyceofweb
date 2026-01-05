import React, { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Services", "Projects", "About", "FAQs"];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-sm shadow-md text-black" 
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            Rakesh
          </div>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-300 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <button className=" border-2 border-white text-white font-medium py-2 px-4 rounded-lg transition duration-300 bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl shadow-lg">
              Get yours now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-white" />
              ) : (
                <FiMenu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-white">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-3 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="px-3 py-3">
              <button className="w-full .glass-glow text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                Get yours now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}