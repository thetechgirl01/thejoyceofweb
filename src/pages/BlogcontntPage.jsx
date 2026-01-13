import React from "react";
import { HiCalendar, HiClock, HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const BlogContentPage = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-white">

        {/* Back button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-white/70 hover:text-yellow-400 mb-6"
        >
          <HiArrowLeft /> Back to blogs
        </Link>

        {/* Category */}
        <span className="inline-block mb-4 px-4 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm">
          Technology
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          The Future of Web Development in 2024
        </h1>

        {/* Meta */}
        <div className="flex gap-6 text-white/60 text-sm mb-8">
          <div className="flex items-center gap-1">
            <HiCalendar /> Mar 15, 2024
          </div>
          <div className="flex items-center gap-1">
            <HiClock /> 5 min read
          </div>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden mb-10">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="Blog Hero"
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* Blog content */}
        <article className="prose prose-invert max-w-none text-white/80 leading-relaxed">
          <p>
            Web development is evolving faster than ever. Modern frameworks, AI-assisted tools, 
            and performance-focused design are changing how developers build applications.
          </p>
          <p>
            In 2024, we are seeing:
          </p>
          <ul>
            <li>More component-driven architecture</li>
            <li>Edge computing adoption</li>
            <li>Strong focus on accessibility</li>
            <li>Better developer experience</li>
          </ul>
          <p>
            If you want to stay relevant, mastering these trends is no longer optional.
          </p>
        </article>

      </div>
    </div>
  );
};

export default BlogContentPage;
