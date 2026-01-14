import React, { useState, useEffect, useRef } from "react";
import { HiArrowRight, HiCalendar, HiClock, HiSearch } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Blogs = ({blogs}) => {
  console.log("Blogs")
  console.log(blogs)
  const [activeCategory, setActiveCategory] = useState("All"); // category filter
  const [searchQuery, setSearchQuery] = useState(""); // search filter
  const postRefs = useRef([]);

  // Categories array
  const categories = [
    { name: "All", count: 24 },
    { name: "Web Development", count: 8 },
    { name: "UI/UX Design", count: 5 },
    { name: "Technology", count: 6 },
    { name: "Performance", count: 3 },
    { name: "Business", count: 2 },
  ];

  // Blog posts
  const allBlogPosts = [
    {
      id: 1,
      title: "Blog 1",
      excerpt: "Learn essential React tips and tricks to build your first app.",
      category: "Web Development",
      date: "Jan 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Blog 2",
      excerpt: "Learn why website performance can make or break your product.",
      category: "Performance",
      date: "Feb 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091215366-7b6ff5e2f1c6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Blog 3",
      excerpt: "Improve your user interface and user experience design skills.",
      category: "UI/UX Design",
      date: "Mar 20, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1587614382346-4ecf59d62d68?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "4",
      excerpt: "How AI is shaping the future of technology and web development.",
      category: "Technology",
      date: "Apr 15, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581091221430-6d5f568805e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Blog 5",
      excerpt: "Learn key business strategies for growing your startup.",
      category: "Business",
      date: "May 1, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581091012184-1d4d94b87a68?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Filter posts by category + search
  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // GSAP animation
  useEffect(() => {
    gsap.fromTo(
      postRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [filteredPosts]);

  return (
    <div className="min-h-screen py-16 bg-gray-900">
      {/* HEADER */}
      <header className="px-6 max-w-7xl mx-auto mb-12">
        <h1 className="text-white text-4xl font-bold">
          Read our daily blogs on everything web
        </h1>
        <p className="text-white/70 mt-4 max-w-2xl">
          Articles on web development, design, technology, and business.
        </p>
      </header>

      {/* SEARCH */}
      <section className="px-6 max-w-4xl mx-auto mb-8">
        <div className="relative">
          <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white"
          />
        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="px-6 max-w-7xl mx-auto mb-8 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === cat.name
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </section>

      {/* BLOG GRID */}
      <section className="px-6 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.data.map((post, i) => (
              <Link to={`/blog/${post.id}`} key={post.id}>
                <article
                  ref={(el) => (postRefs.current[i] = el)}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={'https://localhost:1337${post.attributes.coverImg.data.attribytes.url}'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Category tag on top of card */}
                  <div className="p-6">
                    <span className="inline-block mb-3 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                      {post.category}
                    </span>

                    <div className="flex gap-4 text-sm text-white/60 mb-3">
                      <span className="flex items-center gap-1">
                        <HiCalendar /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiClock /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">
                      {post.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>

                    <button className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-yellow-400 hover:text-black transition">
                      Read Article <HiArrowRight className="inline ml-2" />
                    </button>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-white/70">
            <h3 className="text-xl font-bold mb-2">No posts available</h3>
            <p>Try selecting a different category.</p>
          </div>
        )}
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 max-w-4xl mx-auto mt-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <FaEnvelope className="mx-auto text-3xl text-yellow-400 mb-4" />
          <h3 className="text-white text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-white/60 mb-6">
            Get new articles straight to your inbox.
          </p>
          <input
            placeholder="Email address"
            className="w-full px-6 py-4 bg-white/10 rounded-xl text-white mb-4"
          />
          <button className="px-8 py-4 bg-yellow-400 rounded-xl font-semibold">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
{/*/
  
  <Link to={`/blog/${post.id}`} key={post.id}>
                <article
                  ref={(el) => (postRefs.current[i] = el)}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

              
                  <div className="p-6">
                    <span className="inline-block mb-3 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
                      {post.category}
                    </span>

                    <div className="flex gap-4 text-sm text-white/60 mb-3">
                      <span className="flex items-center gap-1">
                        <HiCalendar /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiClock /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">
                      {post.title}
                    </h3>

                    <p className="text-white/70 text-sm mb-4">{post.excerpt}</p>

                    <button className="w-full py-3 bg-white/10 rounded-xl text-white hover:bg-yellow-400 hover:text-black transition">
                      Read Article <HiArrowRight className="inline ml-2" />
                    </button>
                  </div>
                </article>
              </Link>
             */}
             