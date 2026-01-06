import React, { useEffect } from "react";
import Title from "./reusable/Title";
import Project from "./reusable/Project";
// import ScrollVelocity from "./Decorations/ScrollVelocity";
import reactPic from '../src/assets/gamebg.jpg'
import Contact from "./reusable/Contact";
import { gsap } from "gsap"
import { Link } from "react-router-dom";
import HoverPopup from "./reusable/Hoverpopup";
import Banner from "./reusable/Banner";
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
  useEffect(()=>{``
    gsap.fromTo('.text-box',
      {
        y:25,
        opacity:0

      },
      {
        y:0,
        opacity:1,
        ease:"power1.inOut",
        stagger:0.2,
        duration:0.5
      })
  },[])
 
  const availability = "Available for work";

  const aboutMe =
    " I’m a web developer who enjoys building clean, responsive, and visually engaging digital experiences. I love turning ideas into smooth, functional interfaces using modern tools like React and Tailwind CSS. Every project helps me grow, push my creativity, and sharpen my problem-solving skills. I’m focused on improving every day and creating web experiences that feel intuitive, thoughtful, and impactful.";
  return (
    <>
      <div className="flex  justify-center  m-auto flex-col max-w-[1920px] w-full    ">
        <div className="flex text-box opacity-0 rounded-sm  bg-blue-500 w-full h-110 relative">
          <Banner/>
          <div className="flex py-1 px-2 absolute bg-white rounded-lg right-0 m-2 gap-1 items-center">
            <div className="w-3 h-3 flex bg-green-400 rounded-full  animate-pulse"></div>
            <div className="flex text-black text-xs  ">{availability}</div>
          </div>
        </div>
        <div className="box flex h-full  flex-col gap-0 lg:leading-29 mb-3 sm:mb-10 2xl:mb-20 ">
          <div  className=" text-box opacity-0 flex lg:text-8xl text-4xl font-semibold">I am Manjil</div>
          <div className="  flex w-full max-w-[1920px] relative   font-bold text-blue-500">
            
            <h1 className="text-box opacity-0 absolute text-3xl sm:text-6xl md:text-7xl lg:text-[10vw]  xl:text-[10vw]  2xl:text-[8vw]">
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
        <div id="work" className=" flex-col mt-10 justify-center lg:mt-30">
          <Title heading="#Featured Work" />
          <Project
            title="Mitho Achar Ecommerce"
            stack={["React", "Express", "Node"]}
          />
          <div className="flex-col ">
          <Project title="Ai agent" stack={["Nextjs", "Node"]} />
          <Project title="Clothing Brand" stack={["Nextjs", "Node"]} />
          
          <HoverPopup img={reactPic} imgRef={reactPic} >
            <Project
            title="Allusion Creative Agency"
            stack={["Nextjs", "Node"]}
          />
          </HoverPopup>
          </div>
          <div className="flex mt-5 w-full justify-center">
            <Link to={'/work'} className="border-2  text-white py-2 px-5 rounded-sm  bg-blue-500 " >See more</Link >
          
          </div>
          
        </div>
        {/* section Skills  */}
        <div className="flex-col md:flex-row gap-10 my-10">
          <Title heading="#What I Know" />
          <div className=" mt-10 flex-col gap-5 ">
            <Title heading="#Skills" />
            <div className=" grid grid-cols-2 md:grid-cols-4 px-10  gap-x-10  gap-y-2 m-auto justify-center ">
              {skills.map((e) => {
                return (
                  <div className="flex px-2 py-1 border rounded-sm text-center items-center justify-around hover:text-white hover:border-transparent hover:bg-blue-500 border-black">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex mt-10 flex-col gap-5 ">
            <Title heading="#Tools" />
            <div className=" grid grid-cols-2 md:grid-cols-4   gap-x-10  gap-y-2 m-auto justify-center ">
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
        <div className="flex flex-col md:flex mt-10">
          <Title heading="#About me" />
          <div className="md:flex-row flex w-full gap-5 ">
            <div className="flex w-full h-90 mt-10 bg-blue-500"> </div>
            <div className="flex flex-col items-center   w-full mt-10  lg:py-5 ">
              <p className="lg:text-lg font-medium w-full  ">{aboutMe}</p>

              <div className="flex gap-10 mt-2">
                <button  className="bg-blue-500 text-white px-4 py-2 rounded-sm justify-center items-center  mt-5 lg:mt-2 text-center ">
                  <a download={true} href={reactPic}>Resume</a>
                
              </button>
              <Link to='/blog' >
              <button   className="  text-blue-500 px-4 cursor-pointer border py-3 border-blue-500 rounded-sm justify-center items-center  mt-5 lg:mt-2 text-center ">
                want to know me?
              </button>
              </Link>
              
              </div>
              
            </div>
          </div>
        </div>
       {/* Home Contact Section */}
       <Contact />
       
      </div>
    </>
  );
};

export default Home;
