import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ErrandsByBrownie = () => {
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const sectionRefs = useRef([]);
  
  // Project data
  const projectData = {
    logo: 'https://svgshare.com/i/z38.svg',
    title: 'Errands by Brownie',
    description: 'Your Go-To Errand Experts in Lagos',
    excerpt: 'We started with one goal: make Lagos life easier. From urgent deliveries to daily errands, we\'re the solution for busy people who need things done right, and fast.',
    
    stats: [
      { value: '200+', label: 'Daily Errands' },
      { value: '1000+', label: 'Deliveries' },
      { value: '45min', label: 'Avg Response' },
      { value: '24/7', label: 'Service' }
    ],
    
    sections: [
      {
        title: 'We Know Lagos',
        text: 'Our riders know every route, every shortcut, every corner of Lagos. We\'re not just delivering packages - we\'re running errands, handling tasks, and solving problems across the city.',
        image: 'https://images.unsplash.com/photo-1625842267977-6d1c86d7e7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        wide: true
      },
      {
        title: 'Our Mission',
        text: 'To be Lagos\' most reliable delivery and errand service, making urban life simpler with fast, affordable, and trustworthy solutions for everyone.',
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Our Vision',
        text: 'To revolutionize urban logistics across Nigeria, building a network that connects people and businesses through seamless delivery and errand services.',
        features: ['City-wide coverage', 'Affordable pricing', 'Trusted service', 'Technology-driven solutions'],
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        wide: true
      },
      {
        title: 'What We Do',
        text: 'Beyond deliveries - we\'re your complete errand solution in Lagos',
        features: ['Fast same-day deliveries across Lagos', 'Grocery shopping & pickup services', 'Document filing & bill payments', 'Personal shopping & item returns', 'Real-time tracking for all shipments'],
        image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
      }
    ],
    
    testimonials: {
      title: '200+ 5-star Reviews',
      quote: 'No.1 Courier Delivery & Errand Service in Lagos.',
      description: 'Errands by Brownie is your reliable courier and errands service in Lagos, ensuring safe, timely deliveries and helping you handle everyday tasks with speed and care.'
    },
    
    demoLink: 'https://errandsbrownie.demo.com',
    contactLink: 'https://wa.me/234XXXXXXXXXX'
  };

  // GSAP animations
  useEffect(() => {
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
      .from('.hero-title', { y: 100, opacity: 0, duration: 1.2, ease: 'power3.out' })
      .from('.hero-description', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
      .from('.hero-excerpt', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .from('.hero-stat', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.2')
      .from('.hero-button', { y: 20, opacity: 0, stagger: 0.2, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.2');

    // Image animations
    imageRefs.current.forEach((img, i) => {
      if (img) {
        gsap.fromTo(img,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
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

    // Section text animations
    sectionRefs.current.forEach((section, i) => {
      if (section) {
        gsap.fromTo(section.querySelectorAll('.section-content > *'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-black to-yellow-900"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Logo */}
            <div className="mb-12">
              <img 
                src={projectData.logo} 
                alt="Errands by Brownie Logo" 
                className="h-24 w-auto opacity-90"
              />
            </div>
            
            {/* Title */}
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              {projectData.title}
            </h1>
            
            {/* Description */}
            <h2 className="hero-description text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-light max-w-3xl">
              {projectData.description}
            </h2>
            
            {/* Excerpt */}
            <p className="hero-excerpt text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
              {projectData.excerpt}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {projectData.stats.map((stat, index) => (
                <div key={index} className="hero-stat text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={projectData.demoLink}
                className="hero-button bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
              >
                Book a Delivery
              </a>
              <a
                href={projectData.contactLink}
                className="hero-button bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium text-lg"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Images */}
      <div className="space-y-32 py-32">
        {projectData.sections.map((section, i) => (
          <div 
            key={i}
            ref={addSectionRef}
            className={`container mx-auto px-4 ${i % 2 === 0 ? '' : ''}`}
          >
            <div className={`max-w-6xl mx-auto ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} flex flex-col md:flex-row items-center gap-12 md:gap-24`}>
              {/* Image */}
              <div className={`md:w-1/2 ${section.wide ? 'md:w-2/3' : ''}`}>
                <div 
                  ref={addImageRef}
                  className={`overflow-hidden rounded-lg ${section.wide ? 'aspect-video' : 'aspect-square'}`}
                >
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 section-content">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {section.text}
                </p>
                
                {section.features && (
                  <div className="space-y-3">
                    {section.features.map((feature, j) => (
                      <div key={j} className="flex items-center">
                        <span className="w-3 h-3 bg-green-500 mr-3 rounded-full"></span>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonial Section */}
      <div className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="text-green-400 text-6xl mb-4">★★★★★</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                {projectData.testimonials.title}
              </h3>
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
                "{projectData.testimonials.quote}"
              </blockquote>
              <p className="text-xl text-gray-300 leading-relaxed">
                {projectData.testimonials.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width showcase image */}
      <div className="py-32">
        <div className="container mx-auto px-4">
          <div 
            ref={addImageRef}
            className="max-w-6xl mx-auto overflow-hidden rounded-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Lagos Delivery Showcase"
              className="w-full h-[600px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Need Something Delivered in Lagos?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From urgent packages to daily errands, we're here to make Lagos life easier for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={projectData.demoLink}
              className="border-2 border-green-500 text-green-500 px-10 py-5 text-lg rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 font-medium"
            >
              Schedule a Pickup
            </a>
            <a
              href={projectData.contactLink}
              className="bg-green-600 text-white px-10 py-5 text-lg rounded-lg hover:bg-green-700 transition-all duration-300 font-medium"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="text-gray-500 mt-8 text-sm">
            Available 24/7 across all Lagos areas • Real-time tracking • Affordable rates
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrandsByBrownie;