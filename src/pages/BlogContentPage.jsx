import React from "react";
import { useParams, Link } from "react-router-dom";
import { HiCalendar, HiClock } from "react-icons/hi";

const BlogContentPage = ({ blogs = [] }) => {
  const { id } = useParams();

  // Find the blog from Strapi data
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen p-10 bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <Link to="/blogs" className="text-yellow-400 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const blogAttrs = blog.attributes;

  const imageUrl = blogAttrs?.coverImg?.data?.attributes?.url
    ? `http://localhost:1337${blogAttrs.coverImg.data.attributes.url}`
    : "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";

  const formatDate = (dateString) => {
    if (!dateString) return "No date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 max-w-4xl mx-auto">
      {/* Blog Image */}
      <img src={imageUrl} alt={blogAttrs?.blogTitle} className="w-full rounded-xl mb-6" />

      {/* Category Tag */}
      <span className="inline-block mb-3 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
        {blogAttrs?.category || "Uncategorized"}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blogAttrs?.blogTitle}</h1>

      {/* Meta Info */}
      <div className="flex gap-4 text-sm text-white/60 mb-6">
        <span className="flex items-center gap-1">
          <HiCalendar /> {formatDate(blogAttrs?.date)}
        </span>
        <span className="flex items-center gap-1">
          <HiClock /> {blogAttrs?.readTime || "?"} min read
        </span>
      </div>

      {/* Excerpt */}
      <p className="text-white/70 mb-6">{blogAttrs?.header?.[0]?.children?.[0]?.text || "No description available"}</p>

      {/* Full Content */}
      <div className="text-white/80 text-lg leading-relaxed">
        {blogAttrs?.content?.map((block, idx) => (
          <p key={idx} className="mb-4">
            {block.children?.map((child) => child.text).join(" ")}
          </p>
        )) || "No content available"}
      </div>

      {/* Back Button */}
      <Link to="/blogs" className="mt-6 inline-block text-yellow-400 underline">
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogContentPage;
