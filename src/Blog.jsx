import React, { useEffect } from 'react'
import BlogItem from './reusable/BlogItem'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Blog = () => {
  const blogItem =[
    {
      id:1,
      Title:"Intern of a web Dev",
      date :"2025.12.26"
    },
    {
      id:2,
      Title:"Travelling to Chitwan",
      date :"2025.10.26"
    },
    {
      id:3,
      Title:"Second Hackathon",
      date :"2026.12.26"
    },
  ]
  useEffect(()=>{
    gsap.fromTo('.text-box',
      {
        y:5,
        opacity : 0,
      },
      {
        y:0,
        opacity:1,
        stagger:0.4
      }
    )
  },[])
  return (
    <div className=' text-box w-full h-full opacity-0   mb-5  max-w-[1920px] justify-center flex flex-col items-center' >
      {
        blogItem.map(e=><Link className='w-full' to={`/blog/${e.id}`}><BlogItem Title={e.Title} num={e.id} date={e.date}  /></Link > )
      }
      
      
    </div>
  )
}

export default Blog
