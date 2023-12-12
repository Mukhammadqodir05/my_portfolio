import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {  NavLink } from 'react-router-dom';
import { FaBars, FaTimes  } from 'react-icons/fa';
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'
import { FiDownloadCloud } from "react-icons/fi";

const Nav_bar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const[is_hoverOpen, setHoverOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);

  return (
    <main name='top' className='navbar second_color md:px-40 fixed text-white bg h-[70px] w-full z-10 flex justify-between items-center  py-2 '>
     
      <div className='z-10 p-3 text-xl '>
           <h1>Muhammadqodir</h1>
      </div>

      <div className='hidden md:flex justify-center  space-x-10 items-center'>
        
        <div  onMouseEnter={() => setHoverOpen(true)}
              onMouseLeave={() => setHoverOpen(false)}>
           <button className='relative' onClick={() => setIsOpen((isOpen) => !isOpen)}>
                    Portfolio
                    {! is_hoverOpen ? (
                        <AiOutlineCaretUp className='absolute mt-[-20px] ml-16 ' />
                    ) : (
                    <AiOutlineCaretDown className='absolute ml-16 mt-[-16px]' />
                    )}
           </button>
            

        {is_hoverOpen &&   (
            <ul className='absolute space-y-3 text-black bg-white w-[120px] rounded-md p-3 right-[420px]'>
               <li className=' duration-300 hover:scale-110 hover:text-[#711DB0] cursor-pointer '>
                    <Link  activeClass='active'  onClick={hClick} to='home' spy={true} smooth={true} offset={-250}  duration={400} >Home </Link>
                </li>
            
                <li className='   duration-300 hover:scale-110  cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='about' spy={true} smooth={true} offset={-50}  duration={400} > About </Link>
                </li>

                <li className=' duration-300 hover:scale-110 cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='skills' spy={true} smooth={true} offset={-50}  duration={400} >Services</Link>
                </li>

                <li className='  duration-300 hover:scale-110  cursor-pointer'>
                    <Link activeClass='active'  onClick={hClick}  to='projects' spy={true} smooth={true} offset={-150}  duration={400} >Skills</Link>
                </li>
                
                <li className='duration-300 hover:scale-110  cursor-pointer'>
                <Link activeClass='active' onClick={hClick} to='contact' spy={true} smooth={true} offset={-100} duration={400}>Contact</Link>
                </li>
            </ul>
        )}
        </div>
         

        <button className='CV rounded-md px-2 h-[30px] w-[90px]'>
            <NavLink to="/blog"> My Blog </NavLink>
        </button>
        
        <div className='flex CV justify-between rounded-md px-2  h-[30px] w-[150px]  bg-slate-700'>
             <button className=''>Download CV </button>
              <FiDownloadCloud  className=' mt-1 text-2xl '/>
         </div>
    </div>
   
    <div className="md:hidden cursor-pointer z-10 px-4 text-4xl"  onClick={hClick} >
        {!nav ? <FaBars className='icon text-3xl ' /> :  <FaTimes className="  text-3xl " />}
    </div>

     {nav ? (
       <ul className="first_color md:hidden py-20 p-8 justify-start absolute space-y-5 top-0 w-[100%] h-screen flex-col flex duration-500 "> 
                
               <li>
                    <button className='CV rounded-md px-2 h-[30px] w-[90px]'>
                        <NavLink to="/blog"> My Blog </NavLink>
                    </button>
               </li>
            
                <li className='flex CV justify-between rounded-md px-2  h-[30px] w-[150px]  bg-slate-700'>
                    <button className=''>Download CV </button>
                    <FiDownloadCloud  className=' mt-1 text-2xl '/>
        
                </li>

                <div className='md:hidden'>
                        <button className='relative' onClick={() => setIsOpen((isOpen) => !isOpen)}>
                            Portfolio
                            {! isOpen ? (
                                <AiOutlineCaretUp className='absolute mt-[-20px] ml-16 ' />
                            ) : (
                            <AiOutlineCaretDown className='absolute ml-16 mt-[-16px]' />
                            )}
                    </button>
                    

                {isOpen &&   (
                    <ul className='absolute space-y-3 text-black bg-white w-[120px] rounded-md p-3'>
                    <li className=' duration-300 hover:scale-110 cursor-pointer '>
                            <Link  activeClass='active'  onClick={hClick} to='home' spy={true} smooth={true} offset={-250}  duration={400} >Home</Link>
                        </li>
                    
                        <li className='   duration-300 hover:scale-110  cursor-pointer'>
                            <Link activeClass='active'  onClick={hClick}  to='about' spy={true} smooth={true} offset={-50}  duration={400} > About </Link>
                        </li>

                        <li className=' duration-300 hover:scale-110 cursor-pointer'>
                            <Link activeClass='active'  onClick={hClick}  to='skills' spy={true} smooth={true} offset={-50}  duration={400} >Services</Link>
                        </li>

                        <li className='  duration-300 hover:scale-110  cursor-pointer'>
                            <Link activeClass='active'  onClick={hClick}  to='projects' spy={true} smooth={true} offset={-150}  duration={400} >Skills</Link>
                        </li>
                        
                        <li className='duration-300 hover:scale-110  cursor-pointer'>
                        <Link activeClass='active' onClick={hClick} to='contact' spy={true} smooth={true} offset={-100} duration={400}>Contact</Link>
                        </li>
                    </ul>
                )}
                </div>
                

            </ul>): ""} 

   
    </main>
  );
};

export default Nav_bar;



