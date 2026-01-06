import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
import gsap from "gsap";
import blogs from "@/assets/blog";

const Blogdetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  useEffect(() => {
    gsap.fromTo(
      ".text-box",
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
  }, [id]);

  if (!blog) {
    return <div className="py-20 text-center">Blog not found</div>;
  }

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="text-box flex-col">
        <h1 className="text-4xl font-black">{blog.title}</h1>
        <div>Date: {blog.date}</div>
      </div>

      {/* Banner */}
      <div className="text-box w-full h-90 my-5">
        <img
          src={blog.banner}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-box flex-col my-15 px-2 lg:px-25">
        {blog.sections.map((section, index) => {
          if (section.type === "heading") {
            return (
              <Title key={index} heading={section.content} />
            );
          }

          if (section.type === "paragraph") {
            return (
              <p key={index} className="mb-5">
                {section.content}
              </p>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Blogdetail;
