import React, { useEffect, useEffectEvent, useState } from 'react'

const Navbar = () => {
  const [msg, setMsg]= useState('copy mail')
  const copyComplete= async()=>{
    const mail  = 'workspace0mzl@gmail.com'

      try{
        navigator.Clipboard.writeText(mail)
        setMsg("✅")
        setTimeout(() => {
          setMsg('copy mail')
      
        }, 1000);
      }
      catch(err){
        console.log(err);
        
      }
    
    
    
  }
  return (
    <div className='flex justify-between dark:bg-black dark:text-white m-auto max-w-[1920px] items-center px-20 py-5'>
      <div className="flex font-bold text-x">Portfolio</div>
      <div className="flex">
        <ul className='flex gap-5 text-[14px]'>
        <li ><a href="#work">Work</a></li>
        <li href="#blog">Blog</li>
        <li href="#contact">Contact</li>
        </ul>
      </div>
      <div className="flex gap-5">
      <div onClick={copyComplete} 
       className={`flex dark:bg-white dark:text-black bg-blue-500 px-2 py-1 rounded-sm cursor-pointer text-white`}
        >
          {msg}
        </div>
      
      </div>
        </div>
  )
}

export default Navbar


