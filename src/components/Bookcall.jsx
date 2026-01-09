import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiX } from 'react-icons/hi';
import BookcallPick from '../assets/director.jpg'

const Bookcall = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Fixed circular button at bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed
          bottom-6 right-6
          w-20 h-20
          rounded-full
          bg-white
          border-2 border-black
          shadow-lg
          flex items-center justify-center
          z-40
          hover:scale-105
          transition-transform
          duration-300
          group
          overflow-hidden
        "
      >
        {/* Rotating text border */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="
            absolute
            inset-[-2px]
            rounded-full
            animate-spin-slow
            [animation-duration:20s]
          ">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-xs fill-black">
                <textPath href="#circlePath" startOffset="0%">
                  15 minutes • Free consult • 15 minutes • Free consult •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Callpic text */}
        <span className="
          relative
          text-black
          font-bold
          text-sm
          group-hover:text-blue-600
          transition-colors
        ">
          Callpic
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            z-50
            flex items-center justify-center
            p-4
          "
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="
              relative
              bg-white
              rounded-2xl
              max-w-md
              w-full
              p-6
              shadow-2xl
              animate-fade-in
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                absolute
                top-4 right-4
                w-8 h-8
                rounded-full
                flex items-center justify-center
                hover:bg-gray-100
                transition-colors
              "
            >
              <HiX className="w-5 h-5 text-gray-600" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  15-minute consult
                </h2>
                <span className="
                  px-3 py-1
                  rounded-full
                  border-2 border-black
                  text-sm font-bold
                  bg-transparent
                ">
                  FREE
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                This is going to be a quick free call with Shakuro's own design & development producer to talk about your project and figure out if there is a match.
              </p>
            </div>

            {/* Button */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-full
                inline-flex items-center justify-between
                border-2 border-black
                rounded-full
                px-6 py-3
                hover:bg-black/5
                transition-all
                duration-300
                text-black
                font-medium
                no-underline
              "
            >
              <span>Book a call</span>
              <span className="
                w-8 h-8
                bg-yellow-400
                rounded-full
                flex items-center justify-center
                group-hover:translate-x-1
                transition-transform
                duration-300
              ">
                <HiArrowRight className="text-black w-5 h-5 -rotate-45" />
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Bookcall;