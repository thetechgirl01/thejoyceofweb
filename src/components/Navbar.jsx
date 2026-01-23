import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tklogo from "../assets/tklogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/5 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="w-14">
            <img src={Tklogo} alt="Teckneik Logo" />
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[60] w-10 h-10 flex items-center justify-center"
            aria-label="Open menu"
          >
            {/* Animated Circle */}
            <span
              className={`absolute inset-0 rounded-full bg-white transition-transform duration-500 ease-out ${
                isOpen ? "scale-100" : "scale-0"
              }`}
            />

            {/* Two-line Icon */}
            <span className="relative flex flex-col gap-2">
              <span
                className={`block h-[2px] w-7 transition-all duration-300 ${
                  isOpen ? "bg-black translate-y-[6px]" : "bg-white"
                }`}
              />
              <span
                className={`block h-[2px] w-5 transition-all duration-300 ${
                  isOpen ? "bg-black -translate-y-[6px]" : "bg-white"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
      </div>

      {/* SLIDE MENU */}
      <aside
        className={`fixed top-0 right-0 h-screen z-50 bg-white text-black
        transition-transform duration-500 ease-in-out
        w-full md:w-[35%]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full flex flex-col justify-center px-10">
          <ul className="space-y-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-4xl font-light tracking-tight hover:opacity-60 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
