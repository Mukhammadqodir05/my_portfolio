import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter,FaBars, FaTimes, FaYoutube  } from 'react-icons/fa';


const Nav_bar = () => {
  const [nav1, setNav1] = useState(false);
  const hClick2 = () => setNav1(!nav1);

  const [nav, setNav] = useState(false);
  const hClick = () => setNav(!nav);

  return (
    <div name='top' className='navbar fixed py-4 md:py-0 bg-[#0a192f]'>
    <div className="container">
    <div className='shadow-md shadow-violet-500 hover:scale-90 md:mt-3 mt-2 duration-500 py-2 px-2 text-4xl ml-[30px] font-bold'>
       <span className='text-yellow-500'>D</span>
       <span className=' text-gray-500'>eveloper</span>
   </div>
         
  

     <ul className={nav ? 'nav-menu active' : 'nav-menu'} style={{alignItems: 'center'}}>

          <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointe'>
             <Link activeClass='active' onClick={hClick} to='home' spy={true} smooth={true} offset={-250}  duration={400} > Home </Link>
          </li>
          
          <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
              <Link activeClass='active'  onClick={hClick}  to='about' spy={true} smooth={true} offset={-50}  duration={400} > About </Link>
          </li>
          <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
              <Link activeClass='active'  onClick={hClick}  to='skills' spy={true} smooth={true} offset={-50}  duration={400} > Skills</Link>
          </li>
          <li className=' hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
              <Link activeClass='active'  onClick={hClick}  to='projects' spy={true} smooth={true} offset={-150}  duration={400} > Projects</Link>
          </li>
          
          <li className='hover:text-teal-500 duration-300 hover:scale-110 font-bold cursor-pointer'>
             <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={400} onClick={hClick}  > Contact </Link>
          </li>
          </ul>

    <div className="hamburger"  onClick={hClick} >
        {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
    </div>



  <div className='hidden lg:flex  absolute flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] mt-[200px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href="https://www.twitter.com"
              target="_blank">
                
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a
              className='flex justify-between items-center w-full text-white'
              href="https://www.facebook.com"
              target="_blank">

              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-700 '>
            <a
              className='flex justify-between items-center w-full text-gray-100'
              href="https://www.instagram.com"
              target="_blank">

              Youtube <FaYoutube size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-100 '>
            <a
              className='flex justify-between items-center w-full text-blue-500'
              href="https://www.telegram.com"
              target="_blank">

              Telegram <FaTelegram size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
    </div>
  );
};

export default Nav_bar;



