import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
    { name: "FAQ", path: "/faq" },
   
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
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

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-yellow-300 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/contact"
              className="border-2 border-white text-white font-medium py-2 px-4 rounded-2xl shadow-lg transition duration-300 bg-white/15 backdrop-blur-lg"
            >
              Get yours now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-6 h-6 text-white" /> : <FiMenu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-white">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <Link
                to="/contact"
                className="w-full text-white font-medium py-2 px-4 rounded-lg transition duration-300 border-2 border-white/25"
                onClick={() => setIsOpen(false)}
              >
                Get yours now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
