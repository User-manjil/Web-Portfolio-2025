import {react,useEffect} from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
const BlogItem = (props) => {
   useEffect(()=>{
    gsap.fromTo('.text-box',
      {
        y:5,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger : 0.5,

      })
  })
  return (
    
    <div className='w-full text-box h-full flex px-2 lg:px-10 py-5 items-center justify-between border-b-2 border-black before:bg-blue-500 before:w-full before:absolute relative before:h-full before:scale-x-0 hover:before:scale-x-100 before:origin-left before:-z-10 before:content[""] z-1 before:left-0 before:transition-transform before:duration-300  hover:text-white hover:border-b-0 '>
      <div className="flex text-2xl lg:text-6xl font-black">{props.num}</div>
      <div className="flex text-xl lg:text-4xl font-bold">{props.Title}</div>
      <div className="flex">{props.date}</div>
    </div>
  )
}

export default BlogItem
