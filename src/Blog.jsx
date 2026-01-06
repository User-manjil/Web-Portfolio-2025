import React, { useEffect } from "react";
import BlogItem from "./reusable/BlogItem";
import { Link } from "react-router-dom";
import gsap from "gsap";
import blogs from "@/assets/blog";

const Blog = () => {
  useEffect(() => {
    gsap.fromTo(
      ".text-box",
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.4 }
    );
  }, []);

  return (
    <div className="text-box w-full h-full opacity-0 mb-5 max-w-[1920px] flex flex-col items-center">
      {blogs.map((blog, index) => (
        <Link
          key={blog.id}
          className="w-full"
          to={`/blog/${blog.id}`}
        >
          <BlogItem
            Title={blog.title}
            num={index + 1}
            date={blog.date}
          />
        </Link>
      ))}
    </div>
  );
};

export default Blog;
