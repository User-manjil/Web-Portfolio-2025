import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import Title from "./Title";
import { projects } from "@/assets/index.js";
// import projects from "@/assets"; 


const ProjectDetail = () => {
  const { id } = useParams();

  // find project by slug/id
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    gsap.fromTo(
      ".text-box",
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
  }, [id]);

  if (!project) {
    return <div className="py-20 text-center">Project not found</div>;
  }

  return (
    <div className="w-full h-full py-10 flex flex-col-reverse md:flex-row gap-10">
      {/* MAIN CONTENT */}
      <div className="flex-col w-full">
        {/* Header */}
        <div className="text-box">
          <Title heading={project.title} />
          <p>{project.tagline}</p>
        </div>

        {/* Banner */}
        <div className="text-box mt-10">
          <div className="flex border border-black justify-center items-center h-70 w-full">
            <img
              className="h-full object-cover"
              src={project.banner}
              alt={project.title}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="flex-col mt-5">
          {project.sections.map((section, index) => (
            <div key={index} className="text-box mb-10">
              <Title heading={section.heading} />
              <p className="mb-5">{section.content}</p>

              {section.image && (
                <div className="flex h-70 w-full mb-5">
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="flex-col bg-blue-500 text-white lg:w-1/6 h-fit py-10 px-5 gap-10 lg:sticky top-5 rounded-xs">
        <SidebarItem label="Industry" value={project.sidebar.industry} />
        <SidebarItem label="Category" value={project.sidebar.category} />
        <SidebarItem label="Timeline" value={project.sidebar.timeline} />

        {/* Social links */}
        <div className="mt-10 flex justify-center">
          <ul className="flex gap-6 text-2xl text-white">
            <li>
              <a target="_blank" href="https://www.facebook.com/manjil.aryal.307027/" rel="noreferrer">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/ma_manjil/" rel="noreferrer">
                <i className="fa-brands fa-square-instagram" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/manzeel-aryal/" rel="noreferrer">
                <i className="fa-brands fa-linkedin" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/User-manjil" rel="noreferrer">
                <i className="fa-brands fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/* Sidebar reusable item */
const SidebarItem = ({ label, value }) => (
  <div className="flex-col border-b-2 border-white pb-3 mb-5">
    <h2 className="text-white">{label}</h2>
    <p className="font-bold text-xl">{value}</p>
  </div>
);

export default ProjectDetail;
