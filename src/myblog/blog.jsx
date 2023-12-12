import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Blog = () => {
  return (
    <main className='CV flex flex-shrink-0 justify-between  h-screen w-full '>
     
     <div className='hidden md:flex justify-end w-full md:pr-14 md:p-2'>
      <ul className='flex flex-shrink-0 space-x-7  '>
          <li><Link to="/home">Home</Link></li>
          <li>Blog</li>
          <li>Download CV </li>
      </ul>
     </div>
    </main>
  )
}
 export default Blog