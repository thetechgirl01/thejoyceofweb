import React, { useState, useEffect, useRef } from 'react';
import { HiArrowRight, HiCalendar, HiClock, HiSearch } from 'react-icons/hi';
import { FaBookOpen, FaEnvelope } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const blogsRef = useRef(null);
  const postRefs = useRef([]);

  const categories = [
    { name: 'All', count: 24 },
    { name: 'Web Development', count: 8 },
    { name: 'UI/UX Design', count: 5 },
    { name: 'Technology', count: 6 },
    { name: 'Performance', count: 3 },
    { name: 'Business', count: 2 }
  ];

  const allBlogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      category: "Technology",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  
  ];

  // Filter posts based on category and search
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".blogs-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });

      // Filter buttons animation
      gsap.from(".category-btn", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.4,
        ease: "power3.out"
      });

      // Search bar animation
      gsap.from(".search-container", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out"
      });

      // Staggered posts animation
      postRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.from(ref, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.8 + (index * 0.05),
            ease: "power3.out"
          });
        }
      });

      // Newsletter animation
      gsap.from(".newsletter-section", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".newsletter-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ease: "power3.out"
      });

    }, blogsRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (element) => {
    gsap.to(element, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (element) => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div ref={blogsRef} className="min-h-screen py-10 sm:py-16">
      
      {/* HEADER */}
      <header className="blogs-header px-4 pt-16 sm:px-6 max-w-7xl mx-auto mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-start">
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
           
              <div>
              
                <h1 className="
                  text-white font-bold leading-tight
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  mt-1
                ">
                  Read our daily blogs on everything web
                </h1>
              </div>
            </div>
            
            <p className="
              text-white/70
              text-base sm:text-lg md:text-xl
              leading-relaxed mt-4 max-w-2xl
            ">
              Explore our complete collection of articles on web development, design, 
              technology, and business insights.
            </p>
          </div>

          {/* SUBSCRIBE BUTTON */}
          <button
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            className="
              group
              flex items-center gap-3
              px-6 py-4
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-xl
              text-white font-semibold
              hover:border-yellow-400
              hover:bg-white/10
              transition-all duration-300
            "
          >
            <FaEnvelope className="w-5 h-5" />
            Subscribe to Newsletter
            <HiArrowRight className="
              w-5 h-5
              group-hover:translate-x-1
              transition-transform
            " />
          </button>
        </div>
      </header>

      {/* SEARCH BAR */}
      <section className="search-container px-4 sm:px-6 max-w-4xl mx-auto mb-8">
        <div className="relative">
          <HiSearch className="
            absolute left-4 top-1/2 transform -translate-y-1/2
            w-5 h-5 text-white/40
          " />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="
              w-full
              pl-12 pr-4 py-4
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-xl
              text-white
              placeholder:text-white/40
              focus:outline-none focus:border-blue-400
              transition
            "
          />
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                category-btn
                px-4 py-2
                rounded-full
                text-sm font-medium
                transition-all
                ${activeCategory === category.name
                  ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                  : 'backdrop-blur-xl bg-white/10 text-white hover:bg-white/20'
                }
              `}
            >
              {category.name}
              <span className={`
                ml-2 px-1.5 py-0.5 rounded-full text-xs
                ${activeCategory === category.name
                  ? 'bg-black/20 text-black'
                  : 'bg-white/20 text-white/70'
                }
              `}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* RESULTS COUNT */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mb-6">
        <p className="text-white/60 text-sm">
          Showing {filteredPosts.length} of {allBlogPosts.length} articles
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </div>

      {/* BLOG POSTS GRID */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                ref={el => postRefs.current[index] = el}
                onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                className="
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-2xl
                  overflow-hidden
                  hover:border-white/20
                  hover:bg-white/10
                  transition-all duration-300
                  h-full
                  group
                "
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Article Preview</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="
                      px-3 py-1
                      bg-blue-400/20 backdrop-blur-sm
                      text-blue-400
                      rounded-full
                      text-xs font-medium
                    ">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <HiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <HiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="
                    text-white
                    text-lg font-bold
                    mb-3
                    line-clamp-2
                    group-hover:text-yellow-400
                    transition-colors
                  ">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="
                    text-gray-300
                    text-sm
                    mb-6
                    line-clamp-3
                    leading-relaxed
                  ">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <button
                    onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                    onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    className="
                      w-full
                      flex items-center justify-center gap-2
                      py-3
                      backdrop-blur-xl bg-white/10
                      border border-white/20
                      text-white
                      rounded-xl
                      text-sm font-medium
                      hover:bg-yellow-400
                      hover:border-yellow-400
                      hover:text-black
                      transition-all duration-300
                    "
                  >
                    <span>Read Article</span>
                    <HiArrowRight className="
                      w-4 h-4
                      group-hover:translate-x-1
                      transition-transform
                    " />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="
            text-center
            py-12
            backdrop-blur-xl bg-white/5
            border border-white/10
            rounded-2xl
          ">
            <div className="
              w-16 h-16
              bg-blue-400
              rounded-xl
              flex items-center justify-center
              mx-auto mb-4
            ">
              <HiSearch className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">
              No articles found
            </h3>
            <p className="text-white/60">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {filteredPosts.length > 0 && filteredPosts.length < allBlogPosts.length && (
          <div className="text-center mt-12">
            <button
              onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="
                group
                inline-flex items-center gap-3
                px-8 py-4
                backdrop-blur-xl bg-white/5
                border border-white/10
                text-white font-semibold
                rounded-xl
                hover:bg-yellow-400
                hover:border-yellow-400
                hover:text-black
                transition-all duration-300
              "
            >
              Load More Articles
              <HiArrowRight className="
                w-5 h-5
                group-hover:translate-x-1
                transition-transform
              " />
            </button>
          </div>
        )}
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="newsletter-section px-4 sm:px-6 max-w-4xl mx-auto mt-16 sm:mt-20">
        <div className="
          backdrop-blur-xl bg-white/5
          border border-white/10
          rounded-2xl
          p-8 sm:p-12
        ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/5">
              <div className="
                w-16 h-16
                bg-blue-400
                rounded-xl
                flex items-center justify-center
                mb-6
              ">
                <FaEnvelope className="w-8 h-8 text-white" />
              </div>
              <h3 className="
                text-white
                text-2xl font-bold
                mb-4
              ">
                Stay Updated
              </h3>
              <p className="text-white/70 text-sm">
                Get the latest articles delivered to your inbox
              </p>
            </div>
            
            <div className="md:w-3/5">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    flex-grow
                    px-6 py-4
                    backdrop-blur-xl bg-white/10
                    border border-white/20
                    rounded-xl
                    text-white
                    placeholder:text-white/40
                    focus:outline-none focus:border-blue-400
                    transition
                  "
                />
                <button
                  onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  className="
                    px-8 py-4
                    bg-yellow-400
                    text-black font-semibold
                    rounded-xl
                    hover:bg-yellow-500
                    transition-all duration-300
                  "
                >
                  Subscribe
                </button>
              </div>
              <p className="text-white/40 text-xs mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPACER */}
      <div className="h-16 sm:h-20"></div>
    </div>
  );
};

export default Blogs;