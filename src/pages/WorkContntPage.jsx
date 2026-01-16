import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkContentPage = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRefs = useRef([]);
  
  const [projectData] = useState({
    logo: 'https://shakuro.com/logo-ajp.svg',
    title: 'AJP Case Study',
    description: 'Building the World\'s Fastest-Growing Jiu-Jitsu Platform',
    excerpt: 'Professional Brazilian Jiu Jitsu organization with global events in over 40 countries worldwide.',
    
    sections: [
      {
        id: 'overview',
        title: 'World\'s fastest growing jiu jitsu tournament organization',
        text: 'Abu Dhabi Jiu Jitsu Pro (AJP) is a professional Brazilian Jiu Jitsu organization created with the goal of developing the sport of jiu jitsu around the world. In 2023, Shakuro has been privileged to design and build a website for AJP.'
      },
      {
        id: 'mecca',
        title: 'The jiu jitsu Mecca',
        text: 'AJP represents a unique synergy of a modern grass-roots combat subculture and a national sport in the UAE all due to the vision and support of jiu jitsu by Sheikh Mohammed bin Zayed.',
        stats: ['7,000+ registered athletes', '40+ countries worldwide', 'Global tournament network']
      },
      {
        id: 'mission',
        title: 'The mission',
        text: 'We were brought in as a result of a concept design we delivered to showcase our passion for the sport as practitioners and as a token of gratitude to the organization.'
      },
      {
        id: 'challenge',
        title: 'The challenge',
        text: 'As a sports organization with over 7,000 registered athletes, AJP needed control over their platform infrastructure and unique customization.',
        features: [
          'Interactive event map',
          'New navigation system',
          'Redesigned athlete profile',
          'New content library',
          'Redefined event registration',
          'New mobile experience',
          'Brand visual language'
        ]
      },
      {
        id: 'outcome',
        title: 'Outcome',
        text: 'The ajp.world website went live in 2024 and became a stepping stone in the company\'s journey towards an innovative digital experience.'
      }
    ],
    
    // Button links
    demoLink: '#demo',
    buyScriptLink: 'https://buy.stripe.com/test_123456',
    demoText: 'View Live Demo',
    buyText: 'Buy Script ($149)',
    
    // Stats for hero
    heroStats: [
      { value: '7,000+', label: 'Athletes' },
      { value: '40+', label: 'Countries' },
      { value: '2024', label: 'Launch' }
    ]
  });

  // GSAP Animations
  useEffect(() => {
    // Hero animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
      .fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo('.hero-stat',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo('.hero-button',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)' },
        '-=0.2'
      );

    // Content section animations
    contentRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 30%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Feature list animation
    gsap.utils.toArray('.feature-item').forEach((item, index) => {
      gsap.fromTo(item,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={projectData.logo} 
              alt={`${projectData.title} Logo`}
              className="h-12 w-auto opacity-0" // GSAP will animate
              ref={el => {
                if (el) {
                  gsap.fromTo(el,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.3 }
                  );
                }
              }}
            />
          </div>
          
          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight opacity-0"
          >
            {projectData.title}
          </h1>
          
          {/* Description */}
          <h2 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-blue-200 mb-8 font-light opacity-0"
          >
            {projectData.description}
          </h2>
          
          {/* Excerpt */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-12 opacity-0">
            {projectData.excerpt}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-12 mb-12">
            {projectData.heroStats.map((stat, index) => (
              <div 
                key={index}
                className="hero-stat opacity-0"
              >
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-sm md:text-base text-blue-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={projectData.demoLink}
              className="hero-button bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg opacity-0 inline-block"
            >
              {projectData.demoText}
            </a>
            <a
              href={projectData.buyScriptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg opacity-0 inline-block"
            >
              {projectData.buyText}
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        {projectData.sections.map((section, index) => (
          <section 
            key={section.id}
            ref={addToRefs}
            className="mb-20 md:mb-32 last:mb-0 opacity-0"
          >
            <div className="max-w-4xl mx-auto">
              {/* Section Title */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-10">
                {section.title}
              </h2>
              
              {/* Section Text */}
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 md:mb-12">
                {section.text}
              </p>
              
              {/* Stats Grid */}
              {section.stats && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12">
                  {section.stats.map((stat, idx) => (
                    <div 
                      key={idx}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <div className="text-gray-700">{stat}</div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Features List */}
              {section.features && (
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-700 mb-6 uppercase tracking-wider">
                    THE SCOPE
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="feature-item flex items-start opacity-0"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to implement this design?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
            Get the complete React implementation with GSAP animations and responsive design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={projectData.demoLink}
              className="bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 inline-block"
            >
              View Full Demo
            </a>
            <a
              href={projectData.buyScriptLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg inline-block"
            >
              Purchase Complete Script
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Includes React components, GSAP animations, and Tailwind CSS configuration
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage;