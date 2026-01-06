import React, { useState } from 'react'

const ToTop = () => {
    // const [topMenu, setTopMenu]= useState(false)
    
  return (
    <div className={`  transition-all ease-linear`} >
      <div className="flex bg-white text-lg animate-bounce   text-blue-500 w-8 h-8 justify-center items-center rounded-full    " ><a href="#home"> <i className="fa-solid fa-arrow-up"></i></a></div>
    </div>
  )
}

export default ToTop
