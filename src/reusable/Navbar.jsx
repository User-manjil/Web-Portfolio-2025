import React, { useEffect, useEffectEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [msg, setMsg]= useState('Email')
  const [menu  ,setMenu] = useState(false)

  const copyComplete= async() =>{
    const mail  = 'workspace0mzl@gmail.com'
    await navigator.clipboard.writeText(mail)
    setMsg(`Copied✅`)
    setTimeout(() => {
      setMsg('Email')
    }, 2000);
     
    
    
    
  }
  return (
    <div className='flex justify-between dark:bg-black transition-all ease-in   sm:m-auto max-w-[1920px]  px-4 lg:px-20 py-5 z-10' id='home'>
      <div className="flex font-bold text-x">
        <Link to={'/'} > Portfolio</Link>
       
        </div>
        

      <div className={` ${menu?'flex':'hidden'} sm:flex`}>
        <ul className=' flex-col flex sm:flex-row  py-20 sm:py-0 sm:mt-0 items-center justify-center  gap-5  text-[14px]'>
        <li ><Link onClick={()=>setMenu(!menu)}  to={'/work'}>Work</Link></li>
        <li ><Link onClick={()=>setMenu(!menu)} to={'/blog'}>Blog</Link></li>
        <li ><Link onClick={()=>setMenu(!menu)} to={'/Contact'}>Contact</Link></li>
        </ul>
      </div>
      
      <div className="flex gap-5">
        <div className="flex  gap-3">
         
          <div onClick={()=>setMenu(!menu)} className="flex mt-2 sm:hidden">
              {!menu ? <i className="fa-solid fa-bars"></i>:<i className="fa-solid fa-x"></i>}
                </div>
          </div>
           <div onClick={copyComplete} 
          className={`flex w-25 h-8  bg-blue-500 px-4 py-1 rounded-sm cursor-pointer text-white justify-center text-center transition-all`}
            >{msg}</div>


        </div>
      
        </div>
  )
}

export default Navbar


