import React, { useRef, useEffect, useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineArrowRight } from 'react-icons/ai';
import gsap from 'gsap';

export const Hero = () => {
  const scrollRef = useRef(null);
  const techneikRef = useRef(null);
  const overlayRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // GSAP intro animation
  useEffect(() => {
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.inset = '0';
    overlay.style.backgroundColor = '#011936';
    overlay.style.zIndex = '1';

    if (techneikRef.current) {
      techneikRef.current.style.position = 'relative';
      techneikRef.current.appendChild(overlay);
      overlayRef.current = overlay;

      gsap.fromTo(
        techneikRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 2.2, ease: 'power3.out' }
      );

      gsap.fromTo(
        overlay,
        { y: 0 },
        { y: '-100%', duration: 2.2, ease: 'power3.out', delay: 0.1 }
      );
    }

    return () => {
      if (overlayRef.current?.parentNode) {
        overlayRef.current.parentNode.removeChild(overlayRef.current);
      }
    };
  }, []);

  // Drag logic
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  // Touch logic
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  return (
    <div className="py-10 sm:py-1" style={{ minHeight: '80vh' }}>
      <section 
        className="flex flex-col items-start justify-start px-4 md:px-24 py-8 relative"
      >
        <div className="bg max-w-6xl w-full p-6 sm:p-8 md:p-16 pt-24 md:pt-32">
          <div className="flex flex-col items-start text-left">

            {/* Location */}
            <h3 className="flex items-center gap-2 text-white/50 text-sm md:text-lg font-semibold mb-2">
              <MdLocationOn className="w-5 h-5" />
              Lagos, Nigeria.
            </h3>

            {/* Title */}
            <h1
              ref={techneikRef}
              className="
                text-white
                text-4xl sm:text-5xl md:text-7xl
                font-bold
                leading-none
                m-0
                p-0
                inline-block
                relative
                overflow-hidden
              "
            >
              Web design & development company
            </h1>

            {/* Subtitle */}
            <h2 className="text-blue-300 text-lg sm:text-xl md:text-3xl font-semibold mt-2 mb-4">
              CROWNATECH
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base md:text-xl mb-8 max-w-3xl">
              A creative code studio focused on building software solutions
              for businesses and startups with taste.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-start gap-4 mb-12">
              <button className="flex items-center gap-2 bg-white text-black font-semibold py-3 px-8 rounded-xl transition hover:scale-105">
                Get in touch
                <AiOutlineArrowRight className="-rotate-45" />
              </button>

              <button className="flex items-center gap-2 border-2 border-white text-white font-semibold py-3 px-8 rounded-xl transition hover:bg-blue-500/20 hover:scale-105">
                Works
                <AiOutlineArrowRight className="-rotate-45" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;