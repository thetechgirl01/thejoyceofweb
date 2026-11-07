import React, { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiCalendar, HiClock, HiSearch } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Blogs = ({ blogs = [] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const postRefs = useRef([]);

  // Categories with dynamic counts
  const categories = [
    { name: "All", count: blogs.length },
    { name: "Web Development", count: blogs.filter(b => b.category === "Web Development").length },
    { name: "UI/UX Design", count: blogs.filter(b => b.category === "UI/UX Design").length },
    { name: "Technology", count: blogs.filter(b => b.category === "Technology").length },
    { name: "Performance", count: blogs.filter(b => b.category === "Performance").length },
    { name: "Business", count: blogs.filter(b => b.category === "Business").length },
  ];

  // Filter blogs by category and search
  const filteredPosts = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const headerText = blog.header?.[0]?.children?.[0]?.text || "";
    const matchesSearch =
      searchQuery === "" ||
      (blog.blogTitle?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      headerText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // GSAP animation
  useEffect(() => {
    gsap.fromTo(
      postRefs.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }
    );
  }, [filteredPosts]);

  // Format date
  const formatDate = dateString => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Get cover image
  const getImageUrl = blog => {
    return blog.coverImg?.url
      ? `http://localhost:1337${blog.coverImg.url}`
      : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen">
      
      {/* HEADER SECTION - Same as Hero.jsx */}
      <div className="py-10 sm:py-1">
        <section className="bg flex flex-col items-start justify-start px-4 md:px-24 py-8 relative">
          <div className="max-w-6xl w-full p-6 sm:p-8 md:p-16 pt-24 md:pt-32">
            <div className="flex flex-col items-start text-left">
              
              <h1 className="
                text-white font-bold leading-tight
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                mb-6
              ">
                Read our daily blogs on everything web
              </h1>
              
              <p className="
                text-white/70
                text-base sm:text-lg md:text-xl
                leading-relaxed max-w-3xl mb-12
              ">
                Articles on web development, design, technology, and business.
              </p>

            </div>
          </div>
        </section>
      </div>

      {/* REST OF THE CONTENT - Full width */}
      <div className="bg-gray-900 py-20 mx-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SEARCH */}
        <section className="mb-8">
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              type="search"
              aria-label="Search articles"
              placeholder="Search articles..."
              className="w-full pl-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
            />
          </div>
        </section>

        {/* CATEGORY BUTTONS */}
        <section className="mb-8 flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-2 rounded-full text-sm  ${
                activeCategory === cat.name ? " text-gray-400 " : " text-white hover:text-yellow-300"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </section>

        {/* BLOG GRID */}
        <section>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((blog, i) => {
                const headerText = blog.header?.[0]?.children?.[0]?.text || "No description available";
                return (
                  <Link to={`/blog/${blog.id}`} key={blog.id}>
                    <article
                      ref={el => (postRefs.current[i] = el)}
                      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="h1/28 w-full overflow-hidden">
                        <img
                          src={getImageUrl(blog)}
                          alt={blog.blogTitle || "Blog post"}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <span className="inline-block mb-3 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                          {blog.category || "Uncategorized"}
                        </span>

                        <div className="flex gap-4 text-sm text-white/60 mb-3">
                          <span className="flex items-center gap-1">
                            <HiCalendar /> {formatDate(blog.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <HiClock /> {blog.readTime || "?"} min read
                          </span>
                        </div>

                        <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{blog.blogTitle}</h3>

                        <p className="text-white/70 text-sm mb-4 line-clamp-3">{headerText}</p>

                        <span className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-yellow-400 hover:text-black transition flex items-center justify-center">
                          Read Article <HiArrowRight className="inline ml-2" />
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 text-white/70">
              <h3 className="text-xl font-bold mb-2">No posts available</h3>
              <p>Try selecting a different category or search term.</p>
            </div>
          )}
        </section>

        
        {/* NEWSLETTER */}
        <section className="mt-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <FaEnvelope className="mx-auto text-3xl text-yellow-400 mb-4" />
            <h3 className="text-white text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-white/60 mb-6">Get new articles straight to your inbox.</p>
            <input
              type="email"
              aria-label="Newsletter email address"
              aria-describedby="newsletter-status"
              disabled
              placeholder="Email address"
              className="w-full px-6 py-4 bg-white/10 rounded-xl text-white mb-4"
            />
            <button disabled className="px-8 py-4 bg-yellow-400 rounded-xl font-semibold text-black disabled:opacity-70">Subscribe</button>
            <p id="newsletter-status" className="mt-4 text-white/80">Newsletter subscriptions are currently unavailable. No email address is collected.</p>
          </div>
        </section>
        </div>


      </div>
    </div>
  );
};

export default Blogs;