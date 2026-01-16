import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:1337";

const WorkContentPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(
      `${API_URL}/api/projects?filters[slug][$eq]=${slug}&populate=*`
    )
      .then(res => res.json())
      .then(res => {
        const item = res.data[0];
        if (!item) return;

        setProject({
          title: item.attributes.title,
          description: item.attributes.description,
          excerpt: item.attributes.excerpt,
          images: item.attributes.images?.data?.map(
            img => `${API_URL}${img.attributes.url}`
          ),
          content: item.attributes.content,
        });
      });
  }, [slug]);

  if (!project) return <div className="text-white p-20">Loading…</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white py-24 px-6">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="text-gray-400 mt-4 max-w-3xl">
          {project.excerpt}
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-6">
        {project.images?.[0] && (
          <img
            src={project.images[0]}
            alt=""
            className="rounded-xl mb-16"
          />
        )}

        <div className="prose prose-lg max-w-none">
          {project.content}
        </div>
      </div>
    </div>
  );
};

export default WorkContentPage;
