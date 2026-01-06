import {React , useEffect} from 'react'
import gsap from 'gsap'
const Project = (props) => {
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
    const stack=props.stack
  return (
    <div className=' lg:flex text-box gap-5 h-auto p-5  w-full max-w-[1920px] items-center border-b-2 border-black   '>
      <div className=' w-full '><p className='text-center justify-center'>{props.title}</p> </div>
      <div className="flex w-full h-1/2 justify-center gap-10 mt-5">
         {stack.map((e)=>{
        return <span className='bg-blue-500 p-2 rounded-sm text-white ' key={e} >{e}</span>
      })}

      </div>
     
      
    </div>
  )
}

export default Project
