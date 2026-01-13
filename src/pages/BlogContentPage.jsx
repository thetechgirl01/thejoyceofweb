import React from "react";
import { useParams, Link } from "react-router-dom";
import { HiCalendar, HiClock } from "react-icons/hi";

// Your blog posts array (same as in Blogs.jsx)
const allBlogPosts = [
  {
    id: 1,
    title: "React Tips for Beginners",
    excerpt: "Learn essential React tips and tricks to build your first app.",
    category: "Web Development",
    date: "Jan 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    content:
      "Here is the full content of the React Tips for Beginners post. You can write your detailed article here, including paragraphs, code snippets, images, etc.",
  },
  {
    id: 2,
    title: "Why Performance Matters",
    excerpt: "Learn why website performance can make or break your product.",
    category: "Performance",
    date: "Feb 12, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1581091215366-7b6ff5e2f1c6?auto=format&fit=crop&w=800&q=80",
    content:
      "Here is the full content of the 'Why Performance Matters' blog. Discuss techniques, best practices, and examples.",
  },
  {
    id: 3,
    title: "UI/UX Design Tips",
    excerpt: "Improve your user interface and user experience design skills.",
    category: "UI/UX Design",
    date: "Mar 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1587614382346-4ecf59d62d68?auto=format&fit=crop&w=800&q=80",
    content: "Full content of UI/UX Design Tips post here.",
  },
  {
    id: 4,
    title: "AI in Technology",
    excerpt: "How AI is shaping the future of technology and web development.",
    category: "Technology",
    date: "Apr 15, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1581091221430-6d5f568805e7?auto=format&fit=crop&w=800&q=80",
    content: "Full content of AI in Technology post here.",
  },
  {
    id: 5,
    title: "Business Strategies for Startups",
    excerpt: "Learn key business strategies for growing your startup.",
    category: "Business",
    date: "May 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581091012184-1d4d94b87a68?auto=format&fit=crop&w=800&q=80",
    content: "Full content of Business Strategies for Startups post here.",
  },
];

const BlogContentPage = () => {
  const { id } = useParams(); // get ID from URL
  const post = allBlogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen p-10 bg-gray-900 text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
        <Link to="/blogs" className="text-yellow-400 underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 max-w-4xl mx-auto">
      {/* Blog Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-6"
      />

      {/* Category Tag */}
      <span className="inline-block mb-3 px-3 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded-full">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {/* Meta Info */}
      <div className="flex gap-4 text-sm text-white/60 mb-6">
        <span className="flex items-center gap-1">
          <HiCalendar /> {post.date}
        </span>
        <span className="flex items-center gap-1">
          <HiClock /> {post.readTime}
        </span>
      </div>

      {/* Excerpt */}
      <p className="text-white/70 mb-6">{post.excerpt}</p>

      {/* Full Content */}
      <div className="text-white/80 text-lg leading-relaxed">{post.content}</div>

      {/* Back Button */}
      <Link
        to="/blogs"
        className="mt-6 inline-block text-yellow-400 underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
};

export default BlogContentPage;
