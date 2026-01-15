import React, { useState, useEffect, useRef } from 'react';


const WorkContentPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [imageOpacity, setImageOpacity] = useState(1);
  
  const sectionRefs = useRef({});
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const imageRefs = useRef([]);

  // Project data with actual working image URLs
  const projectData = {
    logo: 'https://svgshare.com/i/11K3.svg',
    title: 'Amaka',
    subtitle: 'Accounting Integrations and Business Automation',
    excerpt: '100% Precise Accounting Integrations currently saving thousands of hours for businesses globally.',
    sections: [
      {
        id: 'leader',
        title: 'The Accounting Integration Leader',
        content: 'Amaka represents modern accounting automation and business process optimization.',
        bgImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80'
      },
      {
        id: 'mission',
        title: 'The Mission',
        content: 'We were brought in to showcase our passion for accounting automation.',
        bgImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80'
      },
      {
        id: 'challenge',
        title: 'The Challenge',
        content: 'Serving businesses globally required a scalable solution.',
        scope: ['Dashboard', 'Integrations', 'Reporting'],
        bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80'
      },
      {
        id: 'identity',
        title: 'Identity System',
        content: 'Brand identity for precision and reliability.',
        bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
        palette: ['#1E3A8A', '#3B82F6', '#10B981']
      },
      {
        id: 'uiux',
        title: 'UI/UX Design',
        content: 'Creating intuitive experiences for complex systems.',
        bgImage: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1920&q=80'
      },
      {
        id: 'outcome',
        title: 'Outcome',
        content: 'Successfully launched and serving thousands of businesses.',
        bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80'
      }
    ]
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Sticky navigation
      if (navRef.current) {
        const navTop = navRef.current.offsetTop;
        setIsNavSticky(scrollY > navTop);
      }
      
      // Active section tracking
      const sections = projectData.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionRefs.current[sections[i].id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
      
      // Image zoom effect for current section
      const activeIndex = projectData.sections.findIndex(s => s.id === activeSection);
      if (activeIndex >= 0 && imageRefs.current[activeIndex]) {
        const imgRect = imageRefs.current[activeIndex].getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imgVisibleHeight = Math.min(imgRect.bottom, windowHeight) - Math.max(imgRect.top, 0);
        const visibilityRatio = imgVisibleHeight / windowHeight;
        
        // Zoom effect: scales from 1 to 1.2 based on visibility
        const scale = 1 + (0.2 * visibilityRatio);
        const opacity = 0.7 + (0.3 * visibilityRatio);
        
        setImageScale(scale);
        setImageOpacity(opacity);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = sectionRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="work-page">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero-section"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80)`
        }}
      >
        <div className="hero-content">
          <img src={projectData.logo} alt="Logo" className="logo" />
          <h1>{projectData.title}</h1>
          <p className="subtitle">{projectData.subtitle}</p>
          <p className="excerpt">{projectData.excerpt}</p>
        </div>
      </section>
      
      {/* Sticky Navigation */}
      <nav 
        ref={navRef} 
        className={`main-nav ${isNavSticky ? 'sticky' : ''}`}
        style={{
          transform: `scale(${isNavSticky ? 0.95 : 1})`,
          opacity: isNavSticky ? 0.95 : 1
        }}
      >
        <div className="nav-container">
          {projectData.sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="content">
        {projectData.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            ref={el => {
              sectionRefs.current[section.id] = el;
              imageRefs.current[index] = el?.querySelector('.section-bg');
            }}
            className="page-section"
          >
            {/* Background Image with Zoom Effect */}
            <div 
              className="section-bg"
              style={{
                backgroundImage: `url(${section.bgImage})`,
                transform: `scale(${activeSection === section.id ? imageScale : 1})`,
                opacity: activeSection === section.id ? imageOpacity : 0.3
              }}
            />
            
            {/* Content Overlay */}
            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              
              {section.scope && (
                <div className="scope">
                  <h3>Scope</h3>
                  <ul>
                    {section.scope.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {section.palette && (
                <div className="palette">
                  <h3>Color Palette</h3>
                  <div className="colors">
                    {section.palette.map((color, i) => (
                      <div 
                        key={i} 
                        className="color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default WorkContentPage;