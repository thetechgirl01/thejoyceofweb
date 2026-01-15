import React, { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiCalendar, HiClock, HiSearch } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Blogs = ({ blogs = [] }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const postRefs = useRef([]);

  const categories = [
    { name: "All", count: blogs.length },
    { name: "Web Development", count: blogs.filter(b => b.category === "Web Development").length },
    { name: "UI/UX Design", count: blogs.filter(b => b.category === "UI/UX Design").length },
    { name: "Technology", count: blogs.filter(b => b.category === "Technology").length },
    { name: "Performance", count: blogs.filter(b => b.category === "Performance").length },
    { name: "Business", count: blogs.filter(b => b.category === "Business").length },
  ];

  const filteredPosts = blogs.filter(blog => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const headerText = blog.header?.[0]?.children?.[0]?.text || "";
    const matchesSearch =
      searchQuery === "" ||
      (blog.blogTitle?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
      headerText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    gsap.fromTo(
      postRefs.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out" }
    );
  }, [filteredPosts]);

  const formatDate = dateString => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const getImageUrl = blog => {
    return blog.coverImg?.url
      ? `http://localhost:1337${blog.coverImg.url}`
      : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
  };

  return (
    <div className="min-h-screen py-16 bg-gray-900">
      <header className="px-6 max-w-7xl mx-auto mb-12">
        <h1 className="text-white text-4xl font-bold">Read our daily blogs on everything web</h1>
        <p className="text-white/70 mt-4 max-w-2xl">
          Articles on web development, design, technology, and business.
        </p>
      </header>

      <section className="px-6 max-w-4xl mx-auto mb-8">
        <div className="relative">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
          />
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto mb-8 flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === cat.name ? "bg-yellow-400 text-black" : "bg-white/10 text-white"
            }`}
          >
            {cat.name} ({cat.count})
          </button>
        ))}
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((blog, i) => {
              const headerText = blog.header?.[0]?.children?.[0]?.text || "No description available";
              return (
                <Link to={`/blog/${blog.slug}`} key={blog.slug}> {/* lowercase slug already set in App.jsx */}
                  <article
                    ref={el => (postRefs.current[i] = el)}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 w-full overflow-hidden">
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

                      <button className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-yellow-400 hover:text-black transition flex items-center justify-center">
                        Read Article <HiArrowRight className="inline ml-2" />
                      </button>
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

      <section className="px-6 max-w-4xl mx-auto mt-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <FaEnvelope className="mx-auto text-3xl text-yellow-400 mb-4" />
          <h3 className="text-white text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-white/60 mb-6">Get new articles straight to your inbox.</p>
          <input
            placeholder="Email address"
            className="w-full px-6 py-4 bg-white/10 rounded-xl text-white mb-4"
          />
          <button className="px-8 py-4 bg-yellow-400 rounded-xl font-semibold">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
