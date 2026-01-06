import React from 'react'
import Title from './reusable/Title'
import Project from './reusable/Project'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className='w-full h-full'>
        <div className="flex justify-between">
            <div className="flex"> 
                <Title heading="#Work"  />
            </div>
            <div className="flex">
                <select name="sortWork" id="sortWork">
                    <option value="default"> default </option>
                    <option value="Oldest">Oldest</option>
                    <option value="Newest">Newest</option>
                    <option value="Best">Best</option>
                </select>
                
            </div>
            
        </div>
      <div className="flex w-full h-full mb-10">
        <Link className='w-full' to={'/work/1'}><Project  title="Mitho Achar Ecommerce"
            stack={["React", "Express", "Node"]}  /></Link>

      </div>
    </div>
  )
}

export default Work
