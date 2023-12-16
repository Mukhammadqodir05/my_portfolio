import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';

const Resources = () => {

  useEffect(() => {
    gsap.fromTo(
      ".loading-page",
      { opacity: 1 },
      { opacity: 0, display: "none", duration: 1.5, delay: 3.5 }
    );
    gsap.fromTo(
      ".logo-namenav",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 1.5 }
    );
  }, []);

  return (
    <main className='CV flex md:px-40 flex-shrink-0 justify-between  h-screen w-full overflow-hidden '>
       <NavLink className="z-10 p-6 flex  justify-between " to='/home'>
            <div className='logo-namenav text-3xl pr-2'>&lt;/</div>  
            <svg id="nav_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"/>
            </svg>
            <div className='logo-namenav text-3xl '>&gt;</div> 
        </NavLink> 

     <div className=' hidden md:flex justify-end w-full md:pr-14 md:p-2'>
      <ul className='flex flex-shrink-0 space-x-7  '>
          <li><NavLink to="/home">Home</NavLink></li>
          <li>Download CV </li>
      </ul>
     </div>
    </main>
  )
}
 export default Resources