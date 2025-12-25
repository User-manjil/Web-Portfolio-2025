import React from 'react'

const Project = (props) => {
    const stack=props.stack
  return (
    <div className='flex px-20 w-full max-w-[1920px] relative h-20 overflow-hidden hover:bg-blue-500 hover:border-0 hover:text-white   border-b-2 border-black justify-start items-center  gap-10 '>
      <div className='bg-blue-500 w-full h-full z-[-1] hover:scale-x-100 absolute'> </div>
      <p>{props.title}</p>
      {stack.map((e)=>{
        return <span className='bg-blue-500 p-2 rounded-xl text-white ' key={e} >{e}</span>
      })}
      
    </div>
  )
}

export default Project
