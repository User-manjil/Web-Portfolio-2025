import React from "react";
import Title from "./reusable/Title";
import Project from "./reusable/Project";
import ScrollVelocity from "./Decorations/ScrollVelocity";
// import Banner from './reusable/Banner'
// import TextPressure from './reusable/Textpressure'
// import ScrollVelocity from './Decorations/ScrollVelocity.jsx'

const Home = () => {
  const velocity = 15;

  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PYTHON",
    "REACT",
    "MONGODB",
    "MYSQL",
  ];
  const tools = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "After Effects",
    "Git & Github"
  ];
 
  const availability = "Available for work";
  const aboutMe =
    " I’m a web developer who enjoys building clean, responsive, and visually engaging digital experiences. I love turning ideas into smooth, functional interfaces using modern tools like React and Tailwind CSS. Every project helps me grow, push my creativity, and sharpen my problem-solving skills. I’m focused on improving every day and creating web experiences that feel intuitive, thoughtful, and impactful.";
  return (
    <>
      <div className="flex  justify-center  m-auto flex-col max-w-[1920px] px-20">
        <div className="flex  bg-blue-500 w-full h-110 relative">
          <div className="flex py-1 px-2 absolute bg-white rounded-lg right-0 m-2 gap-1 items-center">
            <div className="w-3 h-3 flex bg-green-400 rounded-full  animate-pulse"></div>
            <div className="flex text-black text-xs  ">{availability}</div>
          </div>
        </div>
        <div className="flex flex-col gap-0 leading-29 ">
          <div className="flex text-8xl font-semibold">I am Manjil</div>
          <div className="flex w-full max-w-[1920px] relative  font-bold text-blue-500">
            {" "}
            <h1 className=" absolutetext-5xl md:text-7xl lg:text-[160px]  2xl:text-[10vw]">
              WEB DEVELOPER
            </h1>
          </div>
        </div>
        {/* <div className="w-full  justify-center  h-full flex ">
            <ScrollVelocity
                texts={['MANJIL✦ ', '✦ ARYAL']} 
                velocity={velocity} 
                className="custom-scroll-text"
              />
        </div> */}
        {/* //section Featured work  */}
        <div id="work" className="flex flex-col mt-10">
          <Title heading="#Featured Work" />
          <Project
            title="Mitho Achar Ecommerce"
            stack={["React", "Express", "Node"]}
          />
          <Project title="Ai agent" stack={["Nextjs", "Node"]} />
          <Project title="Clothing Brand" stack={["Nextjs", "Node"]} />
          <Project
            title="Allusion Creative Agency"
            stack={["Nextjs", "Node"]}
          />
        </div>
        {/* section Skills  */}
        <div className="flex gap-10 my-10">
          <Title heading="#What I Know" />
          <div className="flex mt-10 flex-col ">
            <Title heading="#Skills" />
            <div className=" grid grid-cols-4  gap-x-10  gap-y-2 m-auto justify-center ">
              {skills.map((e) => {
                return (
                  <div className="flex px-2 py-1 border rounded-sm text-center items-center justify-around hover:text-white hover:border-transparent hover:bg-blue-500 border-black">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex mt-10 flex-col ">
            <Title heading="#Tools" />
            <div className=" grid grid-cols-4  gap-x-10  gap-y-2 m-auto justify-center ">
              {tools.map((e) => {
                return (
                  <div className="flex px-2 py-1 border rounded-sm text-center items-center justify-around hover:text-white hover:border-transparent hover:bg-blue-500 border-black">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* About me sections */}
        <div className="flex flex-col mt-10">
          <Title heading="#About me" />
          <div className="flex w-full ">
            <div className="flex w-full h-90 mt-10 bg-blue-500"> </div>
            <div className="flex flex-col w-1/2 p-10 ">
              <p className="text-xl  ">{aboutMe}</p>
              <button className="bg-blue-500 text-white px-1 py-2 rounded-sm justify-center  w-25 mt-2 text-center">
                Resume
              </button>
            </div>
          </div>
        </div>
       
       
      </div>
    </>
  );
};

export default Home;
