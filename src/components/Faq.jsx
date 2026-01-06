import React, { useState } from "react";

const FAQComponentExact = () => {
  const [openIndex, setOpenIndex] = useState(2);

  const faqItems = [
    {
      id: 1,
      question: "How long does it take to build a website?",
      answer: null
    },
    {
      id: 2,
      question: "Do you offer website maintenance after the project is completed?",
      answer: null
    },
    {
      id: 3,
      question: "Will my website be mobile-friendly?",
      answer: [
        "Absolutely! Every website I develop is fully responsive, meaning it will look and function perfectly on all devices, including desktops, tablets, and smartphones.",
        "A mobile-friendly design is critical for user experience and SEO, so it's always a top priority in my work."
      ]
    },
    {
      id: 4,
      question: "What do I need to provide before we start?",
      answer: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section - Exact visual hierarchy */}
        <div className="mb-20 text-center">
          <div className="mb-4">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">
              FAQ:
            </h1>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </div>

        {/* FAQ Container */}
        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                bg-white 
                border border-gray-300
                rounded-xl
                overflow-hidden
                transition-all duration-200
                ${openIndex === index ? 'shadow-lg' : 'shadow-sm'}
                hover:shadow-md
              `}
            >
              {/* Clickable Question Area */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="
                  w-full 
                  p-8 
                  flex 
                  justify-between 
                  items-center
                  hover:bg-gray-50
                  active:bg-gray-100
                  transition-colors
                "
              >
                {/* Question Text */}
                <div className="flex-1 pr-8">
                  <span className="
                    text-xl 
                    md:text-2xl 
                    font-medium 
                    text-gray-900 
                    leading-relaxed
                    text-left
                  ">
                    {item.question}
                  </span>
                </div>
                
                {/* Plus/Minus Indicator */}
                <div className="
                  w-12 
                  h-12 
                  flex 
                  items-center 
                  justify-center 
                  flex-shrink-0
                ">
                  <span className="
                    text-3xl 
                    font-light 
                    text-gray-700
                  ">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer Content - Appears when open */}
              {openIndex === index && item.answer && (
                <div className="
                  border-t 
                  border-gray-200 
                  px-8 
                  pb-8 
                  pt-6
                ">
                  <div className="space-y-6">
                    {item.answer.map((paragraph, idx) => (
                      <div key={idx}>
                        <p className="
                          text-gray-800 
                          text-lg 
                          md:text-xl 
                          leading-relaxed 
                          font-normal
                          tracking-normal
                        ">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="h-24"></div>
      </div>
    </div>
  );
};

export default FAQComponentExact;