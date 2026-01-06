
import ScrollVelocity from '@/Decorations/ScrollVelocity'
import React from 'react'
import { Link } from 'react-router-dom';
import ToTop from './ToTop';

const Footer = () => {
  const velocity = 15;
  return (
    <div className='w-full max-w-full justify-center lg:h-90 lg:flex bg-blue-500  relative overflow-hidden z-10'>
       <div className="  lg:flex 6xl sm:7xl md:text-8xl lg:text-9xl py-1.5 px-10 lg:p-20   font-bold text-white  ">
        Manjil Aryal
        </div>
      <div className="flex-col py-20 ">
       

        {/* // Quick  Link  */}
        <div className="flex justify-center " >
              <ul className='flex gap-20 text-white'>
                <li><Link to={'/work'}>Work</Link>
                </li>
                <li><Link to={'/blog'}>Blog</Link>
                </li>
                <li><Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
        </div>

        {/* Social Link */}
        <div className="flex mt-10 justify-center">
          <ul className='flex gap-5 lg:gap-10 text-xl lg:text-2xl justify-center text-white'>
            <li><a target='_blank' href="https://www.facebook.com/manjil.aryal.307027/"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a target='_blank' href="https://www.instagram.com/ma_manjil/"><i className="fa-brands fa-square-instagram"></i></a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/manzeel-aryal/"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a target='_blank' href="https://github.com/User-manjil"><i className="fa-brands fa-github"></i></a></li>
            <li><ToTop /></li>
            
          </ul>
        </div>

      </div>
      
      
      <div className="flex w-full absolute h-1 bg-white bottom-10 lg:bottom-30 mx-20   "></div>
    
    </div>
  )
}

export default Footer
