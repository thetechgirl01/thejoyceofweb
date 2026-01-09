import React, { useState, useEffect } from 'react';
import { HiArrowRight, HiX } from 'react-icons/hi';
import BookcallPick from '../assets/director.jpg';

const Bookcall = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Floating button with rotating words */}
      <div className={`fixed bottom-6 right-6 z-40 flex items-center justify-center`}>
        {/* Rotating text ring */}
        <div className="absolute w-28 h-28 flex items-center justify-center">
          <div className="w-full h-full rounded-full animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
              </defs>
              <text className="text-[#eee] text-xs sm:text-sm uppercase tracking-widest">
                <textPath href="#circlePath" startOffset="0%">
                  15 MINUTES • FREE • CONSULT • 15 MINUTES • FREE • CONSULT •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Circular image button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-black shadow-lg hover:scale-105 transition-transform duration-300 relative flex items-center justify-center bg-white"
        >
          <img src={BookcallPick} alt="Callpic" className="w-full h-full object-cover rounded-full" />
        </button>
      </div>

      {/* Modal above the button */}
      {isOpen && (
        <>
          {/* Blur rest of page */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"></div>

          <div className="fixed bottom-[130px] right-6 z-50 flex flex-col items-end">
            {/* Close button outside modal */}
            <button
              onClick={() => setIsOpen(false)}
              className="mb-2 mr-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <HiX className="text-black w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none shadow-xl max-w-sm w-full p-6 animate-fade-up">
              
              {/* Modal header flex justified */}
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">15-minute consult</h2>
                <span className="px-3 py-1 border-2 border-black text-sm font-bold rounded-full bg-transparent">
                  FREE
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base mb-4">
                This is a quick free call with Shakuro's design & development producer to talk about your project and figure out if there is a match.
              </p>

              {/* Book button */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center bg-black justify-between border-2 border-black rounded-full px-6 py-3 hover:bg-black/5 transition-all duration-300 text-black font-medium no-underline"
              >
                <span>Book a call</span>
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <HiArrowRight className="text-black w-5 h-5 -rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* Tailwind CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-up {
          animation: fade-up 0.25s ease-out;
        }
      `}</style>
    </>
  );
};

export default Bookcall;
