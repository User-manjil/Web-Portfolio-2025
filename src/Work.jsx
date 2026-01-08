import React, { useState } from "react";
import Title from "./reusable/Title";
import Project from "./reusable/Project";
import { Link } from "react-router-dom";
import HoverPopup from "./reusable/Hoverpopup";
import { projects } from "./assets";
// import projects from "@/assets/index.js";

const Work = () => {
  const [sortBy, setSortBy] = useState("default");
 
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortBy === "Newest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "Oldest") {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortBy === "Best") {
      return (b.rating || 0) - (a.rating || 0);
    }
    return 0;
  });

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Title heading="#Work" />

        <select
          name="sortWork"
          id="sortWork"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="Oldest">Oldest</option>
          <option value="Newest">Newest</option>
          <option value="Best">Best</option>
        </select>
      </div>

      {/* Projects */}
      <div className="flex flex-col w-full h-full mb-10">
        {sortedProjects.map((project) => (
          <HoverPopup
            key={project.id}
            img={project.banner}
            imgRef={project.banner}
          >
            <Link className="w-full" to={`/work/${project.id}`}>
              <Project
                title={project.title}
                stack={project.stack}
              />
            </Link>
          </HoverPopup>
        ))}
      </div>
    </div>
  );
};

export default Work;
