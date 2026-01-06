import React, { useRef, useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import gsap from 'gsap';

export const Hero = () => {
  const technologies = [
    'JavaScript', 'React', 'Node', 'Express', 'Bootstrap', 'jQuery',
    'PHP', 'MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'WordPress'
  ];

  const scrollRef = useRef(null);
  const techneikRef = useRef(null);
  const overlayRef = useRef(null);

  // Drag/swipe state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // GSAP animation on page load
  useEffect(() => {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = '#011936'; // Blue background
    overlay.style.zIndex = '1';
    
    // Insert overlay before the text content
    if (techneikRef.current) {
      techneikRef.current.style.position = 'relative';
      techneikRef.current.appendChild(overlay);
      overlayRef.current = overlay;
      
      // Animate the text to slide up
      gsap.fromTo(
        techneikRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 3, ease: 'power3.out' }
      );
      
      // Animate the overlay to slide up and reveal the text
      gsap.fromTo(
        overlay,
        { y: 0 },
        { y: '-100%', duration: 3, ease: 'power3.out', delay: 0.1 }
      );
    }
    
    // Cleanup
    return () => {
      if (overlayRef.current && overlayRef.current.parentNode) {
        overlayRef.current.parentNode.removeChild(overlayRef.current);
      }
    };
  }, []);

  // Mouse events
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseUp = () => setIsDown(false);
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="min-h-screen flex flex-col  items-center justify-center px-4 sm:px-6 md:px-6 py-5 relative ">
      {/* Glass Card */}
      <div className="rounded-3xl shadow-2xl max-w-5xl w-full p-6 sm:p-8 md:p-16 z-10 mt-16">
        <div className="flex flex-col items-center text-center">
          {/* Location */}
          <h3 className="flex items-center gap-2 text-white/50 text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 md:mb-2">
            <MdLocationOn className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Lagos, Nigeria.</span>
          </h3>

          {/* Main Title - Updated with inline-block for proper overlay positioning */}
          <h1
            ref={techneikRef}
            className="text-white text-4xl sm:text-5xl md:text-8xl font-bold mb-2 sm:mb-3 md:mb-6 leading-tight sm:leading-snug md:leading-none inline-block relative overflow-hidden"
          >
            TECHNEIK
          </h1>

          {/* Subtitle */}
          <h2 className="text-blue-300 text-lg sm:text-xl md:text-3xl font-semibold mb-2 sm:mb-4 md:mb-4 leading-snug sm:leading-snug md:leading-none">
            Best Web Software Services
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-10 leading-snug sm:leading-relaxed md:leading-relaxed max-w-3xl">
           We're a creative studio that focuses on building software solutions for busineses and startups with TASTE.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 sm:px-10 md:px-12 rounded-xl transition duration-300 hover:scale-105">
              Let's Talk <AiOutlineArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-blue-500/20 border-2 border-white text-white font-semibold py-3 px-8 sm:px-10 md:px-12 rounded-xl transition duration-300 hover:scale-105">
              Works<AiOutlineArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Technologies Section */}
          <h3 className="text-white/50 text-md sm:text-sm font-bold mb-6 mt-10 text-center">
           What We Bring To The Table:
          </h3>

          <div className="relative w-full overflow-hidden">
            {/* Smoky overlay on both sides */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/50 pointer-events-none z-20" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/50 pointer-events-none z-20" />

            {/* Tech items container with drag-to-scroll - HIDDEN SCROLLBAR */}
            <div
              ref={scrollRef}
              className="flex gap-2 py-2 px-4 cursor-grab overflow-x-hidden" // Changed to overflow-x-hidden
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
            >
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    bg-white/10 backdrop-blur-md
                    border border-white/20
                    rounded-full
                    px-3 py-1
                    text-white text-sm font-medium
                    hover:bg-white/20
                    whitespace-nowrap
                    flex-shrink-0
                    transition
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero