import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import BookcallPick from '../assets/director.jpg';

const Bookcall = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating button with rotating words */}
      <div className={`fixed md:bottom-32 bottom-20 md:right-20  right-8 z-40 flex items-center justify-center`}>
        {/* Rotating text ring - larger on md+ screens */}
        <div className="absolute w-32 h-32 md:w-36 md:h-36 flex items-center justify-center">
          <div className="w-full h-full rounded-full animate-spin-slow">
            <svg aria-hidden="true" viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                  fill="none"
                />
              </defs>
              {/* Responsive font size - larger on md+ screens */}
              <text 
                fill="#ccc"
                fontSize="9"
                className="md:text-[10px]"
                fontFamily="Arial, sans-serif"
                fontWeight="400"
                letterSpacing="3"
                textTransform="uppercase"
              >
                <textPath href="#circlePath" startOffset="0%">
                  CROWNATECH • GET IN TOUCH • CROWNATECH • GET IN TOUCH •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Circular image button - slightly smaller on md+ to create more gap */}
        <button
          ref={triggerRef}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="w-18 h-18 md:w-20 md:h-20 rounded-full overflow-hidden  shadow-lg hover:scale-105 transition-transform duration-300 relative flex items-center justify-center bg-black"
        >
          <img 
            src={BookcallPick} 
            alt="Contact Crownatech"
            className="w-full h-full object-cover rounded-full"
          />
        </button>
      </div>

      {/* Modal above the button */}
      {isOpen && (
        <>


          <dialog
            ref={dialogRef}
            aria-labelledby="booking-title"
            onCancel={(event) => { event.preventDefault(); setIsOpen(false); }}
            className="booking-dialog fixed top-auto left-auto m-0 border-0 p-0 bg-transparent bottom-[200px] md:bottom-[270px] right-0 md:right-40 z-50 flex flex-col items-end max-w-[calc(100%-1rem)]"
          >
            {/* Close button outside modal */}
            <button
              aria-label="Close consultation dialog"
              onClick={() => setIsOpen(false)}
              className="mb-2 mr-2 w-8 h-8 rounded-full  flex items-center justify-center shadow-lg transition-colors"
            >
              <HiX className="text-white w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none shadow-xl max-w-sm w-full p-6 animate-fade-up">
              
              {/* Modal header flex justified */}
              <div className="flex justify-between items-center mb-3">
                <h2 id="booking-title" className=" text-2xl font-semibold  text-gray-900 w-1/2 ">Get in touch</h2>

              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base my-6">
                For project enquiries, visit our contact page. Online booking is currently unavailable.
              </p>

              {/* Book button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="group w-full inline-flex items-center bg-black justify-between border-2 border-black rounded-full px-6 py-3 hover:bg-black/95 transition-all duration-300 text-white font-medium no-underline"
              >
                <span>Contact us</span>
                <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <HiArrowRight className="text-black w-5 h-5 -rotate-45" />
                </span>
              </Link>
            </div>
          </dialog>
        </>
      )}

     
    </>
  );
};

export default Bookcall;