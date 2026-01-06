import React from 'react'

const Title = (props) => {
  return (
    <div className='flex text-lg md:text-2xl wrap-none font-bold '>
        <h1 className='flex-nowrap'>{props.heading}</h1>
      
    </div>
  )
}

export default Title
