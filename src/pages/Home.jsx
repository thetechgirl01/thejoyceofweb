import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WorkContentPage = () => {
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const sectionRefs = useRef([]);
  
  // Project data
  const projectData = {
    logo: 'https://shakuro.com/logo-ajp.svg',
    title: 'AJP',
    description: 'World\'s fastest growing jiu jitsu tournament organization',
    excerpt: 'Professional Brazilian Jiu Jitsu organization with global events in over 40 countries worldwide.',
    
    sections: [
      {
        title: 'The jiu jitsu Mecca',
        text: 'AJP represents a unique synergy of a modern grass-roots combat subculture and a national sport in the UAE all due to the vision and support of jiu jitsu by Sheikh Mohammed bin Zayed.',
        image: 'https://images.unsplash.com/photo-1546717122-08b9d6d1ac75?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        wide: true
      },
      {
        title: 'The mission',
        text: 'We were brought in as a result of a concept design we delivered to showcase our passion for the sport as practitioners and as a token of gratitude to the organization that has elevated the level of professional jiu jitsu competition.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Identity system',
        text: 'A dynamic but strict style dominated by dark theme and dramatic heroic effects in posters and event graphics.',
        features: ['Color palette inspired by desert colors', 'Logo geometry update', 'Sub-brands system', 'Distinct visual art style'],
        image: 'https://images.unsplash.com/photo-1511886929837-354d826aae2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        wide: true
      },
      {
        title: 'UI/UX design',
        text: 'Creating a welcoming platform while maintaining the technical complexity of a sports league.',
        features: ['Home page layout', 'Rankings system', 'Athlete profiles', 'Event management'],
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      }
    ],
    
    demoLink: 'https://demo.example.com',
    buyLink: 'https://buy.stripe.com/test_123456'
  };

  // GSAP animations
  useEffect(() => {
    // Hero animations - simplified and cleaner
    const heroTl = gsap.timeline();
    
    // Animate logo first
    heroTl.from('.hero-logo', {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Title animation
    heroTl.from('.hero-title', {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.3');
    
    // Description animation
    heroTl.from('.hero-description', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5');
    
    // Excerpt animation
    heroTl.from('.hero-excerpt', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3');
    
    // Buttons animation
    heroTl.from('.hero-button', {
      y: 20,
      opacity: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: 'back.out(1.4)'
    }, '-=0.2');

    // Clean image animations
    imageRefs.current.forEach((img, i) => {
      if (img) {
        gsap.fromTo(img,
          { 
            y: 60, 
            opacity: 0,
            rotation: i % 2 === 0 ? 0.5 : -0.5
          },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Text content animations
    sectionRefs.current.forEach((section, i) => {
      if (section) {
        const content = section.querySelector('.section-content');
        if (content) {
          gsap.fromTo(content.children,
            { 
              y: 30, 
              opacity: 0 
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addImageRef = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  const addSectionRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section - Clean and Centered */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-10 hero-logo opacity-0">
              <img 
                src={projectData.logo} 
                alt="AJP Logo" 
                className="h-16 w-auto mx-auto opacity-90"
              />
            </div>
            
            {/* Title */}
            <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-bold mb-4 leading-none tracking-tight opacity-0">
              {projectData.title}
            </h1>
            
            {/* Description */}
            <h2 className="hero-description text-2xl md:text-3xl text-gray-600 mb-6 font-medium opacity-0">
              {projectData.description}
            </h2>
            
            {/* Excerpt */}
            <p className="hero-excerpt text-lg text-gray-500 mb-10 leading-relaxed opacity-0">
              {projectData.excerpt}
            </p>

            {/* Action Buttons - Clean and Simple */}
            <div className="flex flex-wrap gap-4 justify-center opacity-0">
              <a
                href={projectData.demoLink}
                className="hero-button bg-transparent border-2 border-black text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300 font-medium text-base inline-flex items-center gap-2 group"
              >
                <span>View Live Demo</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={projectData.buyLink}
                className="hero-button bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-all duration-300 font-medium text-base"
              >
                Buy Script · $149
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - minimal */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-pulse">
            <div className="text-gray-400 text-sm">Scroll</div>
          </div>
        </div>
      </div>

      {/* Content Sections with Images - Clean layout */}
      <div className="space-y-20 py-20">
        {projectData.sections.map((section, i) => (
          <div 
            key={i}
            ref={addSectionRef}
            className="container mx-auto px-6"
          >
            <div className={`max-w-5xl mx-auto ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-center gap-12 md:gap-16`}>
              {/* Image */}
              <div className={`md:w-1/2 ${section.wide ? 'md:w-2/3' : ''}`}>
                <div 
                  ref={addImageRef}
                  className={`overflow-hidden rounded-lg ${section.wide ? 'aspect-video' : 'aspect-square'} bg-gray-100`}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 section-content ${i % 2 === 1 ? 'md:pr-8' : 'md:pl-8'}`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {section.text}
                </p>
                
                {section.features && (
                  <div className="space-y-2">
                    {section.features.map((feature, j) => (
                      <div key={j} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-width showcase image - Clean */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div 
            ref={addImageRef}
            className="max-w-6xl mx-auto overflow-hidden rounded-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="AJP Event Showcase"
              className="w-full h-[500px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Final CTA - Clean and Simple */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Need this design?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get the complete React implementation with GSAP animations and production-ready code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={projectData.demoLink}
              className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-300 font-medium"
            >
              View Full Demo
            </a>
            <a
              href={projectData.buyLink}
              className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-all duration-300 font-medium"
            >
              Purchase Script · $149
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            React components, GSAP animations, responsive design
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage;