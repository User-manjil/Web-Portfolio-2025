import React, { useEffect } from 'react'

import Home from './Home'
import Contact from './reusable/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import Work from './Work'
import ProjectDetail from './reusable/ProjectDetail'
import Blog from './Blog'
import Blogdetail from './reusable/Blogdetail'
import gsap from 'gsap'
import { ScrollTrigger , SplitText } from 'gsap/all'
const App = () => {
  const {pathname} = useLocation()
    gsap.registerPlugin(ScrollTrigger)  
    useEffect(()=>{
      window.scrollTo(0,0);
    },[pathname])

  return (
    <div  className="w-full bg-white  h-full px-4 lg:px-20">
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/work' element={ <Work />} />
        <Route path='/blog' element={ <Blog />} />
        <Route path='/work/:id' element={ <ProjectDetail />} />
        <Route path='/blog/:id' element={ <Blogdetail/>} />
        
        {/* <Contact /> */}
      </Routes>
    
    </div>
  )
}

export default App
